$(document).ready(function(){
	$('body').append('<div id="container"></div>');
	var gridSize = prompt("Enter your grid size.");
	
	createGrid(gridSize);	
	$('.column').hover(function(){
		$(this).addClass('mouseenter');
	},
	function(){
		$(this).removeClass('mouseenter');
	});
});

function createGrid(gridSize){
	$
	for(var i = 0; i < gridSize; ++i){
		var $row_div = $('<div class="row"></div>');
		$('#container').append($row_div);
		for(var j = 0; j < gridSize; ++j){
			var $col_div = $('<div class="column"></div>');
			var col_size = (960 - 4*gridSize)/gridSize;
			$col_div.css({'width' : `${col_size}`},
							 {'height' : `${col_size}`});
			$('.row').last().append($col_div);
		}
	}
}
