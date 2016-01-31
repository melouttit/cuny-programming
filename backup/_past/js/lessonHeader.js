window.onload = function() {

	var banner = '<p><a href="/cuny/">&laquo; Home</a> | <a href="../weekOne">Week 1</a> | <a href="../weekTwo">Week 2</a> | <a href="../weekThree">Week 3</a> | <a href="../weekFour">Week 4</a> | <a href="../weekFive">Week 5</a> | <a href="../weekSix">Week 6</a> | <a href="../weekSeven">Week 7</a> | <a href="../weekEight">Week 8</a> | <a href="../weekNine">Week 9</a> | <a href="../weekTwelve">Week 12</a> | <a href="../weekThirteen">Week 13</a></p>';

	var total = 12;

	var nav = document.getElementById("backTo");
	nav.innerHTML = banner;

	var anchors = document.getElementsByTagName("a");

	for(var i=0; i<total; i++){

		if(i === currentPage){
			anchors[i].className = 'current';
		} else {
			anchors[i].className = '';
		}

	}

};