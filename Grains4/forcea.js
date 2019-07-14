// Define some constants
//kS = 5E4;
//kV2 = 2.0;

// Class of Force
function Force() {
	
}

//spring force is physically correct already
// Define Spring force
Force.spring = function(p1, p2) {
	var m1 = p1.m;
	var m2 = p2.m;
	var r1 = p1.r;
	var r2 = p2.r;
	var r10 = p1.r0;
	var r20 = p2.r0;
	var r = Vect3.sub(Vect3.sub(r1, r10),Vect3.sub(r2, r20));
	var u = Vect3.uni(r);
	var f = Vect3.mul(-kS,r);
	return f;
}

//should be parallel to locomotor movement... 1D assumption totally wrong
//define drag force
Force.drag = function(p) {
	var v = p.v;
	var D = p.D;
	var A = Math.PI*(D*0.5)*(D*0.5);
	var f = new Vect3(-0.5*kD*rho*A*Ux*Ux, -0.5*kD*rho*A*Uy*Uy, 0);
	return f;
}

//define lift force
Force.lift = function(p)
{
	var v = p.v;
	var D = p.D;
	var A = Math.PI*(D*0.5)*(D*0.5);
	var f = new Vect3(0.5*kL*rho*A*Ux*Ux, 0.5*kL*rho*A*Uy*Uy, 0);
	return f;
}