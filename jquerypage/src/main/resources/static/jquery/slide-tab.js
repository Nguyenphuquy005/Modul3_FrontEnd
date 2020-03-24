$(function () {
    var isblook = false ;
    $('#bikestyle').click(function () {
        isblook = !isblook ;
        if (isblook){
            $('#bikeblook').css({"display":"block"})
            $('#bikeblook').timeout(100000) ;

        }
        else {
            $('#bikeblook').css({"display":"none"})

        }
    })
})
