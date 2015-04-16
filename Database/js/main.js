(function(){
var templateHtml = $('#template').html();
var templatefactory = _.template(templateHtml); 
var items = [
       {
          name:"Summer 2015",
          type:"KHAKI",
          path:"img/khaki.jpg"
       },
       {
          name:"Summer 2015",
          type:"HIPPY",
          path:"img/hippy.jpg"
       },
       {
          name:"Summer 2015",
          type:"JUMPSUIT",
          path:"img/jumpsuit.jpg"
       },
       {
          name:"Summer 2015",
          type:"DENIM",
          path:"img/Denim.jpg"
       },
       {
          name:"Summer 2015",
          type:"NAUTICAL",
          path:"img/nautical.jpg"
       } 
   ];

  items.forEach(function(name){
    console.log(name);
    $('#lines').append(templatefactory(name));
  });

}).call(this);