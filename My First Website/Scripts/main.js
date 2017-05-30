
document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://d33t3vvu2t2yu5.cloudfront.net/userpics/272264-2T92_big.png') {
      myImage.setAttribute ('src','http://img13.deviantart.net/8da3/i/2012/065/0/6/music_pulse_by_ipingwin-d4rw55d.jpg');
    } else {
      myImage.setAttribute ('src','https://d33t3vvu2t2yu5.cloudfront.net/userpics/272264-2T92_big.png');
    }
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
    
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');

}

myButton.onclick = function() {
  setUserName();
}