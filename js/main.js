var currentLocation;
//Function to load the content of the specified page into specified element

function changeLocation(targetLocation){
    if(currentLocation != targetLocation){
        $('#loading-circle').show();
        $('#location-content').load('/pages/'+targetLocation+'.html', ()=>{
            $('#loading-circle').hide();
        });
        currentLocation = targetLocation;
    }
}

$(document).ready(function(){
    changeLocation('home');
});

