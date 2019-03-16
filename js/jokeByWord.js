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
function writeSeveralJokes(data){
    console.log("Estos son los datos:");
    console.log(data);
    var elementReference = document.getElementById("jokes");
    elementReference.innerHTML = "";
    //data.result.forEach(item => {console.log(item.value)});
    data.result.forEach(item => {elementReference.innerHTML+="<h2>"+item.value+"</h2>"});
    //console.log("Joke:",data.value);
    //document.getElementById("joke").innerHTML = data.value;
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
//console.log("Hola");
//ajaxRequest("https://api.chucknorris.io/jokes/categories",writeCategories);
var parentElement = document.getElementById("inputText");
parentElement.addEventListener("keydown", event => {

    if (event.isComposing || event.keyCode === 13) {
        var textChain = document.getElementById("inputText").value;
        ajaxRequest("https://api.chucknorris.io/jokes/search?query="+textChain,writeSeveralJokes);

    }


});
/*
var category = event.target.id;
ajaxRequest("https://api.chucknorris.io/jokes/random?category="+category,writeJoke);
)
*/