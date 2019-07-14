/*
	layout.js
	Define layout for simulation.
	Sparisoma Viridi | dudung@gmail.com
	
	20170215
	Start this library.
*/

function layout() {
	// Create left division
	var ldiv = document.createElement("div");
	document.body.appendChild(ldiv);
	ldiv.style.border = "0px black solid";
	ldiv.style.height = "402px";
	ldiv.style.float = "left";
	ldiv.style.width = "252px";
	
	// Create right division
	var rdiv = document.createElement("div");
	document.body.appendChild(rdiv);
	rdiv.style.border = "0px black solid";
	rdiv.style.height = "402px";
	rdiv.style.float = "left";
	
	// Create text area for showing time
	var ta1 = document.createElement("textarea");
	ldiv.appendChild(ta1);
	ta1.style.color = "black";
	ta1.style.background = "white";
	ta1.rows = "2";
	ta1.cols = "32";
	ta1.style.overflowY = "scroll";
	ta1.style.display = "block";	
	ta1.id = "hout";
	
	//text area for input
	var ta2 = document.createElement("textarea");
	ldiv.appendChild(ta2);
	ta2.id = "ta2";
	ta2.style.color = "black";
	ta2.style.background = "white";
	ta2.rows = "9";
	ta2.cols = "32";
	ta2.style.overflowY = "scroll";
	ta2.style.display = "block";		
	ta2.value = defaultParams();
	
	// Create canvas for drawing
	var c = document.createElement("canvas");
	rdiv.appendChild(c);
	c.id = "canvas";
	c.style.border = "1px solid #999";
	c.style.background = "white";
	c.width = "800";
	c.height = "400";
	//c.style.float = "left";
	var ctx = c.getContext("2d");
	
	// Prepare canvas
	setCanvasCoordinates("canvas");
	setWorldCoordinates(-8, -8, 8, 8);
	
	// Create start button
	var b1 = document.createElement("button");
	ldiv.appendChild(b1);
	b1.innerHTML = "Start";
	b1.onclick = function() {
		if(b1.innerHTML == "Start") {
			b1.innerHTML = "Stop";
			timer1 = setInterval(run, 1); //run the function 'run'
		} else {
			b1.innerHTML = "Start";
			clearInterval(timer1);
		}
	}
	
	// Create default Button
	var b2 = document.createElement("button");
	ldiv.appendChild(b2);
	b2.innerHTML = "Default";
	b2.onclick = function() {
		var ta = document.getElementById("ta2");
		ta.value = defaultParams();
	}
}

// Generate default parameters
function defaultParams() {
	var params = "";
	params += "U\t 100\n";
	params += "FREQ\t 30.0\n";
	params += "KS\t 5E4\n";
	params += "KDRAG\t 0.47\n";
	params += "RHO\t 50\n";
	params += "KL\t 0.50\n";
	
	return params;
}

// Get parameters from textarea nText
function getParams()
{
	var ta = document.getElementById("ta2");
	var lines = ta.value.split("\n"); //idk what these're for
	var Nlines = lines.length;
	/*if (lines[Nlines - 1].length == 0) {
		Nlines--;
	}*/
	//you can change the parameters with these in textarea
	for(var l = 0; l < Nlines; l++) {
		var cols = lines[l].split(" ");
		//var Ncols = cols.length;
		//still don't get what above is for
		if(cols[0] == "U\t")
		{
			magU = parseFloat(cols[1]);
		}
		if(cols[0] == "FREQ\t") {
			freq = parseFloat(cols[1]); //convert string to float
		}
		if(cols[0] == "AMPL\t") {
			Amp = parseFloat(cols[1]);
		}
		if(cols[0] == "KS\t") {
			kS = parseFloat(cols[1]);
		}
		if(cols[0] == "KDRAG\t") {
			kD = parseFloat(cols[1]);
		}
		if(cols[0] == "RHO\t") {
			rho = parseFloat(cols[1]);
		}
		if(cols[0] == "KL\t")
		{
			kL = parseFloat(cols[1]);
		}
	}
		
}