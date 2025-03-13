function saat(){
    var tarih=new Date();
    var dak=tarih.getMinutes();
    var san=tarih.getSeconds();
    var zaman=dak+":"+san;
    document.getElementById("time").innerHTML=zaman+"";
}
function usergonder1(){
    var mesaj1=document.getElementById("usertext1").value;
    document.getElementById("useraltmenu1").innerHTML+="<div id='chat2'>"+mesaj1+"</div>"+"<br>";
    document.getElementById("useraltmenu2").innerHTML+="<div id='chat1'>"+mesaj1+"</div>"+"<br>";
}
function usergonder2(){
    var mesaj2=document.getElementById("usertext2").value;
    document.getElementById("useraltmenu1").innerHTML+="<div id='chat1'>"+mesaj2+"</div>"+"<br>";
    document.getElementById("useraltmenu2").innerHTML+="<div id='chat2'>"+mesaj2+"</div>"+"<br>";
}