$('form').submit(function(event) {
    event.preventDefault();
    var $this = $(this);
    if ($('#input').val().indexOf('http://') != -1 || $('#input').val().indexOf('https://') != -1) {
        $.post('/create', {url: $('#input').val()},  function(data) {
            $('#output').text('New URL: ' + $(location).attr('href')  + data);
        });
    }
    
    else {
        $('#output').text('URL must contain http:// or https:// in it');
    }
});
