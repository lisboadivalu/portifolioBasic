function menuFunction(x)
    {
        x.classList.toggle("change");
    }

$(document).ready(function(){
    $('.burguer-container').on('click', function(){
        $('.main-navigation').toggle('slow')
    })
})

$(document).ready(function(){
    $('.close').on('click', function(){
        $('.main-navigation').toggle('slow')
    })
})