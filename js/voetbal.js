//Bron: Scott Murray, 'code artist': http://alignedleft.com/tutorials/d3/making-a-bar-chart

//Note: Aanpassingen: statische chart in een functie geplaatst, knoppen toegevoegd, functie voor knoppen toegevoegd, formaten aangepast, kleur aangepast

var dataset = [ 42, 26, 33, 53, 60, 55, 51, 32]; //Ronaldo            
var dataset2 = [ 16, 38, 47, 53, 73, 60, 41, 21]; //Messi

function redraw(dataset){

var w = 800;
var h = 300;
var barPadding = 6;
var margin = {top: 30, right: 20, bottom: 30, left: 50};
var kleur = '#262626';

var svg = d3.select("voetbal").append("svg")
   .attr("width", w)
   .attr("height", h);
            
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", 0)
   
   .attr("y", function(d) {
    return h - d * 4;
	})
   .attr("width", w / dataset.length - barPadding)
   
   .attr("height", function(d) {
    return d * 4;
    })
    
   .attr("x", function(d, i) {
    return i * 100;
	})
	
   .attr("fill", kleur);
   
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
        return d;
   })
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
    })
   .attr("y", function(d) {
        return h - (d * 4) + 14;  //15 is now 14
    })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "white")
   .attr("text-anchor", "middle");
   
}

redraw(dataset);

$('#dataset2').click(function(){
	$('voetbal').html("");
	redraw(dataset2);
	$('.dataset').hide();
	$('.dataset.dataset2').show(); 
});

$('#dataset').click(function(){
	$('voetbal').html("");
	redraw(dataset);
	$('.dataset').hide();
	$('.dataset.dataset').show(); 
});
