//Function to load the content of the specified page into specified element
function changeLocation(targetLocation){
    $('#location-content').load('/pages/'+targetLocation+'.html');
}


$(document).ready(function(){
    changeLocation('home');
});

