#!/bin/python

import json
from re import match, sub
from os import getpid
from uuid import uuid4
from codecs import open
from gevent import monkey; monkey.patch_all()
from socketio import socketio_manage
from socketio.server import SocketIOServer
from socketio.namespace import BaseNamespace
from socketio.mixins import BroadcastMixin

#Global initialization of lists
commonwordslist = []
wordcloudlist   = {}
cloud_password = "doenerschmecktgut"

def logtofile():
    '''Logs the words to a file so they can be restored'''

    try:
        with open('bluenight.log', 'w', 'utf8') as fileObj: 
            fileObj.write(json.dumps(wordcloudlist))
    except IOError:
        print 'Error: Could not write log file'

def loadwordlog():
    '''Restores the words from the log file'''

    global wordcloudlist

    try:
        with open('bluenight.log') as json_file: 
            wordcloudlist = json.load(json_file)
            print wordcloudlist
            print 'OK: Wordlist restored from log'
    except IOError:
        print 'INFO: No log available - starting new one'

def loadcommonwords():
    '''Loads the common German words into a list so they can be filtered'''

    global commonwordslist

    try:
        with open('static/german', 'r', 'UTF-8') as fileObj:    
            commonwordslist = fileObj.read().split()
            print 'OK: Common words loaded'
    except IOError:
        print 'INFO: No common wordlist available'

class CloudNamespace(BaseNamespace, BroadcastMixin):

    def recv_connect(self):
        '''Sends list to socket when connection is received'''
        
        self.broadcast_event('listio', wordcloudlist)
        print 'OK: Connection Received. Complete list sent to socket'

    def on_delete_word(self, word):
        '''Delete the word specified by admin interface'''
        
        global wordcloudlist
        
        if(word["password"] == cloud_password):
            try:
                del wordcloudlist[word["word"]]
                logtofile()
                print 'ADMIN: Word was deleted'
                self.broadcast_event('listio', wordcloudlist)
            except KeyError, TypeError:
                pass
        else:
            self.emit('passerror')

    def on_get_list(self):
        '''Gets the whole list when requested'''
        
        self.broadcast_event('listio', wordcloudlist)
        print 'OK: Requested list and sent to socket'

    def on_user_message(self, userinput):
        '''Reads user input from socket checks it and sends feedback'''

        word = userinput.lower()

        if word in commonwordslist:
            self.emiterror(1)
        elif not word.isalpha():
           self.emiterror(2)
        elif len(word) > 20:
            self.emiterror(3)
        elif ' ' in word:
           self.emiterror(4)
        elif 'www' in word:
           self.emiterror(5)
        else:
            self.emitword(word)
            logtofile()

    def on_checkpassword(self, password):
        print password
        if(password != cloud_password):
            self.emit('passerror')

    def emitword(self, word):
        '''Takes care of word count and sends output to socket'''

        global wordcloudlist

        if word not in wordcloudlist.keys():
            wordcloudlist[word] = 1
            isnewword = True
        else:
            wordcloudlist[word] += 1
            isnewword = False

        data = { 'theword':word, 'count':wordcloudlist[word], 'isnewword':isnewword }
        #Example output: theword:gozilla, count:4, isnewword:false

        self.broadcast_event('wordio', data)
        print 'OK: Word sent to socket'

    def emiterror(self, errcode):
        '''Sends error message to socket, for some usability'''
        
        self.broadcast_event('errorio', errcode)

        '''if errcode == 1: 
            self.broadcast_event('errorio', "Error 1: Common Word entered")
            print 'Error: common word entered'
        elif errcode == 2:
            self.broadcast_event('errorio', 'Error 2: Special Character')
            print 'Error: Special character entered'
        elif errcode == 3:
            self.broadcast_event('errorio', 'Error 3: Word too long')
            print 'Error: Word too long'
        elif errcode == 4:
            self.broadcast_event('errorio', 'Error 4: Entered sentence')
            print 'Error: Sentence entered'
        elif errcode == 5:
            self.broadcast_event('errorio', 'Error 5: Entered forbidden stuff')
            print 'Error: Forbidden stuff entered'
        else:
            self.broadcast_event('errorio', 'Error 99: Unknown')
            print 'Error: Unknown Error - Sorry' '''


class Application(object):
    def __init__(self):
        self.buffer = []

    def __call__(self, environ, start_response):
        path = environ['PATH_INFO'].strip('/')

        #if path.startswith('static/') or path == 'index.html' or path == 'admin.html':
        if path.startswith('static/') or path.endswith('.html'):
            try:
                data = open(path).read()
            except Exception:
                return not_found(start_response)

            if path.endswith('.js'):
                content_type = 'text/javascript'
            elif path.endswith('.css'):
                content_type = 'text/css'
            elif path.endswith('.swf'):
                content_type = 'application/x-shockwave-flash'
            else:
                content_type = 'text/html'

            start_response('200 OK', [('Content-Type', content_type)])
            return [data]

        if path.startswith('socket.io'):
            socketio_manage(environ, {'/cloud': CloudNamespace})
        else:
            return not_found(start_response)

def not_found(start_response):    
    start_response('404 Not Found', [])
    return ['<h1>Not Found</h1>']

if __name__ == '__main__':
    '''Main function. Starts server on http://localhost:8080'''

    loadcommonwords()
    loadwordlog()

    server = SocketIOServer(('127.0.0.1', 8080), Application(),resource='socket.io', policy_server=True, policy_listener=('127.0.0.1', 10843))

try:
    print '########################'
    print 'Server started. PID:', getpid()
    print 'Listening on http://localhost:8080'
    print 'Hint: Quit server by sending SIGINT (ctrl + c)'
    print '########################'
    
    server.serve_forever()

except KeyboardInterrupt:
    print '########################'
    print "Server stopped"
    print '########################'

    server.close()
