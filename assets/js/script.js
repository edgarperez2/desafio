// oculta contenido de la cards. Se puede hacer con el h5 o con la clase
$('.card-title').on('click', function() {
    $(this).siblings('.card-text').toggle();
});