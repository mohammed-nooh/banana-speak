
var btnTranslate = document.querySelector("#submit");
var inputText = document.querySelector("#input-text");

var serverUrl ="https://api.funtranslations.com/translate/minion.json"
;
var output=document.querySelector("#output-box");

function constructUrl(){
    return serverUrl+"?"+"text="+inputText.value;
}

function errorHandler(error){
    alert("something went wrong please try again later");
    console.log("something went wrong",error)
}

function doFetch(){
    fetch(constructUrl())
    .then(response => response.json())
    .then(json => output.innerText=json.contents.translated)
    .catch(errorHandler)
    
}


// btnTranslate.addEventListener("click",function clickEventHandler(){

// console.log(inputText.value);
// output.innerText=inputText.value;
// });

btnTranslate.addEventListener("click", doFetch);
