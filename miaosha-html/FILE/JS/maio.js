function timer(){
	var data= document.getElementById("link-box").getAttribute("data-click");
	var obj = eval("("+data+")"); 
	var target =obj.time;
	var now = parseInt(new Date().valueOf()/1000);
	var lefttime = target - now;
	html=timeCount(lefttime);
	document.getElementById("item-time").innerHTML = html;
}

function timeCount(maxtime){
	var html='';
	if (maxtime<=0) {
		return html;
	

	}
	var day=Math.floor(maxtime/86400);
    lefttime=Math.floor(maxtime%86400);
    var hour=Math.floor(lefttime/3600);
    lefttime=Math.floor(lefttime%3600);
    var minute=Math.floor(lefttime/60);
    var second=Math.floor(lefttime%60); 
    html="离开始：";
    if (day>0) {
    	html+=day+'天';
    }
    html+=hour+'小时';
    html+=minute+'分';
    html+=second+'秒';
    return html;
}
timer();
setInterval(timer,1000);