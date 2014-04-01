$(document).ready(function(){
  $('a').on('click', function(event){
    if(event.metaKey){
      alert("You are on ClickFreeze Mode to boost your productivity. Is this something you really want to read now?")
      event.preventDefault();  
    }
    
  })
})
