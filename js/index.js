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
					  //console.log(data);
				  } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
					  console.error("ERROR! 404");
					  console.info(JSON.parse(xmlHttp.responseText));
				  }
			  };
  
			  xmlHttp.open( "GET", url, true );
			  xmlHttp.send();
			  return xmlHttp.responseText;
			  
  }
  
 var dataFromAjaxRequest; 
 dataFromAjaxRequest = ajaxRequest("https://api.chucknorris.io/jokes/random");
 delay(10000);
 console.log("dataFromAjaxRequest is "+dataFromAjaxRequest);