
  $('select').on('change',function(){
    console.log($(this).val());
     if( $(this).val()!=="create"){
       console.log('hide');
     $('.new-address-fields').hide()
     }
     else{
       console.log('show');
     $(".new-address-fields").show()
     }
 })
