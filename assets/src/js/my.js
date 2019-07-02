$( document ).ready(function() {

    // выбор рода деятельности.
    //*******************/
    // установка значения по умолчанию
    //
    var textli = $(".rb__item.active").text();
    console.log('установка значения по умолчанию ' + textli);
    $('#hotnews').text(textli);

    // установка значения по клику
    //
    $(".rb__item").click(function() {
        var li = $(this).addClass('active');
        console.log('выбран ' + li.text());
        $('#hotnews').text(li.text());
        li.siblings().removeClass('active');
    });

    // выбор услуг
    $(".service__wrapper").click(function(){
        $(this).toggleClass( "checked" );
    });

    // кнопка наверх
    $('#upbutton').click(
        function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
        }
    );

});

