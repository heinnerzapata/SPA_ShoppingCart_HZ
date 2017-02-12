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

  function showTestAllImagesStates(NoIter){

    var i=1;
    for(i=1;i<=NoIter;i++)
    {
      if($("#imgFoodConatiner" + String(i)).hasClass("imgFoodConatiner" + String(i) + "_P1"))
      {
          $("#imgFoodConatiner" + String(i)).removeClass("imgFoodConatiner" + String(i) +"_P1");
          $("#imgFoodConatiner" + String(i)).addClass("imgFoodConatiner" +  String(i) + "_P2");
      }
    }

  }

  function initAnimations()
  {
    showTestAllImagesStates(2);
  }

  $("body").on("click","#iconMenuContainer",function(){
     menuAction();
  });


  $("body").on("click","#imgScrollIcon",function(){
    var scroll = $(window).scrollTop();

    if($("#imgScrollIcon").hasClass("ImgScrollUp"))
    {
        $(window).scrollTop(0);

        //$.scrollTo($('#pageLogoTitleContainerChild'), 1000);

    }

  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if(scroll > 0 && $("#imgScrollIcon").hasClass("ImgScrollDown"))
    {
      $("#imgScrollIcon").removeClass("ImgScrollDown");
      $("#imgScrollIcon").addClass("ImgScrollUp");
    }

    if(scroll == 0 && $("#imgScrollIcon").hasClass("ImgScrollUp"))
    {
      $("#imgScrollIcon").removeClass("ImgScrollUp");
      $("#imgScrollIcon").addClass("ImgScrollDown");
    }


  });

  function init(){

     setTimeout(function(){ initAnimations(); }, 250);

  }
 
  init();

});
