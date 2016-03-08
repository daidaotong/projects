
var canvas;
var gl;

var numTimesToSubdivide = 5;
 
var index = 0;
var indexEarth=0;
var indexMoon=0;
var indexExplosion = 0;
var indexComet = 0;
var indexLine = 0;

var pointsArray = [];
var normalsArray = [];
//texture mapping
var colorsArray = [];
var texCoordsArray = [];

//cometTail Particles
var cometTailParticles = [];
var startPosition = {x:0.0,y:0.0};
var tailNumberTndex = 0;


var thetaEarth=[0,0,0];
var thetaMoonRotate=0.0;
var x;
var y;


var axis=1;
var xAxis=0;
var yAxis=1;
var zAxis=2;

var near = -100;
var far = 100;
var radius = 0.5;
var theta  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var left = -3.0;
var right = 3.0;
var ytop =3.0;
var bottom = -3.0;
var sphereColor;

var lightPosition = vec4(15.0, 15.0, 15.0, 0.0 );
var lightAmbient = vec4(0.3, 0.3, 0.3, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 1.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var materialSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );
var materialShininess = 100.0;

var ctm;
var ambientColor, diffuseColor, specularColor;

var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var  modelViewMatrixEarth;
var  modelViewMatrixMoon;
var  modelViewMatrixComet;



var eye;
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);
 
//particlesystem
var isexplosion = false;
var numParticles = 1000;
var particleAnimating = false;
function particle(){
    var p={};
    p.color = vec4(1.0,0.0,0.0,1.0);
    p.position = vec4(0.0,0.0,-0.7,1.0);
    p.speed = vec4(0.0,0.0,0.0,0.0);
    return p;
}
var particleSystem = [];
for(var i=0;i<numParticles;i++) particleSystem.push(particle());


var vertexColors = [
    vec4( 0.0, 1.0, 1.0, 1.0 ),  // black
    vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 1.0, 1.0, 1.0 ),  // cyan
    vec4( 1.0, 1.0, 1.0, 1.0 )  // white
];
//comet
var movestep = 0.003;
var originalPosition = 2;


function handleLoadedTexture(texture)
{
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, texture.image);

    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
        gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

//    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER, gl.LINEAR);
//    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
}


function isPowerOfTwo(x) {
    return (x & (x - 1)) == 0;
}


var texturen = new Array();
var texturesToLoad = 4;

function initTexture(sFilename) {
    var len = texturen.length;
    texturen[len] = gl.createTexture();
    texturen[len].image = new Image();
    texturen[len].image.onload = function() {
        handleLoadedTexture(texturen[len]);
        texturesToLoad--;

        if(texturesToLoad == 0) {
            render();
        }
    }
    texturen[len].image.src = sFilename;
}

//var moonVertexPositionBuffer;
//var moonVertexNormalBuffer;
//var moonVertexTextureCoordBuffer;
//var moonVertexIndexBuffer;
function sphere( radius1,sphereColor )
{
    var latitudeBands = 30;
    var longitudeBands = 30;
    var radiusSphere = radius1;
      var vertexPositionData = [];
    var normalData = []; 
    var textureCoordData = [];
    for(var latNumber = 0; latNumber <= latitudeBands; latNumber ++)
    {
        var theta2 = latNumber * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta2);
        var cosTheta = Math.cos(theta2);
        for(var longNumber = 0; longNumber <= longitudeBands; longNumber ++)
        {
            var phi2 = longNumber * 2 * Math.PI / longitudeBands;
            var sinPhi = Math.sin(phi2);
            var cosPhi = Math.cos(phi2);
            var x = cosPhi * sinTheta;
            var y = cosTheta;
            var z = sinPhi * sinTheta;
            var u = 1 - (longNumber / longitudeBands);
            var v = 1 - (latNumber / latitudeBands);
			
		var normals=vec4(x,y,z,0);
		normalData.push(normals);
        
		var points=vec4(radiusSphere * x,radiusSphere * y,radiusSphere * z,1);
		vertexPositionData.push(points);

            textureCoordData.push(vec2(u,v));
			
        }
    }
	//var indexData = [];
    for(var latNumber = 0; latNumber < latitudeBands; latNumber ++)
    {
        for(var longNumber = 0; longNumber < longitudeBands; longNumber ++)
        {
            var first = (latNumber * (longitudeBands + 1)) + longNumber;
            var second = first + longitudeBands + 1;
            normalsArray.push(normalData[first]);
            normalsArray.push(normalData[second]);
            normalsArray.push(normalData[first + 1]);
            normalsArray.push(normalData[second]);
            normalsArray.push(normalData[second + 1]);
            normalsArray.push(normalData[first + 1]);
			
		pointsArray.push(vertexPositionData[first]);
            pointsArray.push(vertexPositionData[second]);
            pointsArray.push(vertexPositionData[first + 1]);
            pointsArray.push(vertexPositionData[second]);
            pointsArray.push(vertexPositionData[second + 1]);
            pointsArray.push(vertexPositionData[first + 1]);
			index+=6;

            //var colors = vec4(0.0,0.0,1.0,1.0);
			var colors =sphereColor;
            colorsArray.push(colors);
            colorsArray.push(colors);
            colorsArray.push(colors);
            colorsArray.push(colors);
            colorsArray.push(colors);
            colorsArray.push(colors);

            texCoordsArray.push(textureCoordData[first]);
            texCoordsArray.push(textureCoordData[second]);
            texCoordsArray.push(textureCoordData[first + 1]);
            texCoordsArray.push(textureCoordData[second]);
            texCoordsArray.push(textureCoordData[second + 1]);
            texCoordsArray.push(textureCoordData[first + 1]);
			
        }
    }
	
}

window.onload = function init() {

    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    gl.program = program;

    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);

    
	spereColor=vec4(1.0,1.0,1.0,1.0);
	sphere(0.3,spereColor);
	indexEarth=index;
	
	index=0;
      spereColor=vec4(0.5,0.5,0.5,1.0);
	sphere( 0.1,spereColor );
	indexMoon=index;

     index = 0;
     initParticleSystem();
    indexExplosion = index;

    index = 0;
     spereColor=vec4(1.0,0.5,0.0,1.0);
    sphere(0.03,spereColor);
    indexComet = index;
	
	index=0;
	for (var j=0;j<44/7;j+=44/700){
	//thetaMoonRotate1=thetaMoonRotate1+22/700;
	index++;
	x=-0.5+2.4*Math.cos(j);
	y=1.0*Math.sin(j);
	pointsArray.push(vec4(x,y,0,1));
	normalsArray.push(vec4(0,0,1,0));
	var colors=vec4(1,1,1,1);
	colorsArray.push(colors);
      texCoordsArray.push(vec2(1,1));

	}
    indexLine = index;


//    initCometTail();
    initTest();
	

    var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation( program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal);


    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
    
    var vPosition = gl.getAttribLocation( program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation(program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor);


    var tBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

    var vTexCoord = gl.getAttribLocation( program, "vTexCoord" );
    gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vTexCoord );


    modelViewMatrixLoc = gl.getUniformLocation( program, "modelViewMatrix" );
    projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" );



    gl.uniform4fv( gl.getUniformLocation(program,
       "ambientProduct"),flatten(ambientProduct) );
    gl.uniform4fv( gl.getUniformLocation(program,
       "diffuseProduct"),flatten(diffuseProduct) );
    gl.uniform4fv( gl.getUniformLocation(program,
       "specularProduct"),flatten(specularProduct) );
    gl.uniform4fv( gl.getUniformLocation(program,
       "lightPosition"),flatten(lightPosition) );
    gl.uniform1f( gl.getUniformLocation(program,
       "shininess"),materialShininess );

    initTexture("1_earth_8k.jpg");
    initTexture("moon.jpg");

    initTexture("comet.jpg");
    initTexture("particle.jpg");
//    render();
}

function render() {
    
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    eye = vec3(radius*Math.sin(theta)*Math.cos(phi),
        radius*Math.sin(theta)*Math.sin(phi), radius*Math.cos(theta));
//    eye=vec3(3.0,3.0,7.0);

    modelViewMatrix = lookAt(eye, at , up);
    modelViewMatrixEarth= lookAt(eye, at , up);
    modelViewMatrixMoon= lookAt(eye, at , up);
    modelViewMatrixComet = lookAt(eye, at , up);

    thetaEarth[yAxis] += 2.0;
            
    modelViewMatrixEarth = mult(modelViewMatrixEarth, rotate(thetaEarth[xAxis], [1, 0, 0] ));
    modelViewMatrixEarth = mult(modelViewMatrixEarth, rotate(thetaEarth[yAxis], [0, 1, 0] ));
    modelViewMatrixEarth = mult(modelViewMatrixEarth, rotate(thetaEarth[zAxis], [0, 0, 1] ));
	
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrixEarth) );


    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture( gl.TEXTURE_2D, texturen[0]);
    gl.uniform1i(gl.getUniformLocation(gl.program, "texture"), 0);

	for( var i=0; i<indexEarth; i+=3) 
        gl.drawArrays( gl.TRIANGLES, i, 3 );

	modelViewMatrixMoon=translate( -2.7, 0, 0 ); 
	thetaMoonRotate=thetaMoonRotate+0.006;
	x=-0.5+2.4*Math.cos(thetaMoonRotate);
	y=1.0*Math.sin(thetaMoonRotate);
	
	modelViewMatrixMoon=translate( x, y, 0 ); 
	
	gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrixMoon) );


    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture( gl.TEXTURE_2D, texturen[1]);
    gl.uniform1i(gl.getUniformLocation(gl.program, "texture"), 0);

	 for( var i=indexEarth; i<indexEarth+indexMoon; i+=3) 
        gl.drawArrays( gl.TRIANGLES, i, 3 );

	
	
    projectionMatrix = ortho(left, right, bottom, ytop, near, far);
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix) );


    //particle system
    if(particleAnimating){
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix) );
        updateParticle();
        gl.drawArrays(gl.POINTS, indexEarth+indexMoon, numParticles);
    }

    //comet

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture( gl.TEXTURE_2D, texturen[2]);
    gl.uniform1i(gl.getUniformLocation(gl.program, "texture"), 0);

    modelViewMatrixComet = translate(originalPosition,originalPosition,-0.5);
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrixComet) );
    gl.drawArrays(gl.TRIANGLES, indexEarth+indexMoon+indexExplosion,indexComet);

    if(originalPosition >= 0)
    {
        originalPosition = originalPosition-movestep;
    }

    if(originalPosition<=0.23 && isexplosion == false){
        particleSystemExplosion();
    }
	
	gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix) );
      gl.drawArrays( gl.LINE_LOOP, indexEarth+indexMoon+indexExplosion+indexComet, index );

    //cometTail
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture( gl.TEXTURE_2D, texturen[3]);
    gl.uniform1i(gl.getUniformLocation(gl.program, "texture"), 0);

    modelViewMatrixComet = mult(modelViewMatrixComet,rotate(30,[0,0,1]));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrixComet));

    animate();
    drawTest();


    requestAnimFrame(render);
}

function particleSystemExplosion(){
    particleAnimating = true;
    stopParticle();
}

function initParticleSystem(){
    for ( var i = 0; i < numParticles; i++ ) {
        particleSystem[i].color = vertexColors[i % 8];
        for ( var j = 0; j < 3; j++ ) {
            particleSystem[i].position[j] = particleSystem[i].position[j]+0.01;
            particleSystem[i].speed[j] = 2.0 * Math.random() - 1.0;
        }
        particleSystem[i].position[3] = 1.0;
    }
    for(var i =0; i<numParticles; i++) {
        var normal = vec4(1.0,1.0,1.0,1.0);
        normalsArray.push(normal);
        pointsArray.push(particleSystem[i].position);
        colorsArray.push(particleSystem[i].color);
        texCoordsArray.push(vec2(1.0,1.0));
        index = index+1;
    }
}

function updateParticle(){
    for(var i =0;i<numParticles;i++){
        pointsArray[indexEarth+indexMoon+i]= add(pointsArray[indexEarth+indexMoon+i], scale(0.06, particleSystem[i].speed));
    }
    var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation(gl.program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal);

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(gl.program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation(gl.program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor);


    var tBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

    var vTexCoord = gl.getAttribLocation(gl.program, "vTexCoord" );
    gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vTexCoord );
}

function stopParticle(){
    var c = 0;
    var interval = setInterval(function(){
        c++;
        if(c>=40) {
            isexplosion = true;
            particleAnimating = false;
            clearInterval(interval);
        }
    },75);
}



//cometTail
var count = 1000;

function cometTail(x,y,angle,speed,life){
    this.position = {x:x,y:y};
    this.life = life;
    var angleInRadians = angle*Math.PI/180;
    this.velocity = {x:speed*Math.cos(angleInRadians),y:-speed*Math.sin(angleInRadians)};
    var r = Math.random();
    var g = Math.random();
    var b = Math.random();
    this.color = vec4(r,g,b,1.0);
    this.normal = vec4(1.0,1.0,1.0,1.0);
    this.textcoordinate = vec2(1.0,1.0);
}
cometTail.prototype.update = function(dt){
    this.life -= dt;
    if(this.life > 0){
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
    }
    else
    {
        this.position.x = startPosition.x;
        this.position.y = startPosition.y;
    }

}

///////////////////////////////

function coinFlip() {
    return Math.random() > .5 ? 1 : -1;
}

var lastTime = 0;
function initTest(){
     cometTailParticles.push(new cometTail(startPosition.x,startPosition.y, Math.random() * 20 * coinFlip(), Math.random() * 60 + 20, Math.random()*0.03));
     count--;
    if(count > 0){
       setTimeout(initTest,10);
    }
}
function animate()
{
    var timeNow = new Date().getTime();
    if(lastTime != 0)
    {
        var elapsed = timeNow - lastTime;

        elapsed /= 100000;
        for(var i = 0, l = cometTailParticles.length; i < l; ++i) {
            cometTailParticles[i].update(elapsed);
        }
    }
    lastTime = timeNow;
}
function drawTest(){
    var tailcount = cometTailParticles.length;
    var vertexNum = 0;
    for(var i = pointsArray.length;i>indexEarth+indexMoon+indexExplosion+indexComet+indexLine;i--){
         pointsArray.pop();
        normalsArray.pop();
        colorsArray.pop();
        texCoordsArray.pop();
    }
    for(i = 0;i<tailcount;i++){
        if(cometTailParticles[i].life > 0)
        {
            pointsArray.push(vec4(cometTailParticles[i].position.x,cometTailParticles[i].position.y,0.0,1.0));
            normalsArray.push(cometTailParticles[i].normal);
            colorsArray.push(cometTailParticles[i].color);
            texCoordsArray.push(cometTailParticles[i].textcoordinate);
            vertexNum++;
        }
    }
    var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation(gl.program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal);

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(gl.program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation(gl.program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor);


    var tBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

    var vTexCoord = gl.getAttribLocation(gl.program, "vTexCoord" );
    gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vTexCoord );

    gl.drawArrays(gl.POINTS, indexEarth+indexMoon+indexExplosion+indexComet+indexLine, vertexNum);
}