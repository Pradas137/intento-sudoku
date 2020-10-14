function crearTabla(){
	var i, j, clas;
	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			clas = '';
			if (j === 0) clas = 'first ';
			else if (j === 7) clas = 'last ';
			clas += (i % 2 == j % 2) ? 'white' : 'black';
			var field = document.createElement('div');
			field.className = clas;
			document.body.appendChild(field);
		}
	}
}
 