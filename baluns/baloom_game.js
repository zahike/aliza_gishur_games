var words = new Array();
var end_ballon_high = new Array();end_ballon_left = new Array();
var shaffled_array = new Array(16);
var ballon_high;
var ballon_width;
var ballon_num;
var word_num;
var ballon_fly;
var checked;
var right;
var send_num;
var playing;
var balloon_moves;
var instructionOn;

function randOrd(){
    return (Math.round(Math.random())-0.5); 
}
function startGame(){
document.all['BGSOUND_ID'].src="sounds/cartoon2.wav";
	 ballon_num=0;
	 word_num=0;
	 right=0;
	 send_num=0;
	 playing=true;
	 balloon_moves=false;
  document.getElementById("instructions").style.display = "none";
	 instructionOn=false;
  document.getElementById("rightcounter").innerHTML = "";
  document.getElementById("mass").innerHTML = "";
  document.getElementById("quality").innerHTML = "";
  document.getElementById("rightwrong").innerHTML = "";
	for (i=0;i<10 ;i++ )
	{
  document.getElementById("upBaloom"+i).style.display = "none";
	}

for (var i = 0; i < 16 ; i++ )
  {
     shaffled_array[i]=i;
  }
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
shaffled_array.sort( randOrd );
}
function loadData(){
words[0] ="מטיף מוסר";
words[1] ="קנאה";
words[2] ="שנאה";
words[3] ="כעסן";
words[4] ="רגזן";
words[5] ="מאשים";
words[6] ="מחליט על פתרון";
words[7] ="הקשבה";
words[8] ="בונה אמון";
words[9] ="סובלנות";
words[10] ="רגיש";
words[11] ="סבלני";
words[12] ="יצירתי";
words[13] ="משקף";
words[14] ="מגלה אמפתיה";
words[15] ="מכבד את הזולת";
end_ballon_high[0] = 20 ;end_ballon_left[0] = 800;
end_ballon_high[1] = 200;end_ballon_left[1] = 820;
end_ballon_high[2] = 110;end_ballon_left[2] = 610;
end_ballon_high[3] = 20 ;end_ballon_left[3] = 400;
end_ballon_high[4] = 270;end_ballon_left[4] = 490;
end_ballon_high[5] = 050;end_ballon_left[5] = 160;
end_ballon_high[6] = 205;end_ballon_left[6] = 280;
end_ballon_high[7] = 180;end_ballon_left[7] = 060;
end_ballon_high[8] = 340;end_ballon_left[8] = 110;
startGame();
}
  function ballon_step_move (end_high, high_step, width_step) {
	  balloon_moves = true;
	  if (ballon_high > end_high)
	  {
		  ballon_high -= high_step;
		  ballon_width -= width_step;
  document.getElementById("upBaloom"+ballon_num).style.top  = ballon_high+"px";
  document.getElementById("upBaloom"+ballon_num).style.left = ballon_width+"px";
          ballonNextStep = setTimeout("ballon_step_move("+end_high+","+high_step+","+width_step+")",100); 
	  } else {
		  clearTimeout(ballonNextStep);
		  if (ballon_fly)
		  {
			  ballon_num++;
			  word_num++;
	          checked=false;
			  if (word_num==16)
			  {
	  	          document.all['BGSOUND_ID'].src="sounds/app-29.wav";
				  playing=false;
			  }
		  }
		  balloon_moves=false;
	  }
  }
  function move_ballon (target_high, target_width){
	  delta_high  = (ballon_high - target_high)/10;
	  delta_widht = (ballon_width - target_width)/10;
	  ballon_step_move (target_high, delta_high, delta_widht);
  }
  function clear_baloom(){
  document.getElementById("upBaloom"+ballon_num).style.display = "none";
      clearTimeout(clear);
      word_num++;
	  checked=false;
	  if (word_num==16)
	  {
	  	          document.all['BGSOUND_ID'].src="sounds/app-29.wav";
				  playing=false;
	  }
  }
  function check_right_cilck (click){
	  if (click=="fly")
	  {
		  if (shaffled_array[word_num]<7)
		  {
  document.getElementById("mass").innerHTML = " אינה תכונה של המגשר - נסה שנית ";
  document.getElementById("quality").innerHTML = words[shaffled_array[word_num]];
  document.getElementById("rightwrong").innerHTML = "  טעות  ";
  document.getElementById("rightwrong").style.color="#ff0033";
  document.getElementById("upBaloom"+ballon_num).style.background = "url('sad_smiley.png') center center no-repeat;";
  document.getElementById("rightcounter").innerHTML = "שלחת <br />"+send_num+"<br />בלונים<br />צדקת<br />"+right+"<br />פעמים";
      mistake = setTimeout("send_baloom()",1500); 
		  } else {
			    right++;
  document.getElementById("mass").innerHTML = "  היא תכונה של המגשר  ";
  document.getElementById("quality").innerHTML = words[shaffled_array[word_num]];
  document.getElementById("rightwrong").innerHTML = "  נכון  ";
  document.getElementById("rightwrong").style.color="#009d4f";
  document.getElementById("rightcounter").innerHTML = "שלחת <br />"+send_num+"<br />בלונים<br />צדקת<br />"+right+"<br />פעמים";
				checked=true;
				fly_ballon();
		  }
	  }else{
		  if (shaffled_array[word_num]>6)
		  {
  document.getElementById("mass").innerHTML = " היא תכונה של המגשר - נסה שנית ";
  document.getElementById("quality").innerHTML = words[shaffled_array[word_num]];
  document.getElementById("rightwrong").innerHTML = "  טעות  ";
  document.getElementById("rightwrong").style.color="#ff0033";
  document.getElementById("upBaloom"+ballon_num).style.background = "url('sad_smiley.png') center center no-repeat;";
   document.getElementById("rightcounter").innerHTML = "שלחת <br />"+send_num+"<br />בלונים<br />צדקת<br />"+right+"<br />פעמים";
     mistake = setTimeout("send_baloom()",1500); 
		  } else { 
			    right++;
  document.getElementById("mass").innerHTML = "  אינה תכונה של המגשר  ";
  document.getElementById("quality").innerHTML = words[shaffled_array[word_num]];
  document.getElementById("rightwrong").innerHTML = "  נכון  ";
  document.getElementById("rightwrong").style.color="#009d4f";
  document.getElementById("rightcounter").innerHTML = "ניסית <br />"+send_num+"<br />בלונים<br />צדקת<br />"+right+"<br />פעמים";
				checked=true;
				kill_baloom();
		  }
	  }
  }
  function send_baloom(){
	if ((!checked)&&(playing)&&(!balloon_moves))
	{
	send_num++;
	ballon_high=700;
    ballon_width=450;
    ballon_fly=false;
    if (checked){clearTimeout(mistake);}
	checked=false;
    document.getElementById("upBaloom"+ballon_num).style.display = "block";
    document.getElementById("word"+ballon_num).innerHTML = words[shaffled_array[word_num]];
    document.getElementById("upBaloom"+ballon_num).style.background = "url('smiley.png') center center no-repeat;";
    document.getElementById("mass").innerHTML = "";
    document.getElementById("quality").innerHTML = "";
    document.getElementById("rightwrong").innerHTML = "";
    move_ballon (510, 450)
	}
  }
  function fly_ballon(){
	  if ((playing)&&(!balloon_moves))
	  {
	  if (!checked){
		  check_right_cilck("fly");
	  }else{
	  ballon_fly=true;
      move_ballon (end_ballon_high[ballon_num], end_ballon_left[ballon_num]);
	  }
	  }
  }
  function kill_baloom(){
	  if ((!ballon_fly)&&(playing)&&(!balloon_moves))
	  {
	  if (!checked){
		  check_right_cilck("kill");
	  }else{
  document.getElementById("upBaloom"+ballon_num).style.background = "url('sad_smiley.png') center center no-repeat;";
      clear = setTimeout("clear_baloom()",300); 
      }
	  }
  }
	function appeareInstruction(){
		if (instructionOn)
		{
		 document.getElementById("instructions").style.display = "none";
		 instructionOn = false;
		} else {
		 document.getElementById("instructions").style.display = "block";
		 instructionOn = true;
		}
	}
