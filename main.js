var images = ["download.jfif", "dad.jpg", "mom.jpg", "me.jpg", "bro.jpg", "family.jpg"];
var names = ["My Family", "Dad", "Mom", "Me", "Brother", "Us"];
var i = 0;

function update(){
  i++;
  var array_length = 5;
  if(i>array_length){
    i = 0;           
    }
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("intro").innerHTML = updated_text;

 
}