$(function() {
    var search = $('#search');
    var results = $('#results');

    search.keypress(function(event) {
        console.log('press this: ' + String.fromCharCode(event.which));
        $.ajax({
          method: "GET",
          url: "/search",
          data: { query: search.val() }
        })
        .done(function(data) {
           console.log(data);
           results.css('background-color', 'gray');
           results.text(results.text() + JSON.stringify(data));
        });
    });
});
