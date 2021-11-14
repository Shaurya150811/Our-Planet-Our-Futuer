const container1=document.getElementById("container11");
const button =document.getElementById("button33");
const array=["green.jpeg","green1.jpg","green2.jpeg","green3.jpeg","green4.jpeg","green5.jpeg","green6.jpeg","green7.jpeg","green8.jpeg"];
const message=document.getElementById("message");
const name=document.getElementById("name");
const showname=document.getElementById("showname");
const showmessage=document.getElementById("showmessage");
const button2 =document.getElementById("button22");
button.onclick=()=>{
if(message.value==="" || name.value===""){
alert("Please enter you Sustanable Tip if you like :)")
}
else{
showmessage.textContent=message.value;

message.value="";
showname.textContent= "~" + name.value +"😀";
name.value="";

}
}
var i=1;
button2.onclick=()=>{
container1.style.backgroundImage=`url(${array[i]})`;
i++;
if(i==9){
i=0;
}
}

