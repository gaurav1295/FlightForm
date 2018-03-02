var options1 = {
        shouldSort: true,
        threshold: 0.4,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
            name: 'iata',
            weight: 0.5
        }, {
            name: 'name',
            weight: 0.1
        }, {
            name: 'city',
            weight: 0.2
        },{
            name:'country',
            weight:0.2
        }]
    };

    var fuse1 = new Fuse(airportsss1, options1)


    var ac1 = $('#destination').on('focus keyup', function(e){
        e.stopPropagation();
        search1(e);
        $("#demo1").collapse('show');
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
        $('#countrylistul1 li').on( "click", function(e) {
            //    e.stopPropagation();
             $(this).addClass('selected').siblings().removeClass('selected');
                 console.log('asdas');
                var id = $(this).attr('data-country'); 
                $("#airportlistul1 li").each(function(){
                    $(this).hide();
                    if($(this).attr('data-country') == id) {
                        $(this).show();
                    }
                });
                $('#airportlistul1').empty();
                showairportlistoncountryselected1(id);

                  $('#airportlistul1 li').click(function () {
                var value=$(this).children('.airportName').html();
                $('#destination').val(value);
                $('#demo1').collapse('hide');
                console.log(value);
            });
        });
        
        
                  $('#airportlistul1 li').click(function () {
                var value=$(this).children('.airportName').html();
                $('#destination').val(value);
                $('#demo1').collapse('hide');
                console.log(value);
            });

          
    });

    var results1 = [];
   var resultcountry1=[];
 function search1(e) {
        if (e.which === 38 || e.which === 13 || e.which === 40) {
            return;
        }

        if (ac1.val().length > 0) {
            results1 = _.take(fuse1.search(ac1.val()), 10);
            resultcountry1=_.uniqBy(results1, 'country');

            var remainingcountries1=_.uniqBy(airportsss1, 'country');
            var diff1=_.difference(remainingcountries1,resultcountry1);

            numResults1 = results1.length;

            var lis1 = results1.map(function(r, i) {
                return '<li class="highlight" data-iata="'+r.iata+'" data-country="'+r.country+'" data-name="'+r.name+'">\
                    <span class="airportcity">'+r.city+'</span><span class="countryName"> , '+r.country+'</span>\<br>\
                    <span class="airportName">'+r.name+' ('+r.iata+')</span><br>';
            });

            var yoyo2 = resultcountry1.map(function(r, i) {
                return '<li class="highlight1"  data-country="'+r.country+'">\
                        <span>'+r.country+'</span>';
            });
            var yoyo3 = diff1.map(function(r, i) {
                return '<li class="disabled1"  data-country="'+r.country+'" disabled >\
                        <span>'+r.country+'</span>';
            });

            $('#airportlistul1').html(lis1.join(''));
            $("#countrylistul1").html(yoyo2.join(''));
            $("#countrylistul1").append(yoyo3.join(''));
        } else {
            $('#airportlistul1').empty();
            $("#countrylistul1").empty();
            showairportlist1();
            showcountrylist1();
        }
    }
