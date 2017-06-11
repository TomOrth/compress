$('form').submit(function(event) {
    console.log('sucess');
    event.preventDefault();
    var $this = $(this);
    $.post('/create', {url: $('#input').val()},  function(data) {
        $('#output').text('New URL: ' + $(location).attr('href')  + data);
    });
});
