var currentLocation;
//Function to load the content of the specified page into specified element

function changeLocation(event){

    var targetLocation = ($(event).length > 0 ? $(event.target).attr('id') : event);

    if(currentLocation != targetLocation){
        $('#main-card').hide();
        $('#loading-circle').show();
        $('#location-content').load('/pages/'+targetLocation+'.html', function(){
            $('#loading-circle').hide();
            $('#main-card').show();        
        });
        currentLocation = targetLocation;
        if(window.innerWidth <= 992)
            $(".drag-target").click();
    }

}


$(document)
.on('click', 'a.openPage', changeLocation)
.ready(function(){
    changeLocation('home');
    $(".button-collapse").sideNav();
});