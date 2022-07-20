

$("#story").hide();

$(".down").click(()=>{
    $("#story").toggle(3000)

})   

$("#skill").hide();
$(".arrow").click(()=>{
    $("#skill").slideToggle(3000);
})

// attivo il codice al document ready
    $(".up").click(()=>{
        
        $("html, body").animate({scrollTop:0},800)

    });
   
   

   
   
   
   
   
