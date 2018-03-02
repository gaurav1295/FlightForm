
    $('input.filled-in').on('change', function() {
        $('input.filled-in').not(this).prop('checked', false);  
    });
    $("#oneway").click(function(e) {
       
        if($(this).attr('checked') == 'checked'){
            e.preventDefault();
    }else{
        console.log('sdsds');
        $(this).attr('checked','checked');
        $("#arrival_g_date").hide(200);
         $("#depart_g_date").removeClass("col-md-6").addClass("col-md-12");
         $("#departure_date_icon").css("right","50px");
         $("#roundtrip").removeAttr('checked');
    }
       
});
 $("#roundtrip").click(function(e) {
    if($(this).attr('checked') == 'checked')
    {
        e.preventDefault();
       
    }else{
        $(this).attr('checked','checked');
        $("#oneway").removeAttr('checked');
        $("#arrival_g_date").show(300);
         $("#depart_g_date").removeClass("col-md-12").addClass("col-md-6");
         $("#departure_date_icon").css("right","22px");
    }
       
});

 $("#multitrip").click(function(e) {
       
        if($(this).attr('checked') == 'checked'){
            e.preventDefault();
        }else{
        console.log('multitrip');
        $(this).attr('checked','checked');
        // $("#arrival_g_date").hide(200);
        //  $("#depart_g_date").removeClass("col-md-6").addClass("col-md-12");
        //  $("#departure_date_icon").css("right","50px");
         $("#roundtrip").removeAttr('checked');
         $("#oneway").removeAttr('checked');
    }
       
});