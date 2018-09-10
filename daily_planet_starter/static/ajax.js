$(document).ready(function() {
  console.log('ajax reached on this page');
  $('#delete-btn').click(function (e) {
    e.preventDefault();

    var url = $(this).attr('href');
    console.log('delete button pressed, url is', url);

    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function(data) {
      window.location = '/articles';
      console.log('delete was recieved');
    }).fail(function(err) {
      console.log('error was:', err);
    });
  });

  $('edit-form').submit(function (e) {
    console.log('submit was reached');
    e.preventDefault();
    var url = $(this).attr('action');
    var data = $(this).serialize();
    console.log(data);

    $.ajax({
      method: "PUT",
      url: url,
      data: data
    }).done(function(data) {
      window.location = "/articles";
    }).fail(function(err) {
      console.log('error for submitting edited article was:', err);
    });
  });
});
