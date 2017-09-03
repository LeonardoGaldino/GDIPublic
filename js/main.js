//Function to load the content of the specified page into specified element
function reload(elementId){
    var container = document.getElementById(elementId);
    var content = container.innerHTML;
    container.innerHTML= content;
}

function changeLocation(targetLocation){
    $('#location-content').load('/pages/'+targetLocation+'.html', function(){
    });

}


$(document).ready(function(){
    changeLocation('home');

});

