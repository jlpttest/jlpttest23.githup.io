function hideSpinner() {
    $("div.spanner").addClass("hide-spinner");
    $("div.overlay").addClass("hide-spinner");
  };
  
  $( document ).ready(function() {
      setTimeout(function(){ hideSpinner() }, 500);
      $(".menu-nav").click(function(){
          if($("#mySidenav").width()> 0){
              $("#mySidenav").width(0);
          }else{
            $("#mySidenav").width(250);
          }
      });
  });
  
