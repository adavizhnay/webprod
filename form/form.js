function getInputValue(){

let inputVal = document.getElementById("myInput").value;
let bGcolor = document.getElementById("bGcolor").value;
let rainSound = document.getElementById("rainSound").value;
let petorNo = document.getElementById("petorNo").value;
let theBees = document.getElementById("theBees").value;
let catorNo = document.getElementById("catorNo").value;

let day = inputVal;
let bgc = bGcolor
let rs = rainSound;
let pon = petorNo;
let bees = theBees;
let con = catorNo;

if (day === 'morning' || day === 'early morning') {
document.getElementById("answers").innerHTML= 
"<img src='https://images.unsplash.com/photo-1434281406913-47acccb03654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vcm5pbmclMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'>";
}
else if(day === 'afternoon' || day ===  'midday' ) {
document.getElementById("answers").innerHTML= 
"<img src='https://3.bp.blogspot.com/-Ani2zLiLj6U/UoJZdoZ4lfI/AAAAAAAABY4/ak0V7tmaLYE/s1600/20131112_163028.jpg'>";
 } 
else if(day === 'night' || day === 'late night'  ){
document.getElementById("answers").innerHTML= 
"<img src='https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjB0aW1lfGVufDB8fDB8fHww&w=1000&q=80'>";
 }              
    

if (bgc === 'blue' || bgc === 'light blue') {
    document.body.style.backgroundColor = "82CAFF";
    }
    else if(bgc === 'green' ) {
    document.body.style.backgroundColor = "74B72E";
     } 
    else if(bgc === 'purple' ){
    document.body.style.backgroundColor = "D7BFDC";
}              
 

if (pon === 'Yes') {
    document.getElementById("answers").innerHTML= 
    "<img src='mashieone.png'>";
    }
else if(pon === 'No' ) {
    document.getElementById("answers").innerHTML= 
    "<img src='mashietwo.png>";
}


if (bees === 'Yes') {
    document.getElementById("answers").innerHTML= 
    "<img src='bee.png'></img>";
    } 
else if(bees === 'No' ) {
    document.getElementById("answers").innerHTML= 
    "<img src='bee.png'></img>";
}


if (con === 'Yes') {
    document.getElementById("answers").innerHTML= 
    "<iframe src='https://editor.p5js.org/adavizhnayy/full/YEmMKXqdL'></iframe>>";
    }
else if(con === 'No' ) {
    document.getElementById("answers").innerHTML= 
    "<iframe src='https://editor.p5js.org/adavizhnayy/full/eXMrAYFcf'></iframe>";
}


if (rs === 'Yes') {
    document,getElementById("rainSound")
    let audio = new Audio('rain.wav');
    audio.play();
    }
else if(rs === 'No' ) {
   console.log('No rain sounds for them...')
}


else {
    console.log('Invalid answer.');
    window.alert("Invalid answer! Sorry..")    
    }

}
