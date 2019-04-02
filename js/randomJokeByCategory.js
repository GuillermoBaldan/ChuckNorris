/*Funciona bien este pedazo de código
-básicamente se trata de una llamada ajax con un console.log a lso datos parseados del json que se trae
-Hay una función que escribe el chiste, solo muestra el campo del texto del chiste del objeto que me trae la petición ajax
*/
function showDataCategory(data){
    console.log(data);
}
function writeCategories(data){
    var elementReference = document.getElementById("optionsForm");
	data.forEach(item => {
		var input = document.createElement('input');
		input.setAttribute('type','radio');
		input.setAttribute('name','radio');
		input.setAttribute('id',`${item}`);
		var label = document.createElement('label');
		label.setAttribute('for','radio');
		label.textContent = `${item}`;
		elementReference.appendChild(input);
		elementReference.appendChild(label);
    });
}
function writeJoke(data){
    console.log("Joke:",data.value);
    document.getElementById("joke").innerHTML = data.value;
}



ajaxRequest("https://api.chucknorris.io/jokes/categories",writeCategories);
var parentElement = document.getElementById("optionsForm");
parentElement.addEventListener("click",function(event){
var category = event.target.id;
ajaxRequest("https://api.chucknorris.io/jokes/random?category="+category,writeJoke);

})
// writeJoke(dataFromApi);