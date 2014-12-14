// bron: http://bl.ocks.org/mbostock/4341574
// bron: Lessen D3 Robbert Winkel

// note: aanpassingen in kleur, aantal, aantal knoppen, mouse over/leave toevoegen, if statements voor juiste hovers bij elke waarde


var venue = [4,4,2,2,1];
var artist = [3,2,2,1,1,1,1,1];
var color = ["#eb0d0d","#b12727","#7d3535","#de6640","#f53a01", "#b63333", "#b66733", "#961c1c", "#f14646", "#ef6868", "#ed8888"];
var selectie = 'artist'

function concert(soort){

var margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 500,
	height = 500,
	radius = Math.min(width, height) / 2;

var pie = d3.layout.pie()
	.sort(null);

var arc = d3.svg.arc()
	.innerRadius(radius - 75)
	.outerRadius(radius - 20);

var svg = d3.select("section").append("svg")
	.attr("width", width)
	.attr("height", height)
	.attr("class", "cirkel")
	.append("g")
	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var path = svg.selectAll("path")
	.data(pie(soort))
	.enter().append("path")
	.attr("fill", function(d, i) { return color[i]; })
	.attr("d", arc)

var labels = svg.selectAll("text")
	.data(pie(soort))
	.enter().append("text")
	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	.attr("dy", ".10em")
	.style("fill","#FFF")
	.style("text-anchor", "middle")
	.style("font-weight", "italic")
	.text(function(d) { return d.data; });
	
var enter = svg.selectAll("path").on('mouseenter', function(d,i) {
	d3.select(this).transition()
	.ease('cubic-out')
	.duration('500')
	.style("fill","#000");
	
	if (selectie === 'artist') {
	$("#artist"+(i+1)).css("font-weight","bold");
	}
	
	if (selectie === 'venue') {
	$("#venue"+(i+11)).css("font-weight","bold");
	}
})

var leave = svg.selectAll("path").on('mouseleave', function(d,i) {
	d3.select(this).transition()
	.ease('cubic-out')
	.duration('500')
	.style("fill", color[i]);
	
	if (selectie === 'artist') {
	$("#artist"+(i+1)).css("font-weight","normal");
	}
	
	if (selectie === 'venue') {
	$("#venue"+(i+11)).css("font-weight","normal");
	}
})
	

}

concert(artist);

$('#venue').click(function(){
	$('section').html("");
	concert(venue);
	$('.soort').hide();
	$('.soort.venue').show(); 
	
	selectie = 'venue';
});

$('#artist').click(function(){
	$('section').html("");
	concert(artist);
	$('.soort').show();
	
	selectie = 'artist';
});
