window.onload = function() {

	var banner = '<p><a href="/cuny/">&laquo; Home</a> | <a href="weekOne.html">Week 1</a> | <a href="weekTwo.html">Week 2</a> | <a href="weekThree.html">Week 3</a> | <a href="weekFour.html">Week 4</a> | <a href="weekFive.html">Week 5</a> | <a href="weekSix.html">Week 6</a> | <a href="weekSeven.html">Week 7</a> | <a href="weekEight.html">Week 8</a> | <a href="weekNine.html">Week 9</a> | <a href="weekTen.html">Week 10</a></p>';
	var total = 11;

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