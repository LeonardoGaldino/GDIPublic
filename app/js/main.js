var currentLocation;

function updateBackgroundColor(curPage, nextPage) {
    $('#'+curPage).removeClass('selected-page');
    $('#'+nextPage).addClass('selected-page');
}

function removeOrAddMainCardClass(nextPage){
    var element = $('#main-card-panel');
    if(nextPage == 'disciplineContent'){
        element.addClass('main-card-panel-responsive');
    }
    else{
        element.removeClass('main-card-panel-responsive');
    }
}

function addPageClasses(nextPage) {
    removeOrAddMainCardClass(nextPage);
    if(nextPage == 'pdfs'){
        loadPDFPage();
    }
}

//Function to load the content of the specified page into specified element
function changeLocation(event) {
    //Get ID of the tab clicked (event parameter can be the click event or the ID itself)
    var targetLocation = ($(event).length > 0 ? $(event.target).attr('id') : event);

    if(currentLocation != targetLocation){
        updateBackgroundColor(currentLocation, targetLocation);
        $('#main-card').hide();
        $('#loading-circle').show();
        $('#location-content').load('/pages/'+targetLocation+'.html', function(){
            addPageClasses(targetLocation);
            $('.modal').modal();
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