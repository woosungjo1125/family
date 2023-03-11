var body={
  backgroundColor(color){
    $('.behind').css('backgroundColor',color);
  },
  color(color){
    $('.behind').css('color',color);
  }
}
var alist={ 
  color(color){
    $('a').css('color',color);
  }
  
}
function NightDay(self){        
  if(self.value=='Night'){
    body.backgroundColor('black');
    body.color('white');
    self.value='Day';
    alist.color('powderblue');
  }
  else{
    body.backgroundColor('white');
    body.color('black');
    self.value='Night';
    alist.color('black');
  }
}