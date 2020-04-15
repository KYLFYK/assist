document.body.onload = function () {
    setTimeout(function() {
        $('#preloader-page').addClass('unvisible');
    }, 1000);

    setTimeout(function () {
        $('#preloader-page').attr('style','display: none');
    }, 2000);
}