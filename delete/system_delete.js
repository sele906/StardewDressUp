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
  Content(index);
}

menu(0, 'orange', 'rgb(255, 233, 172)');

//메뉴버튼 클릭 시 내용 나오게

//리스트 변수 모음
var hatlist = ['2/25/Dinosaur_Hat', 'c/cc/Totem_Mask', 'c/ca/Logo_Cap', '3/36/Wearable_Dwarf_Helm', '6/69/Fashion_Hat', 'b/ba/Pumpkin_Mask', 'c/cb/Hair_Bone', 'a/a7/Spotted_Headscarf', '5/51/Beanie', '0/0d/Floppy_Beanie', 'd/d8/Fishing_Hat', 'a/a5/Blobfish_Mask', '9/96/Party_Hat_%28red%29', 'f/fe/Party_Hat_%28blue%29', 'c/c5/Party_Hat_%28green%29', '0/04/Pirate_Hat', 'e/e0/Flat_Topped_Hat', '6/60/White_Turban', 'c/c7/Golden_Mask_%28hat%29', '9/96/Propeller_Hat', '0/05/Bridal_Veil', '1/18/Witch_Hat', '4/4d/Radioactive_Goggles', 'c/c4/Swashbuckler_Hat', 'd/dd/Qi_Mask', '2/2a/Star_Helmet', '9/92/Sunglasses', '1/1a/Goggles', '3/30/Forager%27s_Hat', '6/68/Warrior_Helmet'];
var h3hatlist = ['공룡 모자', '토템 가면', '로고 캡', '대형 드워프 투구', '패션 모자', '호박 가면', '뼈 장식', '물방울무늬 머리 스카프', '비니', '헐렁한 비니', '낚시용 모자', '블롭피쉬 가면', '파티 모자	', '파티 모자	', '파티 모자', '해적모', '플랫 톱 모자', '흰색 터번	', '황금 가면', '프로펠러 모자', '신부의 면사포', '마녀 모자', '방사능 고글', '스워시버클러 모자', '치의 가면', '스타 헬멧', '선글라스', '고글', '채집가의 모자', '전사의 투구'];
var phatlist = ['작은 공룡처럼 보이도록 만들어진 모자.', '걱정하지 마세요, 얼굴을 순간 이동시키진 않을 겁니다...', '앞쪽에 로고가 있는 붉은 캡.', '인간용 크기로 만든 드워프들이 쓰는 투구.', '챙에 깃털이 있는 멋쟁이를 위한 모자.', '한때 정말 큰 호박이었던 것 같습니다...', '선사시대의 머리 리본.', '머리를 묶는 용도로 사용되는 붉은 물방울무늬 스카프.', '딱 맞는 따뜻한 모자.', '느슨하게 맞는 따뜻한 모자.', '넓은 챙이 강가에서 낚시할 때 태양을 가려줍니다.', '진짜 블롭피쉬처럼 말랑말랑합니다!', '즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 붉은 모자.', '즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 파란 모자.', '즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 녹색 모자.', '앞면에 끔찍한 두개골이 있는 선장용 모자.', '한때 유행했던 오래된 스타일의 모자.', '푸른색 테두리가 있는 고급 흰색 비단으로 만든 터번.', '칼리코 사막 유물을 정확하게 재현한 가면!', '꼭대기에 프로펠러가 있는 우스꽝스러운 모자.', '신부를 위한 전통적인 장식품.', '마녀들이 애용하는 끝이 뾰족한 모자.', '실제 방사능 차단 효과는 없습니다.', '고전적인 액션 사극 주인공의 모자.', '???', '별이 그려진 붉은 모자.', '느긋한 인상을 줍니다.', '아주 안전해 보입니다.', '채집가의 기쁨입니다.', '타조알 껍데기를 개조해서 만든 투구'];
var Comhatlist = ['공룡알', '비의 토템, 워프 토템: 농장, 워프 토템: 산, 워프 토템: 해변, 워프 토템: 사막', 'dyd', 'djd', 'd'];

//버튼 클릭시

function Content(index) {
  /*if (index === 1) {
    document.getElementById("hat-content").style.backgroundImage = "url('https://stardewvalleywiki.com/mediawiki/images/0/0c/Shirt231.png')";
    console.log('hello');
  }*/
  if (index === 1) {
    //document.getElementById('hat-content').setAttribute("style","display:flex;flex-wrap:wrap;overflow-y:auto;align-content:flex-start;justify-content:flex-start;");
    
    for (var i = 0; i < hatlist.length; i++) {

      //만약 생성된 요소가 있다 -> 삭제
      //임시 리스트 박스가 차있다 -> 삭제 
      //만들어진 리스트를 임시 리스트 박스에 넣고 -> 요소 생성

      //메인 div 생성
      //createElement 와 setAttribute 를 한줄에 쓰면 인식 못함
      var divCreator = document.createElement('div'); //-> 위로 올리면 작동 안됨 왜??
      divCreator.setAttribute('id', 'hat'+ i);
      divCreator.setAttribute('class', 'hat-information');
      document.getElementById('hat-content').append(divCreator);

      //메인 div 크기 및 스타일
      
      divCreator.setAttribute("style","width:100%;height:fit-content;border:solid 1px black;display:flex;flex-direction:row;");

      //이미지 div 생성

      var divImgCreator = document.createElement('div');
      divImgCreator.setAttribute('id', 'hatimg'+ i);
      document.getElementById('hat' + i).append(divImgCreator);

      //이미지 div 크기 및 스타일

      divImgCreator.setAttribute("style","width:10%;height:100%;border:solid 1px black;align-content:center;");

      //이미지 버튼 생성

      var divBtnCreator = document.createElement('div');
      divBtnCreator.setAttribute('id', 'hatbtn'+ i);
      document.getElementById('hatimg'+ i).append(divBtnCreator);

      //이미지 버튼 크기 및 스타일

      divBtnCreator.setAttribute("style","height:70px;background-image:url('https://stardewvalleywiki.com/mediawiki/images/" + hatlist[i] + ".png');background-repeat:no-repeat;background-position:center;background-size:80%;");

      //이름 및 설명 div 생성

      var divInfCreator = document.createElement('div');
      divInfCreator.setAttribute('id', 'hatinf' + i);
      document.getElementById('hat' + i).append(divInfCreator);

      //이름 및 설명 div 스타일

      divInfCreator.setAttribute("style", "width:70%;height:100%;box-sizing:border-box;");

      //이름 및 설명 div 내용 작성
      //이름
      var h3InfCreator = document.createElement('h3');
      h3InfCreator.innerText = h3hatlist[i];
      document.getElementById('hatinf' + i).append(h3InfCreator);
      //이름 스타일
      h3InfCreator.setAttribute("style", "padding:10px;height:25px;");

      //설명
      var pInfCreator = document.createElement('p');
      pInfCreator.innerText = phatlist[i];
      document.getElementById('hatinf' + i).append(pInfCreator);
      //설명 스타일
      pInfCreator.setAttribute("style", "padding:0 10px 10px 10px;");

      //조합 div 생성

      var divCombiCreator = document.createElement('div');
      divCombiCreator.setAttribute('id', 'hatcombi' + i);
      document.getElementById('hat' + i).append(divCombiCreator);

      //조합 링크 생성

      var aCombi = document.createElement('a');
      aCombi.setAttribute('id', 'hatcombilink' + i);
      aCombi.innerHTML = Comhatlist[i];
      aCombi.href = "https://ko.stardewvalleywiki.com/" + Comhatlist[i];
      document.getElementById('hatcombi' + i).append(aCombi);
      console.log(aCombi);
      

      /*if (i = 1) {
        for (var j = 0; j < 2; j++) {
          var totem = [Comhatlist[1].slice(0, 5), Comhatlist[1].slice(7, 16)];
          console.log(totem.length);
          alowerCombi = document.createElement('a');
          alowerCombi.setAttribute('id', 'hatcombilink1' + '-' + j);
          alowerCombi.innerHTML = totem[j];
          alowerCombi.href = "https://ko.stardewvalleywiki.com/" + totem[j];
          console.log(alowerCombi);
          document.getElementById('hatcombi' + i).append(alowerCombi);
        }
      }*/

      if (i === 1) {
        var totem = [Comhatlist[1].slice(0, 5), Comhatlist[1].slice(7, 16)];
        console.log(totem.length);
      }


      //조합 div 스타일

      divCombiCreator.setAttribute("style", "width:50%;height:100%;border:1px black solid;");

      //염색 가능여부 div 생성

      var divDyeCreator


    }

    
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

baseimg.src='../StardewDressUp/base/farmer_base.png';
var baseimgSX = 0;
var baseimgSY = 1;

baseArmimg.src = '../StardewDressUp/base/farmer_base.png';
var baseArmimgSX = 96;
var baseArmimgSY = 0;

baseimg.onload = function() {
  context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);    
  context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);
}

//이미지 데이터로 저장

/*var img = new Image();
img.onload = function(){
    document.getElementById("results").src = img.src;
}
img.src = canvas1.toDataURL();*/

//화살표 작동

var i = 0;
function arrowR() {
  if (i < 2) {
    i++;
    baseimgSY = 32 * i + 1;
    baseArmimgSY = 32 * i + 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);
  } else if (i === 2) {
    baseimgSY = 33;
    baseArmimgSY = 33;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85); 
    context.setTransform(1,0,0,1,0,0);
    i++;
  } else {
    i = 0;
    baseimgSY = 0;
    baseArmimgSY = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);  
  }  
}

function arrowL() {
  console.log(i, baseimgSY);
  if (i === 0) {
    baseimgSY = 33;
    baseArmimgSY = 33;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);  
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);  
    context.setTransform(1,0,0,1,0,0);
    i = 3;
  } else if (1 < i <= 3) {
    i--;
    baseimgSY = 32 * i + 1;
    baseArmimgSY = 32 * i + 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);
  } else {
    i = 0;
    baseimgSY = 0;
    baseArmimgSY = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseimg, baseimgSX, baseimgSY, 16, 33, 80, 40, 150, 85);  
    context.drawImage(baseArmimg, baseArmimgSX, baseArmimgSY, 16, 33, 80, 40, 150, 85);  
  }
  console.log(i, baseimgSY);
}

//성별 클릭했을 때

function man() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='../StardewDressUp/base/farmer_base.png';
  baseArmimg.src='../StardewDressUp/base/farmer_base.png';
}

function woman() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='../StardewDressUp/base/farmer_girl_base.png';
  baseArmimg.src='../StardewDressUp/base/farmer_girl_base.png';
}

