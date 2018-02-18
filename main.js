



var i = 1;


document.onclick = function(event){
	let cell  		 = event.target;
	let numberRow	 = findRow(cell);
	let numberColumn = findColumn(cell);
	console.log("column " + numberColumn + " row " + numberRow);
	if(cell.classList.contains('field')){
		cell.classList.add("clicked");
		cell.classList.remove("field");
		cell.innerHTML = i;
		i++;
		// i = i + 1;
	} else if (cell.classList.contains('clicked') && cell.innerHTML == i - 1){
		cell.classList.remove("clicked");
		cell.classList.add('field');
		i--;
		cell.innerHTML = '';		
	} 
}

function findRow(cell){
	return cell.closest('tr').children[0].children[0].innerHTML;
}

function findColumn(cell){
	let numberColumn = 1;
	let cells 		 = cell.closest('tr').children;
	while(cell.closest('td') != cells[numberColumn]){ 
		numberColumn++;
	} 
	return numberColumn;
}