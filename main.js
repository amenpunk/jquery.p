$(document).ready(function() {
    alert("jQuery esta funcionando !!");
    $('button').on('click',function(){
        var selected = $('#place option:selected');
        var value = selected.val();
        var price = selected.data('price');
        //console.log(value);
        //console.log(value);
        var color = selected.attr('data-price');
    $('#resultado').css('background-color',color);

    })
});