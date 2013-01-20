var word = new Array();
var shaffled_array = new Array();
var rightNum;
var wrongNum;
var send_num;
var gishur = true;

	word[0] = "מנהלים משא ומתן";
	word[1] = "מציעים הצעות בפתרון";
	word[2] = "משוחחים";
	word[3] = "מספרים מה מציק להם";
	word[4] = "מספרים מה מפריע להם";
	word[5] = "מספרים מה העליב אותם";
	word[6] = "מתייחסים אחד לשני בכבוד";
	word[7] = "מגלים סובלנות";
	word[8] = "מקשיבים";
	word[9] = "מתנצלים";
	word[10] = "מתפייסים";
	word[11] = "לוחצים ידיים";
	word[12] = "מתרגזים";
	word[13] = "מקללים";
	word[14] = "צועקים";
	word[15] = "מתנהגים באלימות";
	word[16] = "בועטים";
	word[17] = "מתווכחים";
	word[18] = "דוחפים";
	word[19] = "מאיימים";
	word[20] = "כועסים";
	word[21] = "מאשימים";
	word[22] = "מעליבים";
	word[23] = "פוגעים";

function randOrd(){
    return (Math.round(Math.random())-0.5); 
}
function preload(){
	  document.all['BGSOUND_ID'].src="sounds/cartoon2.wav";
for (var i = 0; i < 24 ; i++ )
  {
     shaffled_array[i]=i;
  }
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );

	for (i=0;i<24 ;i++ )
	{
            document.getElementById("wordBut"+i).innerHTML = word[shaffled_array[i]];	
	}
rightNum=0;
wrongNum=0;
send_num=0;

}
function clear_error_message(){
		document.getElementById("error_message").innerHTML = "";
		clearTimeout(clear_err);
}
function gishurOn(){
gishur = true;
document.getElementById("gishurState").innerHTML = "גישור";
}
function gishurOff(){
gishur = false;
document.getElementById("gishurState").innerHTML = "סיכסוך";
}
function gishurQuality(num){
	if (gishur)
	{
			document.getElementById("rightWord"+rightNum).innerHTML = word[shaffled_array[num]];	
            document.getElementById("rightWord"+rightNum).style.display = "block";	
//  document.getElementById("rightcounter").innerHTML = "שלחת <br />"+send_num+"<br />בלונים<br />צדקת<br />"+right+"<br />פעמים";
			rightNum++;
            document.getElementById("wordBut"+num).style.display = "none";
				if (rightNum+wrongNum == 24){document.all['BGSOUND_ID'].src="sounds/app-29.wav";}
  document.getElementById("rightcounter").innerHTML = "לחצת <br />"+send_num+"<br />פעמים<br />צדקת<br />"+(rightNum+wrongNum)+"<br />פעמים";
	} else {
		document.getElementById("error_message").innerHTML = "טעות, נסה שנית";
  document.getElementById("rightcounter").innerHTML = "לחצת <br />"+send_num+"<br />פעמים<br />צדקת<br />"+(rightNum+wrongNum)+"<br />פעמים";
		clear_err = setTimeout("clear_error_message()",1500);
			}
}
function ungishurQuality(num){
	if (!gishur)
	{
			document.getElementById("wrongWord"+wrongNum).innerHTML = word[shaffled_array[num]];	
            document.getElementById("wrongWord"+wrongNum).style.display = "block";	
			wrongNum++;
            document.getElementById("wordBut"+num).style.display = "none";
    			if (rightNum+wrongNum == 24){document.all['BGSOUND_ID'].src="sounds/app-29.wav";}
  document.getElementById("rightcounter").innerHTML = "לחצת <br />"+send_num+"<br />פעמים<br />צדקת<br />"+(rightNum+wrongNum)+"<br />פעמים";
	} else {
		document.getElementById("error_message").innerHTML = "טעות, נסה שנית";
  document.getElementById("rightcounter").innerHTML = "לחצת <br />"+send_num+"<br />פעמים<br />צדקת<br />"+(rightNum+wrongNum)+"<br />פעמים";
		clear_err = setTimeout("clear_error_message()",1500);
			}
}
function checkWord(num){
	send_num++;
	if (shaffled_array[num]<12){
		gishurQuality(num);
	} else {
		ungishurQuality(num);
	}
}
