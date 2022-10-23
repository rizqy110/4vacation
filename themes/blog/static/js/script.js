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

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "https://absi.pages.dev";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " Menuju link download...";
  }
  timeleft -= 1;
}, 1000);

var timeleft2 = 20;
var downloadTimer2 = setInterval(function(){
  if(timeleft2 <= 0){
    clearInterval(downloadTimer2);
    document.getElementById("countdown2").innerHTML = "<a href='"+ med +""+ goo +"'>Link Download Kamu</a>";
  } else {
    document.getElementById("countdown2").innerHTML = timeleft2 + " Membuat link download...";
  }
  timeleft2 -= 1;
}, 1000);

var sites = ['http://localhost:1313/traveling/7-best-months-to-go-on-vacation-to-bali/','http://localhost:1313/entertainment/4-newest-horror-movies-for-september-october-2022-that-are-currently-and-will-be-showing-in-theaters-celebrate-halloween/','http://localhost:1313/health/11-natural-fever-reduction-medications-cheap-and-powerful-herbs-natural/'];
var url = sites[Math.floor(Math.random() * sites.length)];

var met = getUrlParam('met',null);
var med = getUrlParam('med',null);
var goo = getUrlParam('goo',null);

var encryptmet = decodeURIComponent(met);

var metadir = "<h2 class='fs-20 ta-c' id='countdown'></h2><meta http-equiv='refresh' content='10; url="+ url +""+ encryptmet +"'/>";
var direct = "<p class='fs-20 ta-c c-r' id='countdown2'></p>";