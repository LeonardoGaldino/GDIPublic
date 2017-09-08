function addPDFsLinks() {
    var pdfs = $('.download-pdf');
    for(var i = 0 ; i < pdfs.length ; ++i){
        var url = ('assets/pdfs/' + pdfs[i].id + '.pdf')
        pdfs[i].href = url;
    }
}

function fixOrderOffset() {
    var spans = $('.pdf-order-span');
    spans.each(function(idx, span) {
        let val = parseInt(span.innerHTML);
        if(val > 9)
            span.style.left = '7px';
        else
            span.style.left = '11px';
    });
}

function loadPDFPage() {
    addPDFsLinks();
    fixOrderOffset();
}

