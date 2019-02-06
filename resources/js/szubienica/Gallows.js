function showGallows(){
    document.getElementById("gallows").innerHTML = '<img src="resources/images/szub0.png"/>';
}

function buildGallows(level){
    document.getElementById("gallows").innerHTML = '<img src="resources/images/szub'+level+'.png"/>';
}