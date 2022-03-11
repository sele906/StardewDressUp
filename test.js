

var canvas = document.getElementById('base');
var context = canvas.getContext('2d');

var baseimg = new Image();
baseimg.src='../StardewDressUp/base/farmer_base.png';
baseimg.crossOrigin = "Anonymous";
var baseimgSX = 0;
var baseimgSY = 1;



var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
console.log(imageData.data);

for (let i = 0; i < imageData.data.length; i += 4) { // red, green, blue
  imageData.data[i]=143;
  imageData.data[i+1]=11;
  imageData.data[i+2]=113;
  imageData.data[i+3]=113;
}

console.log(imageData.data);

baseimg.onload = function() {
  context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      
  context.putImageData(imageData, 0, 0);
  
}

var hoveredColor = document.getElementById('hover');
var selectedColor = document.getElementById('select');

function pick(event, destination) {
  var x = event.pageX;
  var y = event.pageY;
  console.log(x);
  var pixel = context.getImageData(x, y, 1, 1);
  var data = pixel.data;

    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    destination.style.background = rgba;
    destination.textContent = rgba;
    console.log(rgba);
    return rgba;
}



document.addEventListener('mousemove', function (event) {
  pick(event, hoveredColor);
}, false);
canvas.addEventListener('click',function (event) {
  pick(event, selectedColor);
}, false);
