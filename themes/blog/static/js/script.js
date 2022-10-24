function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var timeleft = 15;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "<a class='c-r' href='"+ url +""+ encryptmet +"'>Klik Untuk Lanjut</a><p>* Kemudian scrol ke bawah ya..!</p>";
  } else {
    document.getElementById("countdown").innerHTML = timeleft +" Proses menuju link download...";
  }
  timeleft -= 1;
}, 1000);

var timeleft2 = 20;
var downloadTimer2 = setInterval(function(){
  if(timeleft2 <= 0){
    clearInterval(downloadTimer2);
    document.getElementById("countdown2").innerHTML = "<a class='bc-2 p-5 br-3' href='//drive.google.com/uc?export=download&confirm=t&id="+ goo +"'>Link Download</a>";
  } else {
    document.getElementById("countdown2").innerHTML = timeleft2 +" Proses membuat link download...";
  }
  timeleft2 -= 1;
}, 1000);

var timeleft3 = 20;
var downloadTimer3 = setInterval(function(){
  if(timeleft3 <= 0){
    clearInterval(downloadTimer3);
    document.getElementById("countdown3").innerHTML = "<a class='bc-2 p-5 br-3' href='https://batchs.herokuapp.com/index.php?med="+ med +"'>Link Download</a>";
  } else {
    document.getElementById("countdown3").innerHTML = timeleft3 +" Proses membuat link download...";
  }
  timeleft3 -= 1;
}, 1000);

var timeleft4 = 20;
var downloadTimer4 = setInterval(function(){
  if(timeleft4 <= 0){
    clearInterval(downloadTimer4);
    document.getElementById("countdown4").innerHTML = "<a class='bc-2 p-5 br-3' href='https://archive.org/download/"+ encryptarc +".rar'>Link Download</a>";
  } else {
    document.getElementById("countdown4").innerHTML = timeleft4 +" Proses membuat link download...";
  }
  timeleft4 -= 1;
}, 1000);

var timeleft5 = 20;
var downloadTimer5 = setInterval(function(){
  if(timeleft5 <= 0){
    clearInterval(downloadTimer5);
    document.getElementById("countdown5").innerHTML = "<a class='bc-2 p-5 br-3' href='https://kusagiri.eu.org/"+ kus +".zip'>Link Download</a>";
  } else {
    document.getElementById("countdown5").innerHTML = timeleft5 +" Proses membuat link download...";
  }
  timeleft5 -= 1;
}, 1000);

var timeleft6 = 20;
var downloadTimer6 = setInterval(function(){
  if(timeleft6 <= 0){
    clearInterval(downloadTimer6);
    document.getElementById("countdown6").innerHTML = "<a class='bc-2 p-5 br-3' href='https://www.dropbox.com/s/dl/"+ kus +".zip'>Link Download</a>";
  } else {
    document.getElementById("countdown6").innerHTML = timeleft6 +" Proses membuat link download...";
  }
  timeleft6 -= 1;
}, 1000);

var sites = ['other/the-most-extreme-tourist-places-in-the-world/','other/8-most-beautiful-mosques-in-the-world/'];
var url = sites[Math.floor(Math.random() * sites.length)];

var met = getUrlParam('met',null);
var med = getUrlParam('med',null);
var goo = getUrlParam('goo',null);
var arc = getUrlParam('arc',null);
var kus = getUrlParam('kus',null);
var dro = getUrlParam('dro',null);

var encryptmet = decodeURIComponent(met);
var encryptarc = decodeURIComponent(arc);

var metadir = "<h2 class='fs-20 d-f ai-c jc-c gg-10' id='countdown'></h2>";
var google = "<b class='fs-20 c-r d-f ai-c jc-c' id='countdown2'></b>";
var mediafire = "<b class='fs-20 c-r d-f ai-c jc-c' id='countdown3'></b>";
var archive = "<b class='fs-20 c-r d-f ai-c jc-c' id='countdown4'></b>";
var kusagiri = "<b class='fs-20 c-r d-f ai-c jc-c' id='countdown5'></b>";
var dropbox = "<b class='fs-20 c-r d-f ai-c jc-c' id='countdown6'></b>";