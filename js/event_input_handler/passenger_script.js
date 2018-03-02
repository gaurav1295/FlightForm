$(document).ready(function() {
                
                // default behavoir removal
                 $('.adultless,.adultmore,.childrenless,.childrenmore,.infantless,.infantmore').on("click", function (e) {
                    e.stopPropagation();
                });

                // basic addition of all passenger
                var numberofadult=$('#number_of_adults').val();
                var numberofchildren=$('#number_of_children').val();
                var numberofinfant=$('#number_of_infant').val();
                var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                $('#no_of_passengers').val(totalpass);

                // adult field things

                $('.adultmore').on('click',function(e){
               var val = $(this).closest("div.newvalg").find("input").val();
                var convertedval=Number(val);
                convertedval++;
                console.log(val);
                 console.log(convertedval);
                 console.log('more');

                  if(Number($("#number_of_adults").val())>=10){
                     return false;
                 }else{
                     $(this).closest("div.newvalg").find("input").val(convertedval);
                    var numberofadult=$('#number_of_adults').val();
                    var numberofchildren=$('#number_of_children').val();
                    var numberofinfant=$('#number_of_infant').val();
                    var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                    $('#no_of_passengers').val(totalpass);
                 }
               
                
            });


            $('.adultless').on('click',function(){
                    var val = $(this).closest("div.newvalg").find("input").val();
                    var convertedval=Number(val);
                    convertedval--;
                    console.log('less');
                    if(Number($("#number_of_adults").val())<=1){
                     return false;
                 }else{
                     $(this).closest("div.newvalg").find("input").val(convertedval);
                    var numberofadult=$('#number_of_adults').val();
                    var numberofchildren=$('#number_of_children').val();
                    var numberofinfant=$('#number_of_infant').val();
                    var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                    $('#no_of_passengers').val(totalpass);
                 }
                  if(Number($("#number_of_adults").val())<Number($("#number_of_infant").val())){
                    $("#number_of_infant").val($("#number_of_adults").val());
                }
                   
            });


            // children field things

                $('.childrenmore').on('click',function(e){
               var val = $(this).closest("div.newvalg").find("input").val();
                var convertedval=Number(val);
                convertedval++;
                console.log(val);
                 console.log(convertedval);
                 console.log('more');
                 if(Number($("#number_of_children").val())>=8){
                     return false;
                 }else{
                    $(this).closest("div.newvalg").find("input").val(convertedval);
                    var numberofadult=$('#number_of_adults').val();
                    var numberofchildren=$('#number_of_children').val();
                    var numberofinfant=$('#number_of_infant').val();
                    var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                    $('#no_of_passengers').val(totalpass);
                 }
                
                
            });


            $('.childrenless').on('click',function(){
                    var val = $(this).closest("div.newvalg").find("input").val();
                    var convertedval=Number(val);
                    convertedval--;
                    console.log('less');
                     if(Number($("#number_of_children").val())<=0){
                     return false;
                 }else{
                     $(this).closest("div.newvalg").find("input").val(convertedval);
                    var numberofadult=$('#number_of_adults').val();
                    var numberofchildren=$('#number_of_children').val();
                    var numberofinfant=$('#number_of_infant').val();
                    var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                    $('#no_of_passengers').val(totalpass);
                 }
                   
            });

            // infant field things

                $('.infantmore').on('click',function(e){
               var val = $(this).closest("div.newvalg").find("input").val();
                var convertedval=Number(val);
                convertedval++;
                console.log(val);
                 console.log(convertedval);
                 console.log('more');
                 if(Number($("#number_of_infant").val())>=Number($("#number_of_adults").val())){
                     return false;
                 }else{
                    $(this).closest("div.newvalg").find("input").val(convertedval);
                    var numberofadult=$('#number_of_adults').val();
                    var numberofchildren=$('#number_of_children').val();
                    var numberofinfant=$('#number_of_infant').val();
                    var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                    $('#no_of_passengers').val(totalpass);
                 }
               
                
            });


            $('.infantless').on('click',function(){
                    var val = $(this).closest("div.newvalg").find("input").val();
                    var convertedval=Number(val);
                    convertedval--;
                    console.log('less');
                    if(Number($("#number_of_infant").val())<=0){
                      return false;
                    }else{
                        $(this).closest("div.newvalg").find("input").val(convertedval);
                        var numberofadult=$('#number_of_adults').val();
                        var numberofchildren=$('#number_of_children').val();
                        var numberofinfant=$('#number_of_infant').val();
                        var totalpass=Number(numberofadult)+Number(numberofchildren)+Number(numberofinfant);
                        $('#no_of_passengers').val(totalpass);
                    }
                     
                 
            });

            $('#number_of_adults').on('change',function(e){
               
            });

          
                 
            });