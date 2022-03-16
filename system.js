//탭 메뉴

var menuButtons = document.getElementsByClassName('menu-content');
var contentItem = document.getElementsByClassName('content-item');

//getElementsByClassName 은 정보를 arrey 로 저장함!
//클래스 이름은 말그대로 클래스 이름 -> '.???' 이런식으로 점이 들어가면 안됨
//아이디와 클래스는 다름! 아이디는 각각, 클래스는 전체적으로 작동 
//ex. 아이디에 display:none을 하고 똑같은 태그에 클래스로 display:block을 했다면 아이디 먼저 작동 -> 동시 작동x

function menu(index, Mcolorcode, Ccolorcode) {
  Array.from(menuButtons).forEach((x) => {
    x.style.backgroundColor = 'rgb(255, 233, 172)';
  })
  menuButtons[index].style.backgroundColor = Mcolorcode;
  Array.from(contentItem).forEach((x) => {
    x.style.display = 'none';
    x.style.backgroundColor = '';
  })
  contentItem[index].style.display = 'inline-block';
  contentItem[index].style.backgroundColor = Ccolorcode;
}

menu(0, 'orange', 'rgb(255, 233, 172)');

//내용

//악세사리 버튼 클릭시
var accessorySX = 0;
var accessorySY = 0;
var accessoryPositionY = 0;
var accessoryheight = 0;

var accessorycanvas = document.getElementById('accessories');
var accessorycontext = accessorycanvas.getContext('2d');

var accessoryDcanvas = document.getElementById('accessoryDcanvas');
var accessoryDcontext = accessoryDcanvas.getContext('2d');

var accessoryimg = new Image();
accessoryimg.crossOrigin="anonymous";

k = 0;
var accessorystylenum = 0;

function accessorybtnL() {
  k--;
  if (k < 1) {
    k = 19;
  }
  accessorystylenum = k;

  accessorybtn();
}

function accessorybtnR() {
  k++;
  if (k > 19) {
    k = 1;
  }
  accessorystylenum = k;

  accessorybtn();
}

function accessorybtn() {
  
  if (accessoryundo === true) {
    document.querySelector('#accessoryundo').innerHTML = '취소하기'
    accessoryundo = false;
  }

  document.getElementById("accessoryDcanvas").style.background = 'none';
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessoryDcontext.clearRect(0, 0, canvas.width, canvas.height);

  if (accessorystylenum % 8 === 1) {
    accessorySX = 0 * 16;
  } else if (accessorystylenum % 8 === 2) {
    accessorySX = 1 * 16;
  } else if (accessorystylenum % 8 === 3) {
    accessorySX = 2 * 16;
  } else if (accessorystylenum % 8 === 4) {
    accessorySX = 3 * 16;
  } else if (accessorystylenum % 8 === 5) {
    accessorySX = 4 * 16;
  } else if (accessorystylenum % 8 === 6) {
    accessorySX = 5 * 16;
  } else if (accessorystylenum % 8 === 7) {
    accessorySX = 6 * 16;
  } else if (accessorystylenum % 8 === 0) {
    accessorySX = 7 * 16;
  }

  if (accessorystylenum / 8 <= 1) {
    accessoryPositionY = 0 * 32;
  } else if (accessorystylenum / 8 <= 2) {
    accessoryPositionY = 1 * 32;
  } else if (accessorystylenum / 8 <= 3) {
    accessoryPositionY = 2 * 32;
  }

  if (i === 0) {
    accessorySY = 0 + accessoryPositionY;
  } else if (i === 1) {
    accessorySY = 16 + accessoryPositionY;
  } else if (i === 2) {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  } else if (i === 3) {
    accessorySY = 16 + accessoryPositionY;
  } 

  accessoryimg.onload = function() {
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65);    
    accessoryDcontext.drawImage(accessoryimg, accessorySX, accessoryPositionY, 17, 20, 63, 0, 170, 150);   
  }
  accessoryimg.src = 'https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/accessories/accessories.png';
}

var accessoryundo = false;

function accessoryundobtn() {
  if (accessoryundo === false) {
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessoryundo = true;
  document.querySelector('#accessoryundo').innerHTML = '적용하기';
  } else if (accessoryundo === true) {
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY + accessoryPositionY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    accessoryundo = false;
    document.querySelector('#accessoryundo').innerHTML = '취소하기';
  }
}

//머리 버튼 클릭시 

var hairSX = 0;
var hairSY = 0;
var hairPositionY = 0;
var hairheight = 0;

var haircanvas = document.getElementById('hair');
var haircontext = haircanvas.getContext('2d');

var hairDcanvas = document.getElementById('hairDcanvas');
var hairDcontext = hairDcanvas.getContext('2d');

var hairimg = new Image();
hairimg.crossOrigin="anonymous";

function hairSYwithI1(n) {
  return (-10 * n * n * n) + (29 * n * n) + (14 * n); 
}

j = 0;
var hairstylenum = 0;

function hairbtnL() {
  j--;
  if (j < 1) {
    j = 79;
  }
  hairstylenum = j;

  hairbtn();
}

function hairbtnR() {
  j++;
  if (j > 79) {
    j = 1;
  }
  hairstylenum = j;

  hairbtn();
}

function hairbtn() {
  if (hairundo === true) {
  document.querySelector('#hairundo').innerHTML = '취소하기'
  hairundo = false;
  }
  
  document.getElementById("hairDcanvas").style.background = 'none';
  haircontext.clearRect(0, 0, canvas.width, canvas.height);
  hairDcontext.clearRect(0, 0, canvas.width, canvas.height);

  if (hairstylenum < 56) {

    if (hairstylenum % 8 === 1) {
      hairSX = 0 * 16;
    } else if (hairstylenum % 8 === 2) {
      hairSX = 1 * 16;
    } else if (hairstylenum % 8 === 3) {
      hairSX = 2 * 16;
    } else if (hairstylenum % 8 === 4) {
      hairSX = 3 * 16;
    } else if (hairstylenum % 8 === 5) {
      hairSX = 4 * 16;
    } else if (hairstylenum % 8 === 6) {
      hairSX = 5 * 16;
    } else if (hairstylenum % 8 === 7) {
      hairSX = 6 * 16;
    } else if (hairstylenum % 8 === 0) {
      hairSX = 7 * 16;
    }

    if (hairstylenum / 8 <= 1) {
      hairPositionY = 0 * 96;
    } else if (hairstylenum / 8 <= 2) {
      hairPositionY = 1 * 96;
    } else if (hairstylenum / 8 <= 3) {
      hairPositionY = 2 * 96;
    } else if (hairstylenum / 8 <= 4) {
      hairPositionY = 3 * 96;
    } else if (hairstylenum / 8 <= 5) {
      hairPositionY = 4 * 96;
    } else if (hairstylenum / 8 <= 6) {
      hairPositionY = 5 * 96;
    } else if (hairstylenum / 8 <= 7) {
      hairPositionY = 6 * 96;
    }
    
    hairSY = hairSYwithI1(i) + hairPositionY;
    hairimg.onload = function() {
      haircontext.drawImage(hairimg, hairSX, hairSY, 16, 33, 74, 37 + hairheight, 170, 90);    
      hairDcontext.drawImage(hairimg, hairSX, hairPositionY, 16, 33, 90, 10, 130, 170);   
    }
    hairimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/hair/hairstyles.png';
  } else {

    if (hairstylenum % 8 === 1) {
      hairSX = 0 * 16;
    } else if (hairstylenum % 8 === 2) {
      hairSX = 1 * 16;
    } else if (hairstylenum % 8 === 3) {
      hairSX = 2 * 16;
    } else if (hairstylenum % 8 === 4) {
      hairSX = 3 * 16;
    } else if (hairstylenum % 8 === 5) {
      hairSX = 4 * 16;
    } else if (hairstylenum % 8 === 6) {
      hairSX = 5 * 16;
    } else if (hairstylenum % 8 === 7) {
      hairSX = 6 * 16;
    } else if (hairstylenum % 8 === 0) {
      hairSX = 7 * 16;
    }

    if (hairstylenum / 8 <= 1) {
      hairPositionY = 0 * 128;
    } else if (hairstylenum / 8 <= 2) {
      hairPositionY = 1 * 128;
    } else if (hairstylenum / 8 <= 3) {
      hairPositionY = 2 * 128;
    } else if (hairstylenum / 8 <= 4) {
      hairPositionY = 3 * 128;
    } else if (hairstylenum / 8 <= 5) {
      hairPositionY = 4 * 128;
    } else if (hairstylenum / 8 <= 6) {
      hairPositionY = 5 * 128;
    }

    if (i === 0) {
      hairSY = 0 + hairPositionY;
    } else if (i === 1) {
      hairSY = 32 + hairPositionY;
    } else if (i === 2) {
      hairSY = 64 + hairPositionY;
    } else if (i === 3) {
      hairSY = 98 + hairPositionY;
    }

    hairimg.onload = function() {
      haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85);    
      hairDcontext.drawImage(hairimg, hairSX, hairPositionY, 16, 32, 90, 10, 130, 170);   
    }
    hairimg.src = 'https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/hair/hairstyles2.png';
  }
}

var hairundo = false;

function hairundobtn() {
  if (hairundo === false) {
  haircontext.clearRect(0, 0, canvas.width, canvas.height);
  hairundo = true;
  document.querySelector('#hairundo').innerHTML = '적용하기';
  } else if (hairundo === true) {
    haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85);
    hairundo = false;
    document.querySelector('#hairundo').innerHTML = '취소하기';
  }
}

//두번 클릭시 취소
var hatundo = false;

function samebutton(num, numrepeat) {

  if (num.length <= 1 ) {
    return false;
  } else if (num[num.length - 1] != num[num.length - 2]) {
    numrepeat = 1;
    return false;
  } else {
    if (numrepeat % 2 != 0) {
      return false;
    } else {
      return true;
    }
  }
}

//모자 버튼 클릭시
var hatnum = [];
var hatnumrepeat = 0;
var ShareHat = 1;
var hatSX = 0;
var hatSY = 0;
var hatheight = 0;

function hatSYwithI(n) {
  return (-40/3 * n * n * n) + (50 * n * n) + (-50/3 * n);
}

var hatcanvas = document.getElementById('hat');
var hatcontext = hatcanvas.getContext('2d');
var hatimg = new Image();
hatimg.crossOrigin="anonymous";

function hatbtn(n) {
  hatnumrepeat++;
  hatnum.push(n);
  if (hatnum.length > 10) {
    hatnum.splice(0, hatnum.length - 10);
  }

  if (samebutton(hatnum, hatnumrepeat) === true) {
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {

  hatcontext.clearRect(0, 0, canvas.width, canvas.height);

  if (n % 12 === 1) {
    hatSX = 0;
  } else if (n % 12 === 2) {
    hatSX = 20;
  } else if (n % 12 === 3) {
    hatSX = 40;
  } else if (n % 12 === 4) {
    hatSX = 60;
  } else if (n % 12 === 5) {
    hatSX = 80;
  } else if (n % 12 === 6) {
    hatSX = 100;
  } else if (n % 12 === 7) {
    hatSX = 120;
  } else if (n % 12 === 8) {
    hatSX = 140;
  } else if (n % 12 === 9) {
    hatSX = 160;
  } else if (n % 12 === 10) {
    hatSX = 180;
  } else if (n % 12 === 11) {
    hatSX = 200;
  } else if (n % 12 === 0) {
    hatSX = 220;
  }

  if (n / 12 <= 1) {
    ShareHat = 0;
  } else if (n / 12 <= 2) {
    ShareHat = 1;
  } else if (n / 12 <= 3) {
    ShareHat = 2;
  } else if (n / 12 <= 4) {
    ShareHat = 3;
  } else if (n / 12 <= 5) {
    ShareHat = 4;
  } else if (n / 12 <= 6) {
    ShareHat = 5;
  } else if (n / 12 <= 7) {
    ShareHat = 6;
  } else if (n / 12 <= 8) {
    ShareHat = 7;
  } 
  
  hatSY = hatSYwithI(i) + (ShareHat * 80);
  hatimg.onload = function() {
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);    
  }
  hatimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/hat/hats.png';
  }
}

//셔츠 버튼 클릭시

var shirtbasenum = [];
var shirtbasenumrepeat = 0;
var shirtbasecanvas = document.getElementById('shirtbase');
var shirtbasecontext = shirtbasecanvas.getContext('2d');
var shirtbaseimg = new Image();
shirtbaseimg.crossOrigin="anonymous";

var shirtheight = 0;
var shirtnum = [];
var shirtnumrepeat = 0;
var shirtcanvas = document.getElementById('shirt');
var shirtcontext = shirtcanvas.getContext('2d');
var shirtimg = new Image();
shirtimg.crossOrigin="anonymous";

function shirtSYwithI(n) {
  return (-16/3 * n * n * n) + (20 * n * n) + (-20/3 * n);
}

var ShareShirt = 1;
var shirtSX = 0;
var shirtSY = 0;

function shirtbtn(n) {
  
  shirtnumrepeat++;
  shirtnum.push(n);
  if (shirtnum.length > 10) {
    shirtnum.splice(0, shirtnum.length - 10);
  }

  if (samebutton(shirtnum, shirtnumrepeat) === true) {
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasedraw(n);
  } else {

  shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
  
  if (n % 16 === 1) {
    shirtSX = 0;
  } else if (n % 16 === 2) {
    shirtSX = 8;
  } else if (n % 16 === 3) {
    shirtSX = 16;
  } else if (n % 16 === 4) {
    shirtSX = 24;
  } else if (n % 16 === 5) {
    shirtSX = 32;
  } else if (n % 16 === 6) {
    shirtSX = 40;
  } else if (n % 16 === 7) {
    shirtSX = 48;
  } else if (n % 16 === 8) {
    shirtSX = 56;
  } else if (n % 16 === 9) {
    shirtSX = 64;
  } else if (n % 16 === 10) {
    shirtSX = 72;
  } else if (n % 16 === 11) {
    shirtSX = 80;
  } else if (n % 16 === 12) {
    shirtSX = 88;
  } else if (n % 16 === 13) {
    shirtSX = 96;
  } else if (n % 16 === 14) {
    shirtSX = 104;
  } else if (n % 16 === 15) {
    shirtSX = 112;
  } else if (n % 16 === 0) {
    shirtSX = 120;
  }

  if (n / 16 <= 1) {
    ShareShirt = 0;
  } else if (n / 16 <= 2) {
    ShareShirt = 1;
  } else if (n / 16 <= 3) {
    ShareShirt = 2;
  } else if (n / 16 <= 4) {
    ShareShirt = 3;
  } else if (n / 16 <= 5) {
    ShareShirt = 4;
  } else if (n / 16 <= 6) {
    ShareShirt = 5;
  } else if (n / 16 <= 7) {
    ShareShirt = 6;
  } else if (n / 16 <= 8) {
    ShareShirt = 7;
  } else if (n / 16 <= 9) {
    ShareShirt = 8;
  } else if (n / 16 <= 10) {
    ShareShirt = 9;
  } else if (n / 16 <= 11) {
    ShareShirt = 10;
  } else if (n / 16 <= 12) {
    ShareShirt = 11;
  } else if (n / 16 <= 13) {
    ShareShirt = 12;
  } else if (n / 16 <= 14) {
    ShareShirt = 13;
  } else if (n / 16 <= 15) {
    ShareShirt = 14;
  } else if (n / 16 <= 16) {
    ShareShirt = 15;
  } else if (n / 16 <= 17) {
    ShareShirt = 16;
  } else if (n / 16 <= 18) {
    ShareShirt = 17;
  } else if (n / 16 <= 19) {
    ShareShirt = 18;
  }

  shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
  
  shirtimg.onload = function() {
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);    
  }

  shirtimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/shirt/shirts.png';

  shirtbasedraw(n);
  }
}

function shirtbasedraw(n) {

  shirtbasenumrepeat++;
  shirtbasenum.push(n);
  if (shirtbasenum.length > 10) {
    shirtbasenum.splice(0, shirtbasenum.length - 10);
  }

  if (samebutton(shirtbasenum, shirtbasenumrepeat) === true) {
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {

  shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);

  if (n === 129) {
    shirtSX = 128;
  }

  if (n === 130) {
    shirtSX = 136;
  }

  if (n === 131) {
    shirtSX = 144;
  }

  if (n === 133) {
    shirtSX = 160;
  }

  if (n === 134) {
    shirtSX = 168;
  }

  if (n === 135) {
    shirtSX = 176;
  }

  if (n === 137) {
    shirtSX = 192;
  }

  if (n === 140) {
    shirtSX = 216;
  }

  if (n === 141) {
    shirtSX = 224;
  }

  if (n === 142) {
    shirtSX = 232;
  }

  if (n === 143) {
    shirtSX = 240;
  }

  if (n === 153) {
    shirtSX = 192;
  }

  if (n === 154) {
    shirtSX = 200;
  }

  if (n === 155) {
    shirtSX = 208;
  }

  if (n === 177) {
    shirtSX = 128;
  }

  if (n === 178) {
    shirtSX = 136;
  }

  if (n === 179) {
    shirtSX = 144;
  }

  if (n === 192) {
    shirtSX = 248;
  }

  if (n === 219) {
    shirtSX = 208;
  }

  if (n === 249) {
    shirtSX = 192;
  }

  if (n === 262) {
    shirtSX = 168;
  }

  if (n === 274) {
    shirtSX = 136;
  }

  if (n === 300) {
    shirtSX = 216;
  }

  shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
  
  shirtbaseimg.onload = function() {
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);    
  }

  shirtbaseimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/shirt/shirts.png';
  }
}

//바지 버튼 클릭시

var pantsnum = [];
var pantsnumrepeat = 0;
var pantscanvas = document.getElementById('pants')
var pantscontext = pantscanvas.getContext('2d');
var pantsimg = new Image();
pantsimg.crossOrigin="anonymous";

function pantsSYwithI(n) {
  return (-61/6 * n * n * n) + (30 * n * n) + (73/6 * n);
}

var pantsSX = 0;
var pantsSY = 0;
var pantsPositionY = 0;
var pantsheight = 0;

function pantsbtn(n) {

  pantsnumrepeat++;
  pantsnum.push(n);
  if (pantsnum.length > 10) {
    pantsnum.splice(0, pantsnum.length - 10);
  }

  if (samebutton(pantsnum, pantsnumrepeat) === true) {
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {

  pantscontext.clearRect(0, 0, canvas.width, canvas.height);

  if (n === 1) {
    pantsSX = 0;
    pantsPositionY = 0;
  } else if (n === 2) {
    pantsSX = 192;
    pantsPositionY = 0;
  } else if (n === 3) {
    pantsSX = 384;
    pantsPositionY = 0;
  } else if (n === 4) {
    pantsSX = 576;
    pantsPositionY = 0;
  }else if (n === 5) {
    pantsSX = 768;
    pantsPositionY = 0;
  } else if (n === 6) {
    pantsSX = 960;
    pantsPositionY = 0;
  } else if (n === 7) {
    pantsSX = 1152;
    pantsPositionY = 0;
  } else if (n === 8) {
    pantsSX = 1536;
    pantsPositionY = 0;
  } else if (n === 9) {
    pantsSX = 0;
    pantsPositionY = 688;
  } else if (n === 10) {
    pantsSX = 192;
    pantsPositionY = 688;
  } else if (n === 11) {
    pantsSX = 384;
    pantsPositionY = 688;
  } else if (n === 12) {
    pantsSX = 576;
    pantsPositionY = 688;
  }

  pantsSY = pantsSYwithI(i) + pantsPositionY;
  pantsimg.onload = function() {
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);    
  }

  pantsimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/pants/pants.png';
  }
}

//캔버스 

//캔버스에 사진 붙일 때는 onload를 이용 -> 배열이용, 애니메이션 이용(프레임마다 캔버스 지워짐)일때는 다른 방법 사용
//함수(onload)보다 onload(이미지 함수) 사용하면 여러 이미지 등록 가능
//파일명 입력할때 파일 포함하는 파일명까지 써줘야 함

//밑그림

var canvas = document.getElementById('base');
var context = canvas.getContext('2d');

var baseimg = new Image();
var baseArmimg = new Image();

baseimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_base.png';
baseimg.crossOrigin = "Anonymous";
var baseimgSX = 0;
var baseimgSY = 1;

baseArmimg.src = 'https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_base.png';
baseArmimg.crossOrigin = "Anonymous";
var baseArmimgSX = 96;
var baseArmimgSY = 0;

baseimg.onload = function() {
  context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
  FootColoring(119, 41, 26);
  context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
}

//신발 버튼 클릭시
//이미지 데이터로 저장

var shoenum = [];
var shoenumrepeat = 0;
var shoescanvas = document.getElementById('shoes');
var shoescontext = shoescanvas.getContext('2d');

var leftfoot1 = context.getImageData(0, 0, canvas.width, canvas.height);
var leftfoot2 = context.getImageData(0, 0, canvas.width, canvas.height);
var leftfoot3 = context.getImageData(0, 0, canvas.width, canvas.height);

var rightfoot1 = context.getImageData(0, 0, canvas.width, canvas.height);
var rightfoot2 = context.getImageData(0, 0, canvas.width, canvas.height);
var rightfoot3 = context.getImageData(0, 0, canvas.width, canvas.height);

var shoebtnnum = 0;
var shoecolorlist = [];

function shoesbtn(n) {

  shoenumrepeat++;
  shoenum.push(n);
  if (shoenum.length > 10) {
    shoenum.splice(0, shoenum.length - 10);
  }

  if (samebutton(shoenum, shoenumrepeat) === true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
  } else {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
  FootColor(n);
  LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
  RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
  context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
  
  shoebtnnum = n;
  
  if (i === 0) {  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
    RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
  } else if (i === 1) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);
    RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2); 
  } else if (i === 2) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);
    RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);
  } else if (i === 3) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);
    RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);
  }
  }
}

function FootColor(n) {

  if (n === 1) {
    shoecolorlist = [187, 0, 0];
  } else if (n === 2) {
    shoecolorlist = [0, 128, 0];
  } else if (n === 3) {
    shoecolorlist = [119, 41, 26];
  } else if (n === 4) {
    shoecolorlist = [141, 114, 3];
  } else if (n === 5) {
    shoecolorlist = [127, 127, 127];
  } else if (n === 6) {
    shoecolorlist = [175, 123, 99];
  } else if (n === 7) {
    shoecolorlist = [92, 119, 13];
  } else if (n === 8) {
    shoecolorlist = [0, 101, 145];
  } else if (n === 9) {
    shoecolorlist = [155, 66, 6];
  } else if (n === 10) {
    shoecolorlist = [0, 0, 0];
  } else if (n === 11) {
    shoecolorlist = [138, 34, 19];
  } else if (n === 12) {
    shoecolorlist = [116, 50, 106];
  } else if (n === 13) {
    shoecolorlist = [89, 37, 97];
  } else if (n === 14) {
    shoecolorlist = [2, 129, 183];
  } else if (n === 15) {
    shoecolorlist = [176, 0, 4];
  } else if (n === 16) {
    shoecolorlist = [43, 82, 174];
  } else if (n === 17) {
    shoecolorlist = [63, 35, 99];
  } else if (n === 18) {
    shoecolorlist = [146, 199, 235];
  } 

  FootColoring(shoecolorlist);
}

function FootColoring(shoecolorlist) {

  //왼발
  for (let i = 0; i < leftfoot1.data.length; i += 4) {
    leftfoot1.data[i + 0] = shoecolorlist[0];
    leftfoot1.data[i + 1] = shoecolorlist[1];
    leftfoot1.data[i + 2] = shoecolorlist[2];
    leftfoot1.data[i + 3] = 255;
  }

  for (let i = 0; i < leftfoot2.data.length; i += 4) {
    leftfoot2.data[i + 0] = shoecolorlist[0];
    leftfoot2.data[i + 1] = shoecolorlist[1];
    leftfoot2.data[i + 2] = shoecolorlist[2];
    leftfoot2.data[i + 3] = 255;
  }

  for (let i = 0; i < leftfoot3.data.length; i += 4) {
    leftfoot3.data[i + 0] = shoecolorlist[0];
    leftfoot3.data[i + 1] = shoecolorlist[1];
    leftfoot3.data[i + 2] = shoecolorlist[2];
    leftfoot3.data[i + 3] = 255;
  }

  //오른발
  for (let i = 0; i < rightfoot1.data.length; i += 4) {
    rightfoot1.data[i + 0] = shoecolorlist[0];
    rightfoot1.data[i + 1] = shoecolorlist[1];
    rightfoot1.data[i + 2] = shoecolorlist[2];
    rightfoot1.data[i + 3] = 255;
  }

  for (let i = 0; i < rightfoot2.data.length; i += 4) {
    rightfoot2.data[i + 0] = shoecolorlist[0];
    rightfoot2.data[i + 1] = shoecolorlist[1];
    rightfoot2.data[i + 2] = shoecolorlist[2];
    rightfoot2.data[i + 3] = 255;
  }

  for (let i = 0; i < rightfoot3.data.length; i += 4) {
    rightfoot3.data[i + 0] = shoecolorlist[0];
    rightfoot3.data[i + 1] = shoecolorlist[1];
    rightfoot3.data[i + 2] = shoecolorlist[2];
    rightfoot3.data[i + 3] = 255;
  }
}

function LeftFootPosition(dx1, dy1, dw1, dh1, dx2, dy2, dw2, dh2, dx3, dy3, dw3, dh3) {
  context.putImageData(leftfoot1, 0, 0, dx1, dy1, dw1, dh1);
  context.putImageData(leftfoot2, 0, 0, dx2, dy2, dw2, dh2);
  context.putImageData(leftfoot3, 0, 0, dx3, dy3, dw3, dh3);
}

function RightFootPosition(dx1, dy1, dw1, dh1, dx2, dy2, dw2, dh2, dx3, dy3, dw3, dh3) {
  context.putImageData(rightfoot1, 0, 0, dx1, dy1, dw1, dh1);
  context.putImageData(rightfoot2, 0, 0, dx2, dy2, dw2, dh2);
  context.putImageData(rightfoot3, 0, 0, dx3, dy3, dw3, dh3);
}

//화살표 작동

var i = 0;
var backheight = 0;

function arrowR() {
  //버튼 클릭할때마다 캔버스 재정비 -> 뒤집은 이미지 또 뒤집는것 막아줌
  context.setTransform(1,0,0,1,0,0);
  pantscontext.setTransform(1,0,0,1,0,0);
  haircontext.setTransform(1,0,0,1,0,0);
  accessorycontext.setTransform(1,0,0,1,0,0);

  if (i < 1) {
    
    i++;

    //몸통
    baseimgSY = 33;
    baseArmimgSY = 33;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      FootColor(shoebtnnum);
      LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);
      RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2); 
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }

    //머리

    if (hairundo === true) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 32 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 16 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }

  } else if (i === 1) {

    i++;

    //몸통
    baseimgSY = 65;
    baseArmimgSY = 65;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    FootColor(shoebtnnum);
    LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);
    RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }

    //머리
    if (hairundo) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 64 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    backheight = 2;
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight - backheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20); 
    backheight = 0;   
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }

  } else if (i === 2) {
    
    i++;

    //몸통
    baseimgSY = 33;
    baseArmimgSY = 33;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    FootColor(shoebtnnum);
    LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);
    RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } 

    //머리
    if (hairundo) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.translate(canvas.width, 0);
        haircontext.scale(-1, 1);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 98 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 16 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.translate(canvas.width, 0);
    accessorycontext.scale(-1, 1);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);    
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.translate(canvas.width, 0);
    pantscontext.scale(-1, 1);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }
    
  } else {
    
    i = 0;

    //몸통
    baseimgSY = 1;
    baseArmimgSY = 0;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    FootColor(shoebtnnum);
    LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
    RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }
    
    //머리
    if (hairundo) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 0 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 0 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);  
    } 
    
    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }
  }
}

function arrowL() {
  context.setTransform(1,0,0,1,0,0);
  pantscontext.setTransform(1,0,0,1,0,0);
  haircontext.setTransform(1,0,0,1,0,0);
  accessorycontext.setTransform(1,0,0,1,0,0);

  if (i === 3) {
    
    i--;

    //몸통
    baseimgSY = 65;
    baseArmimgSY = 65;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    FootColor(shoebtnnum);
    LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);
    RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }

    //머리
    if (hairundo === true) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 64 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60); 
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    backheight = 2;
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight - backheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20); 
    backheight = 0;
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }

  } else if (i === 2) {
    
    i--;

    //몸통
    baseimgSY = 33;
    baseArmimgSY = 33;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
    FootColor(shoebtnnum);
    LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);
    RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2); 
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }

    //머리
    if (hairundo === true) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 32 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 16 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtnumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }

  } else if (i === 1) {
    
    i--;

    //몸통
    baseimgSY = 1;
    baseArmimgSY = 0;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);  
    FootColor(shoebtnnum);
    LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
    RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }

    //머리
    if (hairundo === true) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 0 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 0 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }    
    
    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }

  } else {
    
    i = 3;

    //몸통
    baseimgSY = 33;
    baseArmimgSY = 33;
    if (samebutton(shoenum, shoenumrepeat)) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);  
    FootColor(shoebtnnum);
    LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);
    RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    }  

    //머리
    if (hairundo === true) {
      haircontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      if (hairstylenum < 56) {
        hairSY = hairSYwithI1(i) + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.translate(canvas.width, 0);
        haircontext.scale(-1, 1);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      } else {
        hairSY = 98 + hairPositionY;
        haircontext.clearRect(0, 0, canvas.width, canvas.height);
        haircontext.drawImage(hairimg, hairSX, hairSY, 16, 32, 70, 35 + hairheight, 170, 85); 
      }
    }

    //악세사리
    if (accessoryundo === true) {
      accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    accessorySY = 16 + accessoryPositionY;
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
    accessorycontext.translate(canvas.width, 0);
    accessorycontext.scale(-1, 1);
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    }

    //모자
    if (samebutton(hatnum, hatnumrepeat)) {
      hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    hatSY = hatSYwithI(i) + (ShareHat * 80);
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
    }

    //셔츠
    if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
      shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
      shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    shirtSY = shirtSYwithI(i) + (ShareShirt * 32);
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
    }

    //바지
    if (samebutton(pantsnum, pantsnumrepeat)) {
      pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    } else {
    pantsSY = pantsSYwithI(i) + pantsPositionY;
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
    pantscontext.translate(canvas.width, 0);
    pantscontext.scale(-1, 1);
    pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
    }
  }
}

//성별 클릭했을 때

function man() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_base.png';
  baseArmimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_base.png';
  baseimg.onload = function() {
    if (samebutton(shoenum, shoenumrepeat)) {
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
      FootColor(shoebtnnum);
      if (i === 0) {  
        LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
        RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
      } else if (i === 1) {
        LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);
        RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2); 
      } else if (i === 2) {
        LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);
        RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);
      } else if (i === 3) {
        LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);
        RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);
      }
    }
  }
  

  hairheight = 0;

  if (hairundo) {
    haircontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  haircontext.clearRect(0, 0, canvas.width, canvas.height);
  haircontext.drawImage(hairimg, hairSX, hairSY, 16, 33, 74, 37 + hairheight, 170, 90); 
  }

  accessoryheight = 0;

  if (accessoryundo === true) {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
  if (i === 2) {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  }
  }
  
  hatheight = 0;

  if (samebutton(hatnum, hatnumrepeat)) {
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
  }

  shirtheight = 0

  if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
  shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
  shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);
  }

  pantsheight = 0;

  if (samebutton(pantsnum, pantsnumrepeat)) {
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  pantscontext.clearRect(0, 0, canvas.width, canvas.height);
  pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
  }
}

function woman() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_girl_base.png';
  baseArmimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/base/farmer_girl_base.png';

  baseimg.onload = function() {
    if (samebutton(shoenum, shoenumrepeat)) {
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
    } else {
      context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 76, 36, 160, 95);
      context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 76, 30, 160, 95);
      FootColor(shoebtnnum);
      if (i === 0) {  
        LeftFootPosition(127, 113, 22, 7, 115, 117, 30, 4, 119, 121, 22, 2);
        RightFootPosition(164, 113, 22, 7, 167, 118, 30, 4, 169, 121, 22, 2);
      } else if (i === 1) {
        LeftFootPosition(127, 116, 30, 3, 126, 119, 38, 2, 135, 120, 26, 2);
        RightFootPosition(164, 114, 18, 2, 165, 115, 20, 2, 170, 117, 20, 2); 
      } else if (i === 2) {
        LeftFootPosition(122, 116, 27, 3, 127, 117, 15, 4, 130, 121, 7, 2);
        RightFootPosition(163, 116, 27, 3, 168, 117, 15, 4, 171, 121, 7, 2);
      } else if (i === 3) {
        LeftFootPosition(144, 116, 25, 3, 137, 118, 29, 3, 133, 121, 28, 2);
        RightFootPosition(116, 115, 18, 2, 108, 116, 24, 2, 104, 117, 26, 2);
      }
    }
  }

  hairheight = 4;

  if (hairundo) {
    haircontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  haircontext.clearRect(0, 0, canvas.width, canvas.height);
  haircontext.drawImage(hairimg, hairSX, hairSY, 16, 33, 74, 37 + hairheight, 170, 90); 
  }

  accessoryheight = 3;

  if (accessoryundo === true) {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
  }
  
  hatheight = 1;

  if (samebutton(hatnum, hatnumrepeat)) {
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);
  }

  shirtheight = 2;

  if (samebutton(shirtnum, shirtnumrepeat) && samebutton(shirtbasenum, shirtbasenumrepeat)) {
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
  shirtcontext.drawImage(shirtimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20); 
  shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  shirtbasecontext.drawImage(shirtbaseimg, shirtSX, shirtSY, 8, 8, 120, 76 + shirtheight, 70, 20);  
  }

  pantsheight = 1;

  if (samebutton(pantsnum, pantsnumrepeat)) {
    pantscontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
  pantscontext.clearRect(0, 0, canvas.width, canvas.height);
  pantscontext.drawImage(pantsimg, pantsSX, pantsSY, 16, 33, 77, 30 + pantsheight, 160, 95);
  }
}
