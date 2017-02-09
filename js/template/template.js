$window = $(window);
$window.ready(function(){

  function menuAction(){
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
  }

  function initAnimations()
  {
    if($("#imgFoodConatiner1").hasClass("imgFoodConatiner1_P1"))
    {
        $("#imgFoodConatiner1").removeClass("imgFoodConatiner1_P1");
        $("#imgFoodConatiner1").addClass("imgFoodConatiner1_P2");
    }
  }

  $("body").on("click","#iconMenuContainer",function(){
     menuAction();
  });

  setTimeout(function(){ initAnimations(); }, 250);

});
