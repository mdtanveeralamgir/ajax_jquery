// Making a get request
$.get("/todos", function (data) {
  console.log(data);
});

// Making a post req
/*
$("form").submit(function(event){
    event.preventDefault();
    var formData = $(this).serialize();
    //param("url", "dataToServer", "datafromServer")
    $.post("/todos", formData, function(data){
        console.log(data);
    });
});
*/
// Making a put req
$("form").submit(function (event) {
  event.preventDefault();
  var formData = $(this).serialize();
  var formAction = $(this).attr("action");
  //param("url", "dataToServer", "datafromServer")
  $.ajax({
    url: formAction,
    data: formData,
    type: "PUT",
    success: function (data) {
        console.log(data);
    },
  });
});
