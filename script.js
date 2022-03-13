calculate= ()=>{
let Number1= parseInt(document.getElementById('firstNum').value);
let Number2=parseInt(document.getElementById('secendNum').value);
let arrey = ["nader","sadegh", "akbar"]
for (let index = 0; index < arrey.length; index++) {
    console.log(arrey[index])
}
let arreyof =["nader" , " sadegh " , "shahab"];
let text = 0;
for (const x of arreyof) {
    text+=x;
    document.getElementById("result").innerHTML = text;
}

let opt=document.getElementById("operator").value;
if(opt === '+')console.log(Number1 + Number2);
else if(opt === '-')console.log(Number1 - Number2);
else if(opt === '/')console.log(Number1 / Number2);
else if(opt === '*')console.log(Number1 * Number2);
}

let suming=0;
let zarbing=0;
let taghsiming=0;
let menhaing=0;


let bol=1;
let N1=0;
let N2=0;
insert0= ()=>{
    if(N1=="0") {
        N1="0"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="0"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert1= ()=>{
    if(N1=="0") {
        N1="1"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="1"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert2= ()=>{
    if(N1=="0") {
        N1="2"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="3"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert3= ()=>{
    if(N1=="0") {
        N1="3"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="3"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert4= ()=>{
    if(N1=="0") {
        N1="4"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="4"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert5= ()=>{
    if(N1=="0") {
        N1="5"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="5"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert6= ()=>{
    if(N1=="0") {
        N1="6"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="6"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert7= ()=>{
    if(N1=="0") {
        N1="7"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="7"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert8= ()=>{
    if(N1=="0") {
        N1="8"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="8"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}
insert9= ()=>{
    if(N1=="0") {
        N1="9"
        console.log(N1);
        document.getElementById("result2").innerHTML=N1;
    }else{
    N1+="9"
    console.log(N1);
    document.getElementById("result2").innerHTML=N1;
    }
}


sum = ()=>{
suming+=parseInt(N1);
    N1=0;
    console.log(suming);
    document.getElementById("result2").innerHTML=suming;

}
manha = ()=>{
    if(menhaing!==0){
        let x =parseInt(N1);
        x-=menhaing;
        menhaing=x;
        N1=0;
        console.log(menhaing);
        document.getElementById("result2").innerHTML=menhaing; 
    }
    else{
        menhaing=parseInt(N1);
        N1=0;
        console.log(menhaing);
        document.getElementById("result2").innerHTML=menhaing; 
    }


}

zarb= ()=>{
    if(zarbing!==0)
    {
    zarbing*=parseInt(N1);
    N1=0;
    console.log(zarbing);
    document.getElementById("result2").innerHTML=zarbing;

    }else{
    zarbing+=parseInt(N1);
    console.log(zarbing);
    document.getElementById("result2").innerHTML=zarbing;

    N1=0
    }
}

taghsim= ()=>{
    if(taghsiming!==0)
    {
    taghsiming/=parseInt(N1);
    N1=0;
    console.log(taghsiming);
    document.getElementById("result2").innerHTML=taghsiming;
    }else{
    taghsiming=parseInt(N1);
    console.log(taghsiming);
    document.getElementById("result2").innerHTML=taghsiming;
    N1=0
    }
}




mosavi= ()=>{
    
    if(suming!== 0) {
        let final=parseInt(suming);
        final+=parseInt(N1);
        console.log(final);
        document.getElementById("result2").innerHTML=" = "+final;
        N1=final;
        N2=0;
        suming=0;
    }
    if(menhaing!== 0) {
        let final=parseInt(menhaing);
        final-=parseInt(N1);
        console.log(final);
        document.getElementById("result2").innerHTML=" = "+final;
        N1=final;
        N2=0;
        menhaing=0;
    }
    if(zarbing!== 0) {
        let final=parseInt(zarbing);
        final*=parseInt(N1);
        console.log(final);
        document.getElementById("result2").innerHTML=final;
        N1=final;
        N2=0;
        zarbing=0;
    }
    if(taghsiming!== 0) {
        let final=parseInt(taghsiming);
        final/=parseInt(N1);
        console.log(final);
        document.getElementById("result2").innerHTML=final;
        N1=final;
        N2=0;
        taghsiming=0;

    }

}

resetab= ()=>{
    N1=0;
    N2=0
    document.getElementById("result2").innerHTML=N2;

    }

