function addPDFsLinks() {
    var pdfs = $('.download-pdf');
    pdfs.each(function(idx, pdf) {
        var url = ('assets/pdfs/' + pdf.id + '.pdf');
        pdf.href = url;
    });
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

