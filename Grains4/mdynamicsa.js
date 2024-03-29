/*
	mdynamics.js
	Library of simple molecular dynamics
	Sparisoma Viridi | dudung@gmail.com
	
	20170214
	Create this library.
	20170215
	There is bug in using Timer object, where it was twice
	called, then it could not be stopped. A condition must
	be set to avoid creating another object incidentally.
*/

// Define some global constants
dt = 0.01;
t = 0;

// Class of Mdynamics
function Mdynamics() {
	//this function can hold many things, depends on how many
	//arguments it can have, it's just a different way compared
	//to grain.js
}

// Set time step and reset time
Mdynamics.setdt = function(dtt) {
	dt = dtt;
	t = 0;
}

// Perform Euler integration
Mdynamics.Euler = function(SF, p) {
	var m = p.m;
	var r = p.r;
	var v = p.v;
	var a = Vect3.div(SF, m); //get acceleration
	v = Vect3.add(v, Vect3.mul(a, dt));//add it with current speed
	r = Vect3.add(r, Vect3.mul(v, dt)); 
	p.r = r;//make it current grain position
	p.v = v;//make it current grain velocity
}

// Increase time
Mdynamics.inct = function() {
	t += dt;
}