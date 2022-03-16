

var canvas = document.getElementById('base');
var context = canvas.getContext('2d');

var baseimg = new Image();
baseimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_base.png';
baseimg.crossOrigin = "Anonymous";
var baseimgSX = 0;
var baseimgSY = 1;

var leftfoot1 = context.getImageData(0, 0, canvas.width, canvas.height);
var leftfoot2 = context.getImageData(0, 0, canvas.width, canvas.height);
var leftfoot3 = context.getImageData(0, 0, canvas.width, canvas.height);

var rightfoot1 = context.getImageData(0, 0, canvas.width, canvas.height);
var rightfoot2 = context.getImageData(0, 0, canvas.width, canvas.height);
var rightfoot3 = context.getImageData(0, 0, canvas.width, canvas.height);

function LeftFoot(r, g, b) {

  for (let i = 0; i < leftfoot1.data.length; i += 4) { // red, green, blue
    leftfoot1.data[i + 0] = r;
    leftfoot1.data[i + 1] = g;
    leftfoot1.data[i + 2] = b;
    leftfoot1.data[i + 3] = 255;
  }

  for (let i = 0; i < leftfoot2.data.length; i += 4) { // red, green, blue
    leftfoot2.data[i + 0] = r;
    leftfoot2.data[i + 1] = g;
    leftfoot2.data[i + 2] = b;
    leftfoot2.data[i + 3] = 255;
  }

  for (let i = 0; i < leftfoot3.data.length; i += 4) { // red, green, blue
    leftfoot3.data[i + 0] = r;
    leftfoot3.data[i + 1] = g;
    leftfoot3.data[i + 2] = b;
    leftfoot3.data[i + 3] = 255;
  }

  LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
  /*LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);*/
  /*LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);*/
  /*LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);*/
}

function LeftFootPosition(dx1, dy1, dw1, dh1, dx2, dy2, dw2, dh2, dx3, dy3, dw3, dh3) {
  context.putImageData(leftfoot1, 0, 0, dx1, dy1, dw1, dh1);
  context.putImageData(leftfoot2, 0, 0, dx2, dy2, dw2, dh2);
  context.putImageData(leftfoot3, 0, 0, dx3, dy3, dw3, dh3);
}

function RightFoot(r, g, b) {

  for (let i = 0; i < rightfoot1.data.length; i += 4) { // red, green, blue
    rightfoot1.data[i + 0] = r;
    rightfoot1.data[i + 1] = g;
    rightfoot1.data[i + 2] = b;
    rightfoot1.data[i + 3] = 255;
  }

  for (let i = 0; i < rightfoot2.data.length; i += 4) { // red, green, blue
    rightfoot2.data[i + 0] = r;
    rightfoot2.data[i + 1] = g;
    rightfoot2.data[i + 2] = b;
    rightfoot2.data[i + 3] = 255;
  }

  for (let i = 0; i < rightfoot3.data.length; i += 4) { // red, green, blue
    rightfoot3.data[i + 0] = r;
    rightfoot3.data[i + 1] = g;
    rightfoot3.data[i + 2] = b;
    rightfoot3.data[i + 3] = 255;
  }

  RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
  /*RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2);*/
  /*RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);*/
  /*RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);*/
}

function RightFootPosition(dx1, dy1, dw1, dh1, dx2, dy2, dw2, dh2, dx3, dy3, dw3, dh3) {
  context.putImageData(rightfoot1, 0, 0, dx1, dy1, dw1, dh1);
  context.putImageData(rightfoot2, 0, 0, dx2, dy2, dw2, dh2);
  context.putImageData(rightfoot3, 0, 0, dx3, dy3, dw3, dh3);
}


baseimg.onload = function() {
  /*context.translate(canvas.width, 0);
  context.scale(-1, 1);*/
  context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
  LeftFoot(255, 255, 255);
  RightFoot(255, 255, 255);
}
