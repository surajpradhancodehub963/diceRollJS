function myFunction(){
    let randomnumber1=Math.floor((Math.random()*6)+1);
    let randomnumber2=Math.floor((Math.random()*6)+1);
    document.querySelector('.img1').setAttribute("src",`./images/dice${randomnumber1}.png`);
    document.querySelector('.img2').setAttribute("src",`./images/dice${randomnumber2}.png`);
    let count=0;
    if(randomnumber1>randomnumber2){
        count=1;
    }
    else if(randomnumber1==randomnumber2){
        count=0;
    }
    else{
        count=2;
    }
    if(count==0){
        document.querySelector('.answer h1').innerHTML="The Match is Drawn";
    }
    else{
        document.querySelector('.answer h1').innerHTML=`Congrats PLAYER ${count} won`;
    }
    console.log(randomnumber1,randomnumber2);  
}