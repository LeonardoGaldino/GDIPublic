var currentLocation;
//Function to load the content of the specified page into specified element

function changeLocation(event){
    var targetLocation = $(event).length > 0 ? $(event.target).attr('id') : event;

    if(currentLocation != targetLocation){
        $('#loading-circle').show();
        $('#location-content').load('/pages/'+targetLocation+'.html', function(){
            $('#loading-circle').hide();
        });
        currentLocation = targetLocation;
    }
}


$(document)
.on('click', 'a.openPage', changeLocation)
.ready(function(){
    changeLocation('home');
});