//var fill = d3.scale.category20();
var fill = d3.scale.ordinal().range(['#112ECB', '#0A73A3', '#15F1FF', '#4D5CFF', '#69A9E8', '#4246f8']);

/*var w = 800,
  h = 800;*/

var w = $(window).width(),
    h = $(window).innerHeight();

var words = [],
    max,
    scale = 1,
    complete = 0,
    keyword = "",
    tags = [],
    fontSize,
    maxLength = 30,
    aniTime = 5000;

var layout = d3.layout.cloud()
    .timeInterval(10)
    .size([w, h])
    .fontSize(function(d) {
        return fontSize(+d.value);
    })
    .text(function(d) {
        return d.key;
        //Set a range for the angles of the words.
        //(Math.random() * amount_Of_angles) * to_Degrees - from_Degrees
    }).rotate(function() {
        return~~ (Math.random() * 2) * 90 - 90;
    })
    .on("end", draw);

var svg = d3.select("body").append("svg").style("background-color", "#000")
    .attr("width", w)
    .attr("height", h);

var background = svg.append("g"),
    vis = svg.append("g")
        .attr("transform", "translate(" + [w >> 1, h >> 1] + ")");

function generate() {
    layout
        .font("Open Sans")
        .spiral("archimedean");
    fontSize = d3.scale.log().range([30, 150]);
    if (tags.length) fontSize.domain([1, +tags.length]);
    complete = 0;
    words = [];
    layout.stop().words(tags.slice(0, max = Math.min(tags.length, 1000))).start();
}

function draw(data, bounds) {
    scale = bounds ? Math.min(
        w / Math.abs(bounds[1].x - w / 2),
        w / Math.abs(bounds[0].x - w / 2),
        h / Math.abs(bounds[1].y - h / 2),
        h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;
    words = data;
    var text = vis.selectAll("text")
        .data(words, function(d) {
            return d.text.toLowerCase();
        });
    text.transition()
        .duration(aniTime)
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .style("font-size", function(d) {
            return d.size + "px";
        });
    text.enter().append("text")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .style("font-size", function(d) {
            return d.size + "px";
        })
        .on("click", function(d) {
            load(d.text);
        })
        .style("opacity", 1e-6)
        .transition()
        .duration(aniTime)
        .style("opacity", 1);
    text.style("font-family", function(d) {
        return d.font;
    })
        .style("fill", function(d) {
            return fill(d.text.toLowerCase());
        })
        .text(function(d) {
            return d.text;
        });
    var exitGroup = background.append("g")
        .attr("transform", vis.attr("transform"));
    var exitGroupNode = exitGroup.node();
    text.exit().each(function() {
        exitGroupNode.appendChild(this);
    });
    exitGroup.transition()
        .duration(aniTime)
        .style("opacity", 1e-6)
        .remove();
    vis.transition()
        .delay(1000)
        .duration(750)
        .attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
}