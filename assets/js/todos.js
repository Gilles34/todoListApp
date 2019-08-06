
// check off specific todos by clicking
$("ul").on("click", "li" , function(){
  $(this).toggleClass("completed");
})

//click on X to remove todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

//add new todos
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab the text that was added
    var todoText = $(this).val();
    $(this).val("");
    // append to the bottom of the list of todos
    $("ul").append("<li><span><i class=\"delete fas fa-trash-alt\" aria-hidden=\"true\"></i></span>" + todoText + "</li>");

  }
})

$("h1").on("click",".edit",function(){
  $("input[type='text']").fadeToggle();
  if (document.querySelector("input[type='text']").style.display === "block"){
    document.querySelector("input[type='text']").style.border = "3px solid steelblue";
  }
})
