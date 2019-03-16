/*Funciona bien este pedazo de código
-básicamente se trata de una llamada ajax con un console.log a lso datos parseados del json que se trae
-Hay una función que escribe el chiste, solo muestra el campo del texto del chiste del objeto que me trae la petición ajax
->EL PROBLEMA: Una petición ajax introduce un factor de asincrónia en el flujo.
*/

function writeJoke(data){
    console.log("Joke:",data.value);
}

function delay(milliseconds){
	var start = new Date().getTime();
do{

}while(new Date().getTime() - start < milliseconds)

}

function ajaxRequest(url) {
	var xmlHttp = new XMLHttpRequest();
  
			  xmlHttp.onreadystatechange = function () {
  
				  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					  var data = (JSON.parse(xmlHttp.responseText));
					  return data;
				  } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
					  console.error("ERROR! 404");
					  console.info(JSON.parse(xmlHttp.responseText));
				  }
			  };
  
			  xmlHttp.open( "GET", url, true );
			  xmlHttp.send();
			  
  }
  

 var dataFromApi = ajaxRequest("https://api.chucknorris.io/jokes/random");
 writeJoke(dataFromApi);