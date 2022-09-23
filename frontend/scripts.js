	
$.getJSON( "http://localhost/bootstrap-jquery/newsapi.php", function( data ) {
  let items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + key + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
