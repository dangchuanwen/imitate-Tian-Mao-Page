/**
 * Created by asus on 2017/12/6.
 */
var userImgsrc="0";
function lookImg(e) {

    var src=e.src;
    var father=e.parentNode.parentNode;

    var sons=[];
    for(var i=0;i<father.childNodes.length;i++) {

        if (father.childNodes[i].tagName == 'DIV')
            sons.push(father.childNodes[i]);


    }
    var look=document.getElementById('look');
    if(userImgsrc!=src) {
        look.src = src;
        look.style.display = 'block';
        userImgsrc=src;
        for(var i=0;i<sons.length;i++) {

            sons[i].childNodes[0].style.borderColor = '#E3E3E3';
        }
        e.style.borderColor='#F23D6A';
        e.parentNode.className='after';
    }
    else {
        for(var i=0;i<sons.length;i++)
            sons[i].childNodes[0].style.borderColor='#E3E3E3';
        look.style.display='none';
        look.src='';
        userImgsrc='0';
        e.parentNode.className='';
    }
}