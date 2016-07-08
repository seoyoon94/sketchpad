$(document).ready(function(){
	var gridSize = prompt("Enter your grid size.");
	createGrid(gridSize);	
	$('.column').hover(function(){
		$(this).addClass('mouseenter');
	},
	function(){
		$(this).removeClass('mouseenter');
	});
}

function createGrid(gridSize){
	for(var i = 0; i < gridSize; ++i){
		var $row_div = $('<div class="row"></div>');
		$(body).append($row_div);
		for(var j = 0; j < gridSize; ++j){
			var $col_div = $('<div class="column"></div>');
			$(body).find('.row').last().append($col_div);
		}
	}
}
