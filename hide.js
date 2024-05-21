
function hide(){
    document.getElementById('card1').style.transform = "translateY(-150px)"

    document.getElementById('card2').style.backgroundColor='#000000';
    document.getElementById('card2').style.opacity='0.8';

    document.getElementById('card3').style.backgroundColor='#000000';
    document.getElementById('card3').style.opacity='0.8';
}

function hide2(){
    document.getElementById('card2').style.transform = "translateY(-150px)"

    document.getElementById('card1').style.backgroundColor='#000000';
    document.getElementById('card1').style.opacity='0.8';

    document.getElementById('card3').style.backgroundColor='#000000';
    document.getElementById('card3').style.opacity='0.8';
}

function hide3(){
    document.getElementById('card3').style.transform = "translateY(-150px)"

    document.getElementById('card1').style.backgroundColor='#000000';
    document.getElementById('card1').style.opacity='0.8';

    document.getElementById('card2').style.backgroundColor='#000000';
    document.getElementById('card2').style.opacity='0.8';
}

function hideDesc(){
    document.getElementById('subDesc1').style.display='none';
    document.getElementById('subTitle1').style.display='inline-block';
}
function hideDesc2(){
    document.getElementById('subDesc2').style.display='none';
    document.getElementById('subTitle2').style.display='inline-block';
}
function hideDesc3(){
    document.getElementById('subDesc3').style.display='none';
    document.getElementById('subTitle3').style.display='inline-block';
}
function hideDesc4(){
    document.getElementById('subDesc4').style.display='none';
    document.getElementById('subTitle4').style.display='inline-block';
}