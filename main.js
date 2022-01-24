var imgs=["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "me.png"];
var names=["My Family Book", "Dad", "Mom", "Brother", "Me"];
var count=0;
function next(){
if(count==5){
    count=0;
}
document.getElementById("images").src=imgs[count];
document.getElementById("qwerty").innerHTML=names[count];
count++;
}