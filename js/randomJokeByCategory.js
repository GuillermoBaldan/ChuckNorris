/*Funciona bien este pedazo de código
-básicamente se trata de una llamada ajax con un console.log a lso datos parseados del json que se trae
-Hay una función que escribe el chiste, solo muestra el campo del texto del chiste del objeto que me trae la petición ajax
*/
function showDataCategory(data){
    console.log(data);
}
function writeCategories(data){
    //console.log("Joke:",data.value);
    //document.getElementById("joke").innerHTML = data.value;
    var elementReference = document.getElementById("optionsForm");
    data.forEach(item => {elementReference.innerHTML+="<input type=\"radio\" name=\"radio\" id="+item+"> <label for=\"radio\">"+item+"</label>";
    });
}
function writeJoke(data){
    console.log("Joke:",data.value);
    document.getElementById("joke").innerHTML = data.value;
}


function ajaxRequest(url, cb) {
	var xmlHttp = new XMLHttpRequest();
  
			  xmlHttp.onreadystatechange = function () {
  
				  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					  var data = (JSON.parse(xmlHttp.responseText));
					  cb(data);
				  } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
					  console.error("ERROR! 404");
					  console.info(JSON.parse(xmlHttp.responseText));
				  }
			  };
  
			  xmlHttp.open( "GET", url, true );
			  xmlHttp.send();
			  
  }
console.log("Hola");
ajaxRequest("https://api.chucknorris.io/jokes/categories",writeCategories);
var parentElement = document.getElementById("optionsForm");
parentElement.addEventListener("click",function(event){
var category = event.target.id;
ajaxRequest("https://api.chucknorris.io/jokes/random?category="+category,writeJoke);

})
// writeJoke(dataFromApi);