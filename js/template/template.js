$window = $(window);

$window.ready(function(){

  $("body").on("click","#iconMenuContainer",function(){

      if($("#movileMenu").hasClass("menuOculto"))
      {
          $("#movileMenu").removeClass("menuOculto");
          $("#movileMenu").addClass("menuVisible");
      }
      else
      {
          $("#movileMenu").removeClass("menuVisible");
          $("#movileMenu").addClass("menuOculto");
      }



  });

});
