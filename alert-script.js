var text="No, go back, go back, your device is going wrong. We are sorry, contact enjoyWithMovies.com. If you still here, you may find the way what is happening to your device. Try to contact if you dont want your device with some critical damage. Stay here to see WHAT HAPPENED TO YOUR DEVICE";                               
var textRegion = document.getElementById('typingText');
i=0;

function typing(){
    if(text.length>0){
        textRegion.innerHTML+=text.charAt(i);
        i=i+1;
        if(text.length==i-1){
            fun();
        }
        else{
            setTimeout("typing()",140);
        }
    }
}

typing();

var pleaseWait="Please wait for ";
var sec=" seconds...";
seconds=11;
var forFun=document.getElementById('forFun');

function fun(){
    seconds=seconds-1;
    forFun.innerHTML=pleaseWait+""+seconds+""+sec;
    if(seconds==0){
        reveal();
    }
    else{
        setTimeout("fun()",1000);
    }
}

var r="JUST FOR FUN";
var emoj="&#128514;";
j=0;
var rev=document.getElementById('reveal');

function reveal(){
    if(r.length>0){
        rev.innerHTML+=r.charAt(j);
        j+=1;
        if(r.length==j){
            rev.innerHTML+=emoj;
        }
        else{
            setTimeout("reveal()",200);
        }
    }

}
