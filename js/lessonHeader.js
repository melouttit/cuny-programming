window.onload = function() {

	var banner = '<p><a href="http://melouttit.github.io/cuny-programming/">&laquo; Home</a> | <a href="../w1">Week 1</a> | <a href="../w2">Week 2</a>  | <a href="../w3">Week 3</a> | <a href="../w4">Week 4</a> | <a href="../w5">Week 5</a> | <a href="../w6">Week 6</a> | <a href="../w7">Week 7</a> | <a href="../w8">Week 8</a> | <a href="../w9">Week 9</a> | <a href="../w10">Week 10</a> <span style="display:none;">| Week 11 | <a href="../w12">Week 12</a></span> | <a href="../w13">Week 13</a> | <a href="../w14">Week 14</a><!----></p>';

	var total = 15;

	var nav = document.getElementById("backTo");
	nav.innerHTML = banner;

	var anchors = document.getElementsByTagName("a");

	for(var i=0; i<total; i++){

		if(i === currentWeek){
			anchors[i].className = 'current';
		} else {
			anchors[i].className = '';
		}

	}

};