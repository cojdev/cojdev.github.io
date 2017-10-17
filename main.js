//IIFE
(function () {
	'use strict';
	
	var canvas,ctx,mousePos,pixelRatio;
	var points = [];
	var maxDist = 200;

	function init () {
		//Add on load scripts
		pixelRatio = Math.round(window.devicePixelRatio) || 1;
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");
		ctx.scale(2,2);
		document.body.addEventListener("mousemove",function(evt){
			mousePos = getMousePos(canvas,evt);
		});
		resizeCanvas();
		generatePoints(75);
		pointFun();
		setInterval(pointFun,16);
		window.addEventListener('resize', resizeCanvas, false);
	}

	//Particle constructor
	function point () {
		this.x = (Math.random()*(canvas.width+maxDist))-(maxDist/2);
		this.y = (Math.random()*(canvas.height+maxDist))-(maxDist/2);
		this.vx = (Math.random()*1)-.5;
		this.vy = (Math.random()*1)-.5;
        this.dia = 2;
		points.push(this);
	}

	//Point generator
	function generatePoints (amount) {
		var temp;
		for (var i = 0; i < amount; i++) {
			temp = new point();
		};
		console.log(points);
	}

	//Point drawer
	function draw (obj) {
		ctx.beginPath();
		ctx.fillStyle = "rgba(200,200,200,1)";
		if(obj.dia){
            ctx.arc(obj.x,obj.y,obj.dia,0,2*Math.PI);
        }else{
            ctx.arc(obj.x,obj.y,2,0,2*Math.PI);
        }
		ctx.closePath();
		ctx.fill();
	}

	//Updates point position values
	function update (obj) {
		obj.x += obj.vx;
		obj.y += obj.vy;
		if (obj.x > canvas.width+(maxDist/2)) {
			obj.x = -(maxDist/2);
		}
		else if (obj.xpos < -(maxDist/2)) {
			obj.x = canvas.width+(maxDist/2);
		}
		if (obj.y > canvas.height+(maxDist/2)) {
			obj.y = -(maxDist/2);
		}
		else if (obj.y < -(maxDist/2)) {
			obj.y = canvas.height+(maxDist/2);
		}
	}

	//
	function pointFun () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (mousePos) {
			collision(mousePos,maxDist*2);
			draw(mousePos);
		}
		for (var i = 0; i < points.length; i++) {
			collision(points[i],maxDist);
      draw(points[i]);
			update(points[i]);
		};
	}
	
	//Generate lines between nearby particles
	function collision (obj,dist) {
		var temp;
		for (var i = 0; i < points.length; i++) {
			//Don't interact with self
			if (obj !== points[i]) {
				temp = Math.sqrt(Math.pow((obj.x - points[i].x),2) + Math.pow((obj.y - points[i].y),2));
				if (temp<dist) {
					ctx.beginPath();
					ctx.moveTo(obj.x, obj.y);
					ctx.strokeStyle = "rgba(200,200,200," + Math.pow((dist-temp)/dist,5) + ")";
          ctx.moveTo(obj.x, obj.y);
					ctx.lineTo(points[i].x, points[i].y);
					ctx.closePath();
					ctx.stroke();
				};
			}
		};
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth * pixelRatio;
		canvas.height = window.innerHeight * pixelRatio;
		//Necessary on devices where pixelRatio > 1
		canvas.style.width = window.innerWidth + "px";
		canvas.style.height = window.innerHeight + "px";
		pointFun();
	}

	function getMousePos(cvs, evt1) {
		var rect = cvs.getBoundingClientRect();
		return {
			x: evt1.clientX - rect.left,
			y: evt1.clientY - rect.top
		};
	}

	//Execute when DOM has loaded
	document.addEventListener('DOMContentLoaded',init,false);
})();