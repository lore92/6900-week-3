var width = d3.select('.plot').node().clientWidth,
    height = d3.select('.plot').node().clientHeight;


var values = d3.range(20).map(function(){return Math.random();});



/*function wrapper(){

	var color = 'green';

	function barChart(selection) {


			
		}

	return barChart;
}
*/

//draw a bar chart and configure the bar chart differently
//color of the bar is different for each diagram 


var greenBarChart = simpleBar() //actually a function
.color('green')
.padding(3);

var redBarChart = simpleBar() //actually a function
.color('red')
.padding(3);

d3.select('#plot-1').datum(values).call(greenBarChart);


// var axisX = d3.svg.axis()
// 	.scale(scaleX)
// 	.orient('bottom')