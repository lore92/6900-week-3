//we can define our module
//all his behavior through the API


function simpleBar(){

	var color,
		padding;

	function draw(selection){
		//append DOM elements are append
		//what the color is
		//what the padding is

		//selection is a <div> element
		//selection has data bound to it, an array of numebrs, length unknown
		var w = selection.node().clientWidth,
			h = selection.node().clientHeight;

		//selection.append()

		selection.each(function(data){
			//this is a special variable referencing the selection

			var length = data.length; //this is an arbitrary value
			var barW = (w-padding*(data.length-1) )/data.length;

			var scaleY = d3.scale.linear().domain([0,1]).range([h,0]);

			var svg = selection.append('svg')
				.attr('width', w)
				.attr('height', h);

			svg.selectAll('.bar')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', function(d,i){
				return i*(barW+padding);
			})
			.attr('y', function(d){
				return scaleY(d);
			})
			.attr('width',barW)
			attr('height', function(d){
				return h-scaleY(d);
			})
			.style("fill", color);

		});
	

	}

	draw.color = function(c){ //color
		//c is a color string
		color = c;
		return this;
	}
	draw.padding = function(padding){ //p
		//padding is a number
		padding = padding;
		return this; // this is the same as draw

	}
	return draw;
};