  var shaffled_array = new Array(cardNum);
  var cardState = new Array();
  var state;
  var firstCardOpen = 0;
  var secondCardOpen = 0;
  var score;
  var instructionOn;

  function randOrd(){
    return (Math.round(Math.random())-0.5); 
  } 

  function PreloadImages()
  {
	  document.all['BGSOUND_ID'].src="sounds/cartoon2.wav";
     for (var i = 0; i < cardNum ; i++ )
     {
      shaffled_array[i]=i;
     }
     shaffled_array.sort( randOrd );
     shaffled_array.sort( randOrd );
     shaffled_array.sort( randOrd );
     shaffled_array.sort( randOrd );
	 for (var i=0; i<cardNum; i++)
	 {
	     cardState[i] = "close";
         document.getElementById("picture"+i).src = "photo.jpg";
	 }
	 
	 state = "idle";	 
     score = 0;
	 cardsOpened = 0;
   document.getElementById("instructions").style.display = "none";
	 instructionOn=false;
    document.getElementById("piccard").innerHTML = ("");
     document.getElementById("matchedcards").innerHTML = ("");
  }

  function ChangePicture(picName, picNum){
  switch (state)
     {
     case "idle":
		 if (cardState[picNum] == "close")
		 {
 			 cardsOpened++;
             firstCardOpen = picNum;
	         firstPicName  = picName;
              document.getElementById(picName).src = "img/pic"+shaffled_array[picNum]+"\.jpg";
			 cardState[firstCardOpen] = "open";
	         state = "firstOpen";
		 }
        break;  
     case "firstOpen":
		 if(cardState[picNum] == "close"){
			 cardsOpened++;
			 secondCardOpen = picNum;
			 secondPicName  = picName;
             document.getElementById(picName).src = "img/pic"+shaffled_array[picNum]+"\.jpg";
 			 cardState[secondCardOpen] = "open";
			 if (Math.floor(shaffled_array[firstCardOpen]/2) == Math.floor(shaffled_array[secondCardOpen]/2)){
				 score++;
	  	         document.all['BGSOUND_ID'].src="sounds/fanfare2.wav";
				 if (score == cardNum/2)
				 {
	  	          document.all['BGSOUND_ID'].src="sounds/app-29.wav";
				 }
				 state = "idle";
			 }else{
				  state = "clearWrong";
				 }
		  }
        break;  
     case "clearWrong":
             document.getElementById(firstPicName).src = "photo.jpg";
			 cardState[firstCardOpen] = "close";
             document.getElementById(secondPicName).src = "photo.jpg";
 			 cardState[secondCardOpen] = "close";
	         state = "idle";
        break;  
     }
  			 document.getElementById("piccard").innerHTML = ("עד עכשיו הרמת "+cardsOpened+" קלפים");
  			 document.getElementById("matchedcards").innerHTML = ("עד עכשיו מצאת "+score+" זוגות");
}

  function restart(){
	  PreloadImages();
  }
	function appeareInstruction(){
		if (instructionOn)
		{
		 document.getElementById("instructions").style.display = "none";
		 instructionOn = false;
		} else {
		 document.getElementById("instructions").style.display = "block";
		 document.getElementById("instructiontext").innerHTML = ("משחק זה הוא משחק זיכרון – לחיצה על קלף הופכת אותו. לחיצה על עוד קלף הופכת גם אותו. אם המילים על הקלפים הן הפכים הרווחת את הזוג והם יישארו גלויים אם לא לחיצה נוספת תכסה שוב את הקלפים ותוכל להפוך זוג נוסף. למטה נרשמים כמה זוגות מצאת וכמה הפכת.");
		 instructionOn = true;
		}
	}
  