/*Funciona bien este pedazo de código
-básicamente se trata de una llamada ajax con un console.log a lso datos parseados del json que se trae
-Hay una función que escribe el chiste, solo muestra el campo del texto del chiste del objeto que me trae la petición ajax
*/

function writeJoke(data){
    console.log("Joke:",data.value);
    document.getElementById("joke").innerHTML = data.value;
}




  
ajaxRequest("https://api.chucknorris.io/jokes/random",writeJoke);
// writeJoke(dataFromApi);