
         
            $('#destination,#destination_icon').click(function () {
               
                console.log('wah');
                if($('#destination_icon').html()=="arrow_drop_down")
                {
                    $('#destination_icon').html('arrow_drop_up');
                     $('#destination_icon').css('border','1px solid #02f7ff');
                }
                else
                {   
                    $('#destination_icon').html('arrow_drop_down'); 
                    $('#destination_icon').css('border','0px');  
                   
                }
            }); 

            $('#airportlistul1 li').click(function () {
                var value=$(this).children('.airportName').html();
                $('#destination').val(value);
                console.log(value);
            });
        

        jQuery('input').click( function(e) {
    jQuery('.collapse').collapse('hide');
});

 $(document).ready(function() {
    $('select').material_select();
  });


   $(document).ready(function() {
                
                $('#origin').on("focus", function(){
                    var posorigin=$("#origin").offset();
                var newpos=posorigin.top+100+"px";
                console.log(newpos);
                $("#placess").css("top",newpos);

                    });

                $('#destination').on("focus", function(){
                    var posdestination=$("#destination").offset();
                var newpos1=posdestination.top+100+"px";
                console.log(newpos1);
                $("#placess").css("top",newpos1);
                    });
            })