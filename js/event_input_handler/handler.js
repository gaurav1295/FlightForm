 var airportscroll1 = new SimpleBar(document.getElementById('wah2'));
          var countryscroll1 = new SimpleBar(document.getElementById('wah3'));
         var airportscroll = new SimpleBar(document.getElementById('wah'));
          var countryscroll = new SimpleBar(document.getElementById('wah1'));
            $('#origin,#origin_icon').click(function () {
               
                console.log('wah');
                if($('#origin_icon').html()=="arrow_drop_down")
                {
                    $('#origin_icon').html('arrow_drop_up');
                     $('#origin_icon').css('border','1px solid #02f7ff');
                }
                else
                {   
                    $('#origin_icon').html('arrow_drop_down'); 
                    $('#origin_icon').css('border','0px');  
                   
                }
            }); 

            $('#airportlistul li').click(function (e) {
                e.preventDefault();
                var value=$(this).children('.airportName').html();
                $('#origin').val(value);
                 $('#destination').focus();
                console.log(value);
            });