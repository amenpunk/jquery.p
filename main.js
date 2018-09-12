$(document).ready(function() {
   // alert("jQuery esta funcionando !!");
    $('button').on('click',function(){
        var selected = $('#place option:selected');
        var value = selected.val();
        var price = selected.data('price');
        var color = selected.attr('data-price');
        $('#resultado').css('background-color',color);
        $('#resultado').html(color + '<br>'+ value);
    });

    //key press event
    $('#texto').on('keyup input',function(){
        $('#mitxt').html('<br> Bienvenido '+ $(this).val());

    });

    $(".lista").on('click','#bt2',function(){
        var valor = $('#txt').val();
        var htadd = '<li>'+valor+'<p id="del">X</p></li>'
        $('.lista').append(htadd);
    });

    $('.lista').on('click','#del',function(){
        var parent = $(this).parent().remove();
    });

});