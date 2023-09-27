function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("myInput").value;
        
var color = inputVal;

if (color === 'black') {
console.log('This is one of my favorite colors too!');
document.getElementById("colors").innerHTML= "<img src='https://i.etsystatic.com/29294211/r/il/0c6d95/3164931261/il_fullxfull.3164931261_9edm.jpg'>";

}else if(color === 'red') {
	document.getElementById("colors").innerHTML= "<img src='https://i.etsystatic.com/31307015/r/il/5ba97d/3244169134/il_fullxfull.3244169134_6xmd.jpg'>";
    console.log('I associate this color with history classes.');      
         } 
else if(color === 'blue' || color === 'Baby blue' || color === 'Blue' || color ==='Light blue' ){
	document.getElementById("colors").innerHTML= "<img src='https://i.etsystatic.com/31169225/r/il/e7e486/3304730071/il_570xN.3304730071_ijr3.jpg'>";
    console.log('This is a cute color.');      
         } 
else if(color === 'green'){
	document.getElementById("colors").innerHTML= "<img src='https://wallpapers.com/images/hd/dont-be-a-picky-neon-green-aesthetic-4cb54rvpw3uj2jl9.jpg'>";
    console.log('Elizabeth Sweetheart is the Green Lady of Brooklyn!');      
         }
else if(color === 'purple'){
   document.getElementById("colors").innerHTML= "<img src='https://i.etsystatic.com/26541053/r/il/17bde7/3160917433/il_fullxfull.3160917433_2jgx.jpg'>";
     console.log('I have two purple cardigans.');      
         }
else if(color === 'pink'){
    document.getElementById("colors").innerHTML= "<img src='https://e1.pxfuel.com/desktop-wallpaper/896/292/desktop-wallpaper-rosa-neon-aesthetic-aesthetic-pink-neon-thumbnail.jpg'>";
       console.log('I make a lot of things pink, best accessory color. Not this shade though...');      
          }
else if(color === 'yellow'){
    document.getElementById("colors").innerHTML= "<img src='https://wallpapers.com/images/hd/aesthetic-yellow-y0pwzljg66qet5j1.jpg'>";
        console.log('Yellow like bananas.');      
         } 
else if(color === 'orange'){
    document.getElementById("colors").innerHTML= "<img src='https://i.etsystatic.com/26541053/r/il/d1d422/2974954813/il_fullxfull.2974954813_j58b.jpg'>";
        console.log('I don\'t like orange starbursts.');      
         }            
else {
  console.log('Invalid color.');
    document.getElementById("colors").innerHTML= "<iframe src='https://editor.p5js.org/adavizhnayy/full/eXMrAYFcf'></iframe>";
    window.alert("Invalid color! Sorry..")
}
}
