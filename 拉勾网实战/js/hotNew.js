//获取数据
var data=null;
function getData() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','json/xt-data2.json',false);
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
            data=utils.toJson(xhr.responseText)
        }
    };
    xhr.send();
}
getData();
console.log(data);


//把数据放上去
var minTop=document.getElementsByClassName('minTop')[0];
var oUl=minTop.getElementsByTagName('ul')[0];
console.log(oUl);

function giveHtml(data) {
    var str='';
    for(let i=0;i<data.length;i++){
   str +=`     <li>
            <div class="top">
                <a href="##" >${data[i].job}</a>
                <span class="time">${data[i].time}</span>
                <div class="chat-box">${data[i].chat}</div>
                <span class="salary">${data[i].pay}</span>
             </div>
        <div class="center">
            <span>${data[i].experience}</span>
            <span>/${data[i].education}</span>
        </div>
            <div class="type">
                <span>${data[i].type1}</span>
                <span>${data[i].type2}</span>
                <span>${data[i].type3}</span>
            </div>
        <div class="bottom">
            <div class="lf-box">
            <img src="${data[i].img}" alt=""></div>
            <div class="rt-box">
                <div class="box1"> <a href="javascript::">${data[i].company}</a></div>
       <div class="box2">
            <span>${data[i].introduce1}</span>
           <span>/ ${data[i].introduce2}</span>
           <span>/ ${data[i].introduce3}</span>
       </div>
            </div>
        </div></li>`
    }
    oUl.innerHTML=str;
}
giveHtml(data);