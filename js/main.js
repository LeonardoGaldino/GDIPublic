//Function to load the content of the specified page into specified element
function changeLocation(targetLocation){
    $('#loading-circle').show();
    $('#location-content').load('/pages/'+targetLocation+'.html', ()=>{
        $('#loading-circle').hide();
    });
}

$(document).ready(function(){
    changeLocation('home');
});

