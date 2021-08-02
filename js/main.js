function menuFunction(x)
    {
        x.classList.toggle("change");
    }

$(document).ready(function(){
    $('.burguer-container, .close' ).on('click', function(){
        $('.main-navigation').toggle('slow')
    })
})
