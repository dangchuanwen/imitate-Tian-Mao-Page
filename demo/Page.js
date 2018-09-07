var kind1=['当季流行','冬季新品','商场同款','毛呢大衣','毛针织衫','裤子','气质连衣裙','无痕文胸','运动文胸',
'潮流家居服','百搭船袜'];
var kind2=['精选上装','双11女装商场大牌','毛呢外套','羽绒服','棉服','丝绒卫衣','毛针织衫','皮草','毛衣',
'皮毛一体','长袖T恤','衬衫','棒球外套','短外套','小西服','风衣'];
var kind3=['浪漫裙装','连衣裙','A字裙','荷叶边裙','大摆裙','包臀裙','百褶裙','长袖连衣裙','棉麻连衣裙',
'牛仔裙','蕾丝连衣裙','真丝连衣裙','印花连衣裙'];
var kind4=['女士下装','休闲裤','阔腿裤','牛仔裤','打底裤','开叉运动裤','哈伦裤','背带裤','小脚裤',
'西装裤','短裤'];
var kind5=['特色女装','休闲套装','日系女装','精选妈妈装','大码女装','职业套装','优雅旗袍','精致礼服',
'婚纱','唐装','小码女装'];
var kind6=['文胸塑身','光面文胸','运动文胸','美背文胸','聚拢文胸','大杯文胸','轻薄塑身'];
var kind7=['家 居 服','春夏家居服','纯棉家居服','莫代尔家居服','真丝家居服','春夏睡裙','男士家居服',
'情侣家居服','性感睡裙'];
var kind8=['内裤背心','男士内裤','女士内裤','男士内裤多条装','女士内裤多条装','莫代尔内裤'];
var kinds=[kind1,kind2,kind3,kind4,kind5,kind6,kind7,kind8];
var RotateSrc=['image/peak.png','image/森马.png','image/奥斯特邦威.png','image/真维斯.png',
'image/宁夏红.png','image/北京同仁堂.png','image/花花公子.png','image/布衣传说.png','image/海澜之家.png',
'image/骆驼.png'];
var n=1;
var m=2;
var todayRashNum=2;
var timer1;
var timer2;
var timer3;
var timer4;
var timer5;
var timer6;
var timer7;
var timer8;
var timer9;
var sendJ;
var switchChange=0;
var Rash=[];
function loading() {
    initialData();
    change();
    initialkeyWorld();
    todayRash(Rash);
}
function toKind(e) {
    var id=e.id;
    var location=id.replace(/[^0-9]/ig,"");
    window.scrollTo(0,location);
}
window.onscroll=function () {
    var Y=window.scrollY;
    console.log(Y);
    var search2=document.getElementById('Search2');
    var navigation=document.getElementById('navigation');
    var li=[];
    for(var i=0;i<navigation.childNodes.length;i++)
        if(navigation.childNodes[i].tagName!=undefined) {
            li.push(navigation.childNodes[i]);
        }
    if(Y>=900) {
        search2.style.top = '0px';
        navigation.style.height='266px';
        navigation.style.width='36px';


    }
    else {

        search2.style.top = '-50px';
        navigation.style.height='0px';
        navigation.style.width='0px';
        navigation.style.overflow='hidden';
    }


}
function todayRash(Rash) {
    var a=0;
    var b=1;
    var div1=document.getElementById('Rash1');
    var div2=document.getElementById('Rash2');
    Rash.push(div1);
    Rash.push(div2);
    todayRash2(a,b);


    div1.onmouseover=function () {
        stopRash(this.id.replace(/[^0-9]/ig,"")-1);

    };
    div2.onmouseover=function () {
        stopRash(this.id.replace(/[^0-9]/ig,"")-1);
    };
}
function goonRash(e) {
    var divId;

     todayRash2(0,1);
}
function stopRash1() {
    clearTimeout(timer9);
}
function stopRash(e) {
    clearTimeout(timer9);
    for(var i=0;i<Rash.length;i++){
        Rash[i].style.backgroundColor='#F1F1F1';
    }
    Rash[e].style.backgroundColor='#00B262';
    document.getElementById('RashImg').src='image/Maket-second'+(e+1)+'.png';



}
function todayRash2(a,b) {
    var a1=a;
    var b1=b;
    todayRash1(a1,b1);
    a1++;
    if(a1==todayRashNum)
        a1=0;
    b1++;
    if(b1==todayRashNum)
        b1=0;
    timer9=setTimeout(function () {
        todayRash2(a1,b1);
    },2000);

}
function todayRash1(a,b) {

     var div1=Rash[a];
     var div2=Rash[b];

     div1.style.backgroundColor='#F1F1F1';
     div2.style.backgroundColor='#00B262';
     document.getElementById('RashImg').src='image/Maket-second'+(b+1)+'.png';
}
function changeRotateSrc(e,time) {
    var div=e;
    setTimeout(function () {
        var img=div.childNodes[0];
        var rand=parseInt(Math.random()*1000)%RotateSrc.length;
        img.src=RotateSrc[rand];
        img.style.transition='0s';
        img.style.transform='rotateY(-90deg)';
    },1000*time);
    setTimeout(function () {
        var img=div.childNodes[0];
        img.style.transition=time+'s';
        img.style.transform='rotateY(0deg)';
    },2000*time)
}
function changeMany() {
    console.log(switchChange);
    if(switchChange==0) {
        var logos = document.getElementById('manyLogo');
        var sons = [];
        for (var i = 0; i < logos.childNodes.length; i++)
            if (logos.childNodes[i].tagName == 'DIV')
                sons.push(logos.childNodes[i]);
        for (var i = 0; i < sons.length - 1; i++) {
            var rand = parseInt(Math.random() * 1000) % 4 +4;
            rand = rand / 10;
            changeRotateSrc(sons[i],rand/2);
            sons[i].childNodes[0].style.transition = rand + 's';
            sons[i].childNodes[0].style.transform='rotateY(90deg)';
        }
        switchChange = 1;
        setTimeout(function () {
            switchChange = 0;
            var logos = document.getElementById('manyLogo');
            var sons = [];
            for (var i = 0; i < logos.childNodes.length; i++)
                if (logos.childNodes[i].tagName == 'DIV')
                    sons.push(logos.childNodes[i]);
            for (var i = 0; i < sons.length - 1; i++) {
                sons[i].childNodes[0].style.transition = '0s';
                sons[i].childNodes[0].transform="none";



            }

        }, 2010)
    }
}
function assignment(Li,n) {

    var Data=kinds[n];
    var p;
    var ul;
    var li;
    var cloneLI;
    p=Li.childNodes[1].childNodes[1];
    ul=Li.childNodes[3].childNodes[1];
    li=ul.childNodes[1];
    var li1=li.cloneNode(true);
    ul.removeChild(li);
    //console.log(p.tagName,ul.tagName,li.tagName);
    p.innerHTML=Data[0]+"  "+">";

    for(var i=1;i<Data.length;i++){
        cloneLI=li1.cloneNode(true);
        var a=cloneLI.childNodes[0];
        a.innerHTML=Data[i];
        var rand=parseInt(Math.random()*10);
        if(rand<=8&&rand>=6)
            a.style.color='#2b31a7';
        ul.appendChild(cloneLI);
    }



}
function initialkeyWorld() {

    var allInfo=document.getElementById('allInfo');
    var LI=document.getElementById('clone');
    var LI1=LI.cloneNode(true);
    allInfo.removeChild(LI);
    for(var i=0;i<kinds.length;i++){
        var clone=LI1.cloneNode(true);
        assignment(clone,i);
        allInfo.appendChild(clone);

    }
}

function choose(data) {

       timer7=setTimeout(function () {
           var order=data.id;
           var num= order.replace(/[^0-9]/ig,"");        //正则表达式  重要须看
           num=parseInt(num);
           timer6=setTimeout(function () {
               if(n!=num) {
                   change1(n, num);
                   n = num;
               }
           },100);
           for(var i=1;i<5;i++){
               if(i!=num) {
                   document.getElementById('span' + i).onmouseover = "";

               }

           }
           setTimeout(function () {
               for(var i=1;i<5;i++)
                   document.getElementById('span'+i).onmouseover=function () {
                       choose(this);
                   }
           },500);
       },100);







}
function nochoose() {
        clearTimeout(timer7);
        clearTimeout(timer6);

}

function like() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
}
function dislike() {

    m=n+1;
    if(m==5)
        m=1;
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer7);
    clearTimeout(timer6);
    timer3=setTimeout('change()',2000);
}
function add(k) {
    k++;
    if(k==5)
        return 1;
    else
        return k;
}
function initialData() {
    for(var i=1;i<5;i++){
        var span=document.createElement('span');
        span.id='span'+i;
        span.onmouseover=function () {
            choose(this);
        }
        span.onmouseout=function () {
            nochoose(this);
        }
        document.getElementById('addSpan').appendChild(span);
    }
    document.getElementById('img1').src='image/play1.png';
    document.getElementById('span1').style.backgroundColor='white';
}
function addIndex() {
    n++;
    if(n>4)
        n=1;
    m++;
    if(m>4)
        m=1;
}
function change() {
    timer4=setTimeout('change1(n,m)',1000);
    timer5=setTimeout('addIndex()',1100);
    timer2=setTimeout('change()',3000);
}
function change1(i,j) {
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    img1.className='img2';
    img2.className='img2';
    img1.style.opacity=1;
    img2.style.opacity=0;
    img1.src='image/play'+i+'.png';
    img2.src='image/play'+j+'.png';
    sendJ=j;
    timer1=setTimeout('change2(sendJ)',100);

}
function change2(get) {
    for(var k=1;k<5;k++)
        document.getElementById('span'+k).style.backgroundColor='#666666';
    document.getElementById('span'+get).style.backgroundColor='white';
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    img1.className='img1';
    img2.className='img1';
    img1.style.opacity=0;
    img2.style.opacity=1;
}