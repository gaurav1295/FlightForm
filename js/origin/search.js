var options = {
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

    var fuse = new Fuse(airportsss, options)


    var ac = $('#origin').on('focus keyup', function(e){
        e.stopPropagation();
        search(e);
        $("#demo").collapse('show');
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
        $('#countrylistul li').on( "click", function(e) {
            //    e.stopPropagation();
             $(this).addClass('selected').siblings().removeClass('selected');
                 console.log('asdas');
                var id = $(this).attr('data-country'); 
                $("#airportlistul li").each(function(){
                    $(this).hide();
                    if($(this).attr('data-country') == id) {
                        $(this).show();
                    }
                });
                $('#airportlistul').empty();
                showairportlistoncountryselected(id);
                $('#airportlistul li').click(function () {
                var value=$(this).children('.airportName').html();
                $('#origin').val(value);
                $('#demo').collapse('hide');
                $('#destination').focus();
                console.log(value);
            });
        });
        $('#airportlistul li').click(function () {
                var value=$(this).children('.airportName').html();
                $('#origin').val(value);
                console.log(value);
                $('#demo').collapse('hide');
                 $('#destination').focus();
            });
    
    });

    var results = [];
   var resultcountry=[];
 function search(e) {
        if (e.which === 38 || e.which === 13 || e.which === 40) {
            return;
        }

        if (ac.val().length > 0) {
            results = _.take(fuse.search(ac.val()), 10);
            resultcountry=_.uniqBy(results, 'country');

            var remainingcountries=_.uniqBy(airportsss, 'country');
            var diff=_.difference(remainingcountries,resultcountry);

            numResults = results.length;

            var lis = results.map(function(r, i) {
                return '<li class="highlight" data-iata="'+r.iata+'" data-country="'+r.country+'" data-name="'+r.name+'">\
                    <span class="airportcity">'+r.city+'</span><span class="countryName"> , '+r.country+'</span>\<br>\
                    <span class="airportName">'+r.name+' ('+r.iata+')</span><br>';
            });

            var yoyo = resultcountry.map(function(r, i) {
                return '<li class="highlight1"  data-country="'+r.country+'">\
                        <span>'+r.country+'</span>';
            });
            var yoyo1 = diff.map(function(r, i) {
                return '<li class="disabled1"  data-country="'+r.country+'" disabled >\
                        <span>'+r.country+'</span>';
            });

            $('#airportlistul').html(lis.join(''));
            $("#countrylistul").html(yoyo.join(''));
            $("#countrylistul").append(yoyo1.join(''));
        } else {
            $('#airportlistul').empty();
            $("#countrylistul").empty();
            showairportlist();
            showcountrylist();
        }
    }
