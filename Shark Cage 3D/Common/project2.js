

var canvas;
var gl;

var NumVertices  = 36;

var initial=0;
var maxNumTriangles = 1000;  
var maxNumVertices  = 3 * maxNumTriangles;
var index=0;
var cindex=0;
var offsetDraw=0;
var modelView;
var NumSharks=0;
var MoveSharks=0;

/* 
var randomY=new Array(0,90,180, 270);
var randomYF=new Array(90,180, 270);
var randomYB=new Array(90,0, 270);
var randomYL=new Array(90,0, 270); */

var lastLeft=Date.now();
var lastRight=Date.now();
var lastUp=Date.now();
var lastDown=Date.now();
var lastFront=Date.now();
var lastBack=Date.now();

var token1=1;



//6 up 5 down 4 left 3 right 2 front 1 back
/* var randomU=new Array(1,2,3,4,5);
var randomD=new Array(1,2,3,4,6);
var randomL=new Array(1,2,3,5,6);
var randomR=new Array(1,2,4,5,6);
var randomF=new Array(1,3,4,5,6);
var randomB=new Array(2,3,4,5,6); */
var b;
var modelViewShark;
var modelViewShadow;

var thetaprevious=[0,0,0];
var thetashark=[0,0,0];
var thetashark1=[0,0,0];
var shoot=0;



var normalsArray = [];
var lightPosition = vec4(0.7, 0.7,0.7, 0.0 );
var lightAmbient;
var lightDiffuse;
var lightSpecular;

var materialAmbient;
var materialDiffuse;
var materialSpecular;
var materialShininess = 100.0;
var ambientColor, diffuseColor, specularColor;

	
var ambientProductLoc;
var diffuseProductLoc;
var specularProductLoc;
	



var nRows=10;
var nColumns=10;

var nRows1=10;
var nColumns1=10;


var nRows2=10;
var nColumns2=10;


var nRows3=10;
var nColumns3=10;

var nRows4=10;
var nColumns4=10;

var nRows5=10;
var nColumns5=10;

var nRows6=10;
var nColumns6=10;

var nMesh1=10;
var nMesh2=10;
var nMesh3=10;
var nMesh4=10;
var nMesh5=10;
var nMesh6=10;

var nMesh11=10;
var nMesh22=10;
var nMesh33=10;
var nMesh44=10;
var nMesh55=10;
var nMesh66=10;


var vertices = [
    vec4(-0.55, -0.55,  0.55, 1.0),
    vec4(-0.55,  0.55,  0.55, 1.0),
    vec4(0.55,  0.55,  0.55, 1.0),
    vec4(0.55, -0.55,  0.55, 1.0),
    vec4(-0.55, -0.55, -0.55, 1.0),
    vec4(-0.55,  0.55, -0.55, 1.0),
    vec4(0.55,  0.55, -0.55, 1.0),
    vec4( 0.55, -0.55, -0.55, 1.0) 
];

var vertexColors1 = [
    vec4( 0.0, 0.0, 0.0, 0.7  ),  // black
    vec4( 1.0, 0.0, 0.0, 0.7  ),  // red
    vec4( 1.0, 1.0, 0.0, 0.7 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 0.7  ),  // green
    vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
    vec4( 1.0, 0.0, 1.0, 0.7  ),  // magenta
    vec4( 0.0, 1.0, 1.0, 0.7  ),  // cyan
    vec4( 1.0, 1.0, 1.0, 0.7  ),  // white
];
var vertexColors = [
 vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
  vec4( 0.0, 0.0, 1.0, 0.7  ),  // blue
   vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
    vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
   vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue 
  vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
   vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
  vec4( 0.0, 0.0, 1.0, 0.7 ),  // blue
];


	
var sharks1=[
//middle
vec4(-0.25,0.15,-0.53,1.0),
vec4(0.25,-0.15,-0.53,1.0),
vec4(0.25,0.15,-0.53,1.0),

vec4(-0.25,0.15,-0.53,1.0),
vec4(0.25,-0.15,-0.53,1.0),
vec4(-0.25,-0.15,-0.53,1.0),


//left
vec4(-0.25,0.15,-0.53,1.0),
vec4(-0.25,-0.15,-0.53,1.0),
vec4(-0.45,0.0,-0.53,1.0),

//right
vec4(0.25,-0.15,-0.53,1.0),
vec4(0.25,0.15,-0.53,1.0),
vec4(0.45,0.0,-0.53,1.0),

//up
vec4(-0.25,0.15,-0.53,1.0),
vec4(0.25,0.15,-0.53,1.0),
vec4(0.0,0.25,-0.53,1.0),
];

var sharkscolor1=[
    vec4( 0.5, 0.5, 0.5, 0.9  ), 
  vec4( 0.5, 0.5, 0.5, 0.9  ),
   vec4( 0.5, 0.5, 0.5, 0.9  ),
  vec4( 0.5, 0.5, 0.5, 0.9  ),
   vec4( 0.5, 0.5, 0.5, 0.9  ),
  vec4( 0.5, 0.5, 0.5, 0.9  ),
  
  //left
   vec4( 0.5, 0.5, 0.5, 0.9  ),
   vec4( 0.5, 0.5, 0.5, 0.9  ), 
  vec4( 0.5, 0.5, 0.5, 0.9  ),
  //right
   vec4( 0.5, 0.5, 0.5, 0.9  ),
    vec4( 0.5, 0.5, 0.5, 0.9  ),
  vec4( 0.5, 0.5, 0.5, 0.9  ),
  //up
  vec4( 0.5, 0.5, 0.5, 0.9  ),
   vec4( 0.5, 0.5, 0.5, 0.9  ),
 vec4( 0.5, 0.5, 0.5, 0.9  ),
]

var sharks2=[
vec4(-0.15,0.1,-0.52,1.0),
vec4(-0.1,0.1,-0.52,1.0),
vec4(-0.125,0.15,-0.52,1.0),

vec4(0.15,0.1,-0.52,1.0),
vec4(0.1,0.1,-0.52,1.0),
vec4(0.125,0.15,-0.52,1.0),
];

var sharkscolor2=[
    vec4( 0.0, 1.0, 0.0, 0.7  ), 
  vec4( 0.0, 1.0, 0.0, 0.7  ), 
   vec4( 0.0, 1.0, 0.0, 0.7  ), 
   
    vec4( 0.0, 1.0, 0.0, 0.7  ), 
  vec4( 0.0, 1.0, 0.0, 0.7  ), 
   vec4( 0.0, 1.0, 0.0, 0.7  ), 
]

var sharks3=[
vec4(-0.15,-0.1,-0.52,1.0),
vec4(-0.1,0.0,-0.52,1.0),
vec4(-0.05,-0.1,-0.52,1.0),

vec4(-0.1,0.0,-0.52,1.0),
vec4(-0.05,-0.1,-0.52,1.0),
vec4(0.0,0.0,-0.52,1.0),

vec4(-0.05,-0.1,-0.52,1.0),
vec4(0.0,0.0,-0.52,1.0),
vec4(0.05,-0.1,-0.52,1.0),

vec4(0.0,0.0,-0.52,1.0),
vec4(0.05,-0.1,-0.52,1.0),
vec4(0.1,0.0,-0.52,1.0),

vec4(0.05,-0.1,-0.52,1.0),
vec4(0.1,0.0,-0.52,1.0),
vec4(0.15,-0.1,-0.52,1.0),
];

var sharkscolor3=[
    vec4( 0.9, 0.5, 0.1, 0.9  ),
  vec4( 0.9, 0.5, 0.1, 0.9  ),
   vec4( 0.9, 0.5, 0.1, 0.9  ), 
   
   vec4( 0.9, 0.5, 0.5, 0.9  ),
  vec4( 0.9, 0.5, 0.5, 0.9  ),
   vec4( 0.9, 0.5, 0.5, 0.9  ), 
   
   vec4( 0.9, 0.5, 0.1, 0.9  ),
  vec4( 0.9, 0.5, 0.1, 0.9  ),
   vec4( 0.9, 0.5, 0.1, 0.9  ), 
   
   vec4( 0.9, 0.5, 0.5, 0.9  ),
  vec4( 0.9, 0.5, 0.5, 0.9  ),
   vec4( 0.9, 0.5, 0.5, 0.9  ), 
   
    vec4( 0.9, 0.5, 0.1, 0.9  ),
  vec4( 0.9, 0.5, 0.1, 0.9  ),
   vec4( 0.9, 0.5, 0.1, 0.9  ), 
   
]
	

var point=[
	vec4(0.0,0.0,-0.49,1.0),
	vec4(0.03,0.0,-0.49,1.0),
	vec4(0.015,0.015,-0.49,1.0),
	vec4(-0.015,0.015,-0.49,1.0),
	vec4(-0.03,0.0,-0.49,1.0),
	vec4(-0.015,-0.015,-0.49,1.0),
	vec4(0.015,-0.015,-0.49,1.0),
	vec4(0.03,0.0,-0.49,1.0),
]
var pointColor=[
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
	vec4( 1.0, 0.0, 0.0, 0.7  ),
]

var shadow=[
vec4(-0.53,0.53,0.53,1.0),
vec4(-0.53,-0.53,0.53,1.0),
vec4(0.53,-0.53,0.53,1.0),
vec4(-0.53,0.53,0.53,1.0),
vec4(0.53,0.53,0.53,1.0),
vec4(0.53,-0.53,0.53,1.0),
]

var shadowColor=[
	vec4( 0.0, 0.0, 0.0, 1.0  ),
	vec4( 0.0, 0.0, 0.0, 1.0  ),
	vec4( 0.0, 0.0, 0.0, 1.0  ),
	vec4( 0.0, 0.0, 0.0, 1.0  ),
	vec4( 0.0, 0.0, 0.0, 1.0  ),
	vec4( 0.0, 0.0, 0.0, 1.0  ),
]

var normalsArray = [];
var pointsArray = [];
var colorsArray = [];
	


var pointsArray1 = [];
var colorsArray1 = [];

var pointsArray2 = [];
var colorsArray2 = [];

var pointsArray3 = [];
var colorsArray3 = [];

var pointsArray4 = [];
var colorsArray4 = [];

var pointsArray5 = [];
var colorsArray5 = [];

var pointsArray6 = [];
var colorsArray6 = [];	
	

var near = 0.01;
var far = 3.0;
/* var radius = 4.0;
var theta  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;
 */
var  fovy = 75.0;  // Field-of-view in Y direction angle (in degrees)
var  aspect = 1.0;       // Viewport aspect ratio



var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = 1;
var theta =[0, 0, 0];

var thetaLoc;
var flag = true;


 var startX=0;
 var endX=0;
 var startY=0;
 var endY=0;




var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;



 
 var startX=0;
 var endX=0;
 var startY=0;
 var endY=0;

 
 


function quad(a, b, c, d) {
	
	var t1 = subtract(vertices[b], vertices[a]);
     var t2 = subtract(vertices[c], vertices[b]);
     var normal = cross(t1, t2);
     var normal = vec3(normal);
     normal = normalize(normal);
	
     pointsArray.push(vertices[a]); 
     colorsArray.push(vertexColors[a]); 
	 normalsArray.push(normal);
	 
     pointsArray.push(vertices[b]); 
     colorsArray.push(vertexColors[a]); 
	 normalsArray.push(normal);
	 
     pointsArray.push(vertices[c]); 
     colorsArray.push(vertexColors[a]);    
	normalsArray.push(normal);
	 
     pointsArray.push(vertices[a]); 
     colorsArray.push(vertexColors[a]); 
	 normalsArray.push(normal);
	 
     pointsArray.push(vertices[c]); 
     colorsArray.push(vertexColors[a]); 
	 normalsArray.push(normal);
	 
     pointsArray.push(vertices[d]); 
     colorsArray.push(vertexColors[a]);  
	 normalsArray.push(normal);
	 
}

function colorCube()
{
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );
}




	
	

	function init(){
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    
    aspect =  canvas.width/canvas.height;
    
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);
    
    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
	
	
	
	
	
	 normalsArray = [];
     pointsArray = [];
	colorsArray = [];
	


	pointsArray1 = [];
	colorsArray1 = [];

	pointsArray2 = [];
	colorsArray2 = [];

	pointsArray3 = [];
	colorsArray3 = [];

	pointsArray4 = [];
	colorsArray4 = [];

	pointsArray5 = [];
	colorsArray5 = [];

	pointsArray6 = [];
	colorsArray6 = [];	
		
	
	//front side mesh
	for(var i=0; i<nMesh1+1; i++) for(var j=0; j<nMesh1+1;j++) {
        pointsArray1.push(vec4(i/nMesh1-0.5, j/nMesh1-0.5,-0.5, 1.0));
		 colorsArray1.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		 normalsArray.push(vec3( 0.0, 0.0, 1.0 ));
    }
    for(var j=0; j<nMesh1+1; j++) for(var i=0; i<nMesh1+1;i++) {
        pointsArray1.push(vec4(i/nMesh1-0.5, j/nMesh1-0.5,-0.5, 1.0));
		 colorsArray1.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		 normalsArray.push(vec3( 0.0, 0.0, 1.0 ));
    }

//back side mesh
	for(var i=0; i<nMesh2+1; i++) for(var j=0; j<nMesh2+1;j++) {
        pointsArray2.push(vec4(i/nMesh2-0.5, j/nMesh2-0.5, 0.5, 1.0));
		colorsArray2.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 0.0, 0.0, -1.0 ));
    }
    for(var j=0; j<nMesh2+1; j++) for(var i=0; i<nMesh2+1;i++) {
        pointsArray2.push(vec4(i/nMesh2-0.5, j/nMesh2-0.5, 0.5, 1.0));
		colorsArray2.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 0.0, 0.0, -1.0 ));
    }
	
	

//left side mesh
	for(var i=0; i<nMesh3+1; i++) for(var j=0; j<nMesh3+1;j++) {
        pointsArray3.push(vec4(-0.5, i/nMesh3-0.5,j/nMesh3-0.5, 1.0));
		colorsArray3.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 1.0, 0.0, 0.0 ));
    }
    for(var j=0; j<nMesh3+1; j++) for(var i=0; i<nMesh3+1;i++) {
        pointsArray3.push(vec4(-0.5, i/nMesh3-0.5,j/nMesh3-0.5, 1.0));
		colorsArray3.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 1.0, 0.0, 0.0 ));
    }
		
	

//right side mesh
	for(var i=0; i<nMesh4+1; i++) for(var j=0; j<nMesh4+1;j++) {
        pointsArray4.push(vec4(0.5, i/nMesh4-0.5,j/nMesh4-0.5, 1.0));
		colorsArray4.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( -1.0, 0.0, 0.0 ));
    }
    for(var j=0; j<nMesh4+1; j++) for(var i=0; i<nMesh4+1;i++) {
        pointsArray4.push(vec4(0.5, i/nMesh4-0.5,j/nMesh4-0.5, 1.0));
		colorsArray4.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( -1.0, 0.0, 0.0 ));
    }
		
	

//up side mesh
	for(var i=0; i<nMesh5+1; i++) for(var j=0; j<nMesh5+1;j++) {
        pointsArray5.push(vec4(i/nMesh5-0.5, 0.5, j/nMesh5-0.5, 1.0));
		colorsArray5.push(vec4( 1.0, 0.0, 0.0, 1.0 ));
		normalsArray.push(vec3( 0.0, -1.0, 0.0 ));
    }
    for(var j=0; j<nMesh5+1; j++) for(var i=0; i<nMesh5+1;i++) {
        pointsArray5.push(vec4(i/nMesh5-0.5, 0.5 ,j/nMesh5-0.5, 1.0));
		colorsArray5.push(vec4( 1.0, 0.0, 0.0, 1.0 ));
		normalsArray.push(vec3( 0.0, -1.0, 0.0 ));
    }
		

//bottom side mesh
	for(var i=0; i<nMesh6+1; i++) for(var j=0; j<nMesh6+1;j++) {
        pointsArray6.push(vec4(i/nMesh6-0.5, -0.5 ,j/nMesh6-0.5, 1.0));
		colorsArray6.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 0.0, 1.0, 0.0 ));
    }
    for(var j=0; j<nMesh6+1; j++) for(var i=0; i<nMesh6+1;i++) {
        pointsArray6.push(vec4(i/nMesh6-0.5, -0.5 ,j/nMesh6-0.5, 1.0));
		colorsArray6.push(vec4( 1.0, 0.0, 0.0, 1.0  ));
		normalsArray.push(vec3( 0.0, 1.0, 0.0 ));
    }
		for(var i=0;i<49;i++)
		normalsArray.push(vec3( 0.0, 0.0, 1.0 ));
		normalsArray.push(vec3( 0.0, 0.0, -1.0 ));
	
	
	
    colorCube();

	
	
	
	
	var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );
    
    var vNormal = gl.getAttribLocation( program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal );
	
	
	
	
	
	
	
	var cbuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,cbuffer);
	gl.bufferData(gl.ARRAY_BUFFER,16*maxNumVertices,gl.STATIC_DRAW);
	 
	 vColor = gl.getAttribLocation( program, "vColor");

	gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vColor); 
	
	
	
    var vbuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vbuffer );
    gl.bufferData( gl.ARRAY_BUFFER,16*maxNumVertices, gl.STATIC_DRAW );
	
     var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
	
	
	
	
	
	
	index=0;
	cindex=0;
	
	gl.bindBuffer( gl.ARRAY_BUFFER, vbuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray1));
	
	index+=pointsArray1.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray2));
	
	index+=pointsArray2.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray3));
	
	index+=pointsArray3.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray4));
	
	index+=pointsArray4.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray5));
	
	index+=pointsArray5.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray6));
	
	index+=pointsArray6.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(pointsArray));
	
	index+=36*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(sharks1));
	index+=15*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(sharks2));
	index+=6*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(sharks3));
	index+=15*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(point));
	index+=8*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, index, flatten(shadow));
	
	
	
	gl.bindBuffer( gl.ARRAY_BUFFER, cbuffer);
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray1));
	
	cindex+=colorsArray1.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray2));
	
	cindex+=colorsArray2.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray3));
	
	cindex+=colorsArray3.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray4));
	
	cindex+=colorsArray4.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray5));
	
	cindex+=colorsArray5.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray6));
	
	cindex+=colorsArray6.length*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(colorsArray));
	
	cindex+=36*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(sharkscolor1));
	
	cindex+=15*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(sharkscolor2));
	
	cindex+=6*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(sharkscolor3));
	
	cindex+=15*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(pointColor));
	
	cindex+=8*16;
	gl.bufferSubData(gl.ARRAY_BUFFER, cindex, flatten(shadowColor));
	
	
	ambientProduct=vec4(0.0,0.0,0.0,1.0); diffuseProduct=vec4(0.0,0.0,0.0,1.0);specularProduct=vec4(0.0,0.0,0.0,1.0);
	 
	
	ambientProductLoc=gl.getUniformLocation(program, "ambientProduct");
	diffuseProductLoc=gl.getUniformLocation( program, "diffuseProduct" );
	specularProductLoc=gl.getUniformLocation( program, "specularProduct" );
	
	
		
	gl.uniform4fv(ambientProductLoc,
       flatten(ambientProduct));
    gl.uniform4fv(diffuseProductLoc,
       flatten(diffuseProduct) );
    gl.uniform4fv(specularProductLoc, 
       flatten(specularProduct) );	
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), 
       flatten(lightPosition) );
       
    gl.uniform1f(gl.getUniformLocation(program, 
       "shininess"),materialShininess);
		

	
	modelViewMatrixLoc = gl.getUniformLocation( program, "modelViewMatrix" );
    projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" ); 
	
 
    
     projectionMatrix = perspective(fovy, aspect, near, far);

	if(initial==0){
	
	document.getElementById("ButtonLE").onclick = function(){lightAmbient = vec4(0.5, 0.5, 1.0, 1.0 );
															lightDiffuse = vec4( 0.5, 1.0, 0.5, 1.0 );
															 lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

															materialAmbient = vec4( 0.0, 1.0, 1.0, 1.0 );
															 materialDiffuse = vec4( 1.0, 1.0, 1.0, 1.0);
															 materialSpecular = vec4( 1.0, 1.0, 1.0, 1.0 ); 
															 
															 ambientProduct = mult(lightAmbient, materialAmbient);
																diffuseProduct = mult(lightDiffuse, materialDiffuse);
																specularProduct = mult(lightSpecular, materialSpecular);
															};
	document.getElementById("ButtonLD").onclick = function(){ ambientProduct=vec4(0.0,0.0,0.0,1.0); diffuseProduct=vec4(0.0,0.0,0.0,1.0);specularProduct=vec4(0.0,0.0,0.0,1.0);    };
	
	
	
	window.addEventListener("keydown", function() {
		switch (event.keyCode) {
			case 37: // ’left’ key
				if(theta[xAxis]==0){
				axis = yAxis;
				endY=endY-90;
				}
				break;
			case 39: // ’right’ key
				if(theta[xAxis]==0){
				axis = yAxis;
				endY=endY+90;
				}
				break;
			case 38: // ’up’ key
				if(theta[xAxis]>-90){
				axis = xAxis;
				endX=endX-90;
				}
				break;
			case 40: // ’down’ key
				if(theta[xAxis]<90){
				axis = xAxis;
				endX=endX+90;
				}
				break;
			case 65://'A' key
				shoot=1;
				break;
			case 83://'S' key
				shoot=0;
				break;
					
	}
	});
	render();
	initial++;
	}
	
	
  
  
  
  
  
    
}
window.onload=function(){
	init();
}

var render = function(){

    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	 theta[axis]=animate(axis,theta[axis]);
	 if(NumSharks==30){
		 alert("Congradulations,You Win");
	 }
	 
	 if(nMesh1==0||nMesh2==0||nMesh3==0||nMesh4==0||nMesh5==0||nMesh6==0){
		 MoveSharks=1;
		 alert("You Lose");
	 }
	
	 
	 
	if(thetashark[xAxis]==0&&theta[xAxis]==0){
		thetashark1[yAxis]=compareTheta(thetashark[yAxis],-theta[yAxis]);
		if(thetashark1[yAxis]==0&&shoot==1)
	{	NumSharks++;
		b=newNumber();
		switch(b){
			case 0:
				//thetashark=[0,90,0];
				//theta[yAxis]=thetashark[yAxis];
				thetashark[yAxis]=thetashark[yAxis]+90;
				break;
			case 1:
				//thetashark=[0,180,0];
				//theta[yAxis]=thetashark[yAxis];
				thetashark[yAxis]=thetashark[yAxis]+180;
				break;
			case 2:
				//thetashark=[0,270,0];
				//theta[yAxis]=thetashark[yAxis];
				thetashark[yAxis]=thetashark[yAxis]+270;
				break;
			case 3:
				thetashark[xAxis]=90;
				//thetashark[yAxis]=thetashark[yAxis];
				break;
			case 4:
				thetashark[xAxis]=-90;
				//thetashark[yAxis]=thetashark[yAxis];
				break;
	}}
	
	}
	
	if((thetashark[xAxis]==90||thetashark[xAxis]==-90)&&theta!=0){
		thetashark1[xAxis]=compareTheta(thetashark[xAxis],-theta[xAxis]);
		if(thetashark1[xAxis]==0&&shoot==1)
	{	NumSharks++;
		b=newNumber();
		switch(b){
			case 0:
				
				thetashark[xAxis]=0;
				thetashark[yAxis]=theta[yAxis]+90;
				break;
			case 1:
				thetashark[xAxis]=0;
				thetashark[yAxis]=theta[yAxis]+180;
				break;
			case 2:
				thetashark[xAxis]=0;
				thetashark[yAxis]=theta[yAxis]+270;
				break;
			case 3:
				thetashark[xAxis]=0;
				thetashark[yAxis]=theta[yAxis];
				break;
			case 4:
				thetashark[xAxis]=-thetashark[xAxis];
				//thetashark[yAxis]=theta[yAxis];
				break;
	}
		}
	
	}
	
	if((thetashark[yAxis]%360==-90||thetashark[yAxis]%360==270)&&thetashark[xAxis]==0){
			//alert(thetashark);
			if(token1!=1){
			lastRight=Date.now();
			token1=1;
		}
			nMesh44=wallRightDecrease(nMesh44);
			if(nMesh44<nMesh4){
				nMesh4=nMesh44;
				init();
			}
			
			
		}
	
	if((thetashark[yAxis]%360==90||thetashark[yAxis]%360==-270)&&thetashark[xAxis]==0){
			//alert(thetashark);
			if(token1!=2){
			lastLeft=Date.now();
			token1=2;
		}
			nMesh33=wallLeftDecrease(nMesh33);
			if(nMesh33<nMesh3){
				nMesh3=nMesh33;
				init();
			}
			
		}
	
	if((thetashark[yAxis]%360==-180||thetashark[yAxis]%360==180)&&thetashark[xAxis]==0){
			//alert(thetashark);
			if(token1!=3){
			lastBack=Date.now();
			token1=3;
		}
			nMesh22=wallBackDecrease(nMesh22);
			if(nMesh22<nMesh2){
				nMesh2=nMesh22;
				init();
			}
			
		}
	
	if(thetashark[yAxis]%360==0&&thetashark[xAxis]==0){
			//alert(thetashark);
			if(token1!=4){
			lastFront=Date.now();
			token1=4;
		}
			nMesh11=wallFrontDecrease(nMesh11);
			if(nMesh11<nMesh1){
				nMesh1=nMesh11;
				init();
			}
			
			
		}
	
	if(thetashark[xAxis]==90){
			//alert(thetashark);
			if(token1!=5){
			lastUp=Date.now();
			token1=5;
		}
			nMesh55=wallUpDecrease(nMesh55);
			if(nMesh55<nMesh5){
				nMesh5=nMesh55;
				init();
			}
			
			
		}
	
	if(thetashark[xAxis]==-90){
			//alert(thetashark);
			if(token1!=6){
			lastDown=Date.now();
			token1=6;
		}
			nMesh66=wallDownDecrease(nMesh66);
			if(nMesh66<nMesh6){
				nMesh6=nMesh66;
				init();
			}
			
		}
	
		document.getElementById('sharks').innerHTML=30-NumSharks;
		document.getElementById('txt1').innerHTML=Math.floor(nMesh5*10)+"%";
		document.getElementById('txt2').innerHTML=Math.floor(nMesh6*10)+"%";
		document.getElementById('txt3').innerHTML=Math.floor(nMesh3*10)+"%";
		document.getElementById('txt4').innerHTML=Math.floor(nMesh4*10)+"%";
		document.getElementById('txt5').innerHTML=Math.floor(nMesh1*10)+"%";
		document.getElementById('txt6').innerHTML=Math.floor(nMesh2*10)+"%";

	const eye=vec3(0.0, 0.0, 0.48);
const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);

//modelView = mat4();
modelView =lookAt(eye, at , up);
      
  
    modelView = mult(modelView, rotate(theta[xAxis], [1, 0, 0] ));
    modelView = mult(modelView, rotate(theta[yAxis], [0, 1, 0] ));
    modelView = mult(modelView, rotate(theta[zAxis], [0, 0, 1] ));
    
   

    
	
	gl.uniform4fv(ambientProductLoc, flatten(ambientProduct));
	gl.uniform4fv(diffuseProductLoc, flatten(diffuseProduct));
	gl.uniform4fv(specularProductLoc, flatten(specularProduct));
	
	gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelView) );
    gl.uniformMatrix4fv( projectionMatrixLoc, false, flatten(projectionMatrix) );
	
  
     var offsetDraw=0;    
//front
	for(var i=0; i<nMesh1+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh1+1), nMesh1+1 );   
	offsetDraw+=pointsArray1.length/2;
    for(var i=0; i<nMesh1+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh1+1)+offsetDraw, nMesh1+1 );
	//alert(pointsArray1.length);
	
//back
	offsetDraw+=pointsArray1.length/2;
	for(var i=0; i<nMesh2+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh2+1)+offsetDraw, nMesh2+1 );    
	offsetDraw+=pointsArray2.length/2;
    for(var i=0; i<nMesh2+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh2+1)+offsetDraw, nMesh2+1 );
	//alert(pointsArray2.length);
	
//left
	offsetDraw+=pointsArray2.length/2;
	for(var i=0; i<nMesh3+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh3+1)+offsetDraw, nMesh3+1 );   
		offsetDraw+=pointsArray3.length/2;
    for(var i=0; i<nMesh3+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh3+1)+offsetDraw, nMesh3+1 );
	//alert(pointsArray3.length);
	
//right
offsetDraw+=pointsArray3.length/2;
	for(var i=0; i<nMesh4+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh4+1)+offsetDraw, nMesh4+1 ); 
		offsetDraw+=pointsArray4.length/2;
    for(var i=0; i<nMesh4+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh4+1)+offsetDraw, nMesh4+1 );
	//alert(pointsArray4.length);
	
//up	
offsetDraw+=pointsArray4.length/2;
	for(var i=0; i<nMesh5+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh5+1)+offsetDraw, nMesh5+1 );  
		offsetDraw+=pointsArray5.length/2;
    for(var i=0; i<nMesh5+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh5+1)+offsetDraw, nMesh5+1 );
	//alert(pointsArray5.length);
	
//bottom	
offsetDraw+=pointsArray5.length/2;
	for(var i=0; i<nMesh6+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh6+1)+offsetDraw, nMesh6+1 );  
		offsetDraw+=pointsArray6.length/2;
    for(var i=0; i<nMesh6+1; i++) gl.drawArrays( gl.LINE_STRIP, i*(nMesh6+1)+offsetDraw, nMesh6+1 );

	offsetDraw+=pointsArray6.length/2;
	gl.drawArrays( gl.TRIANGLES, offsetDraw, NumVertices );
	
	
	/* modelViewShark=modelView;
	 modelViewShark = mult(modelViewShark, rotate(thetashark[xAxis], [1, 0, 0] ));
    modelViewShark = mult(modelViewShark, rotate(thetashark[yAxis], [0, 1, 0] ));
    modelViewShark = mult(modelViewShark, rotate(thetashark[zAxis], [0, 0, 1] )); */
	
	/* modelView = mult(modelView, rotate(thetashark[xAxis], [1, 0, 0] ));
    modelView = mult(modelView, rotate(thetashark[yAxis], [0, 1, 0] ));
    modelView = mult(modelView, rotate(thetashark[zAxis], [0, 0, 1] )); */
	modelViewShark=modelView;
	 modelViewShark = mult(modelViewShark, rotate(thetashark[yAxis], [0, 1, 0] ));
	 modelViewShark = mult(modelViewShark, rotate(thetashark[xAxis], [1, 0, 0] ));
   
    modelViewShark = mult(modelViewShark, rotate(thetashark[zAxis], [0, 0, 1] ));
	 
	  if(MoveSharks==1){
		 modelViewShark = translate( 0, 0, 0.20 );
	 }
	 
	 
	gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelViewShark) );
	
	offsetDraw+=36;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	
	
	
	if(shoot==1){
		var modelview1=lookAt(eye, at , up);
	gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelview1) );
	gl.drawArrays( gl.TRIANGLE_FAN, offsetDraw, 8 ); 
	}
	
	modelViewShadow=modelViewShark;
	gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelViewShadow) );
	
	offsetDraw+=8;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	offsetDraw+=3;
	gl.drawArrays( gl.TRIANGLE_STRIP, offsetDraw, 3 ); 
	
	
    requestAnimFrame(render);
}

function animate(axis,angle){
	if(axis==yAxis){
		if(startY>endY){
		angle-=1;
		if(angle<endY){
		angle=endY;
	startY=endY;}}
		if(startY<endY){
		angle+=1;
		if(angle>endY){
		angle=endY;
	startY=endY;}}
		
	}
	if(axis==xAxis){
		if(startX>endX){
		angle-=1;
		
		if(angle<endX){
		angle=endX;
	startX=endX;}
		}
		if(startX<endX){
		angle+=1;
		
		if(angle>endX){
		angle=endX;
	startX=endX;}
		
		}
			
	}
	
	return angle;
	
}


function newNumber(){
	var b = Math.floor(Math.random() * 5);
	return b;
	
}	
function compareTheta(theta1,theta2){
	var i=(theta1%360-theta2%360)%360;
	if(i<0)
		i=(i+360)%360;
	
	return i;
}



function wallRightDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastRight){
			wall=wall-2;
			lastRight=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	
function wallLeftDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastLeft){
			wall=wall-2;
			lastLeft=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	

function wallFrontDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastFront){
			wall=wall-2;
			lastFront=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	

function wallBackDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastBack){
			wall=wall-2;
			lastBack=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	



function wallUpDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastUp){
			wall=wall-2;
			lastUp=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	
function wallDownDecrease(wall){
	if(wall>1){
		var time=Date.now();
		if(time>7000+lastDown){
			wall=wall-2;
			lastDown=Date.now();
			//init();
		}
		return wall;
	}
	
	
}	

