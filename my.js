$('#openModel').on('click', function(){
    
    var myValue = [];
    
    $(".table").find("td:last-child").each(function(id,val){
       
       myValue.push(val.innerText)
    });
    
    $("#formModel").find("input").each(function(id,ops){
        $(this).val(myValue[id])
        
        
        
        
        
        
    })
});



