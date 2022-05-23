// CAN\NVAS.js plugin
// ninivert, december 2016
(function (window, document) {

    CanvasRenderingContext2D.prototype.drawBreakingText = function (str, x, y, w, lh, method) {
        // local variables and defaults
        var textSize = parseInt(this.font.replace(/\D/gi, ''));
        var textParts = [];
        var textPartsNo = 0;
        var words = [];
        var currLine = '';
        var testLine = '';
        str = str || '';
        x = x || 0;
        y = y || 0;
        w = 400
        lh = 1.5;
        method = method || 'fill';

        // manual linebreaks
        textParts = str.split('\n');
        textPartsNo = textParts.length;

        // split the words of the parts
        for (var i = 0; i < textParts.length; i++) {
            words[i] = textParts[i].split(' ');
        }

        // now that we have extracted the words
        // we reset the textParts
        textParts = [];

        // calculate recommended line breaks
        // split between the words
        for (var i = 0; i < textPartsNo; i++) {

            // clear the testline for the next manually broken line
            currLine = '';

            for (var j = 0; j < words[i].length; j++) {
                testLine = currLine + words[i][j] + ' ';

                // check if the testLine is of good width
                if (this.measureText(testLine).width > w && j > 0) {
                    textParts.push(currLine);
                    currLine = words[i][j] + ' ';
                } else {
                    currLine = testLine;
                }
            }
            // replace is to remove trailing whitespace
            textParts.push(currLine);
        }

        // render the text on the canvas
        for (var i = 0; i < textParts.length; i++) {
            if (method === 'fill') {
                this.fillText(textParts[i].replace(/((\s*\S+)*)\s*/, '$1'), x, y+(textSize*lh*i));
            } else if (method === 'stroke') {
                this.strokeText(textParts[i].replace(/((\s*\S+)*)\s*/, '$1'), x, y+(textSize*lh*i));
            } else if (method === 'none') {
                return {'textParts': textParts, 'textHeight': textSize*lh*textParts.length};
            } else {
                console.warn('drawBreakingText: ' + method + 'Text() does not exist');
                return false;
            }
        }

        return {'textParts': textParts, 'textHeight': textSize*lh*textParts.length};
    };
}) (window, document);


var canvas = document.createElement('canvas');
var canvasWrapper = document.getElementById('canvasWrapper');
canvasWrapper.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');
var padding = -450;
var textTop = '';
var textMid = '';
var textBottom = '';
var tempArray = [];
var textSizeTop = 10;
var textSizeBottom = 10;
var image = document.createElement('img');
var a = false;
var visitMe = false;


 const text = document.querySelector('#textBottom');
      const CHAR_LIMIT_PER_LINE = 28;
      const LINES_LIMIT = 30;

      text.addEventListener('keyup', (e) => {
        const lines = e.target.value.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].length < CHAR_LIMIT_PER_LINE) continue;
          lines[i] = lines[i].substring(0, CHAR_LIMIT_PER_LINE);
          lines[i + 1] = `${lines[i].substring(CHAR_LIMIT_PER_LINE + 1)}${lines[i + 1] || ''}`;
        }
        text.value = lines.slice(0, LINES_LIMIT).join('\n');
      });


 function limitLines(obj, limit) {
    var values = obj.value.replace(/\r\n/g,"\n").split("\n")
    if (values.length > limit) {
      obj.value = values.slice(0, limit).join("\n")
    }
	if(values.length > 0 ) {
	visitMe = true;
	} else {
			visitMe = false;
	}
  }
  


image.onload = function (ev) {
    // delete and recreate canvas do untaint it
    canvas.outerHTML = '';
    canvas = document.createElement('canvas');
    canvasWrapper.appendChild(canvas);
    ctx = canvas.getContext('2d');
    document.getElementById('trueSize').click();

    draw();
};




document.getElementById('textBottom').oninput = function(ev) {
    textTop = this.value;

    draw();
};

document.getElementById('textMid').oninput = function(ev) {
    textMid = this.value;

    draw();
};

document.getElementById('textBot').oninput = function(ev) {
    textBot = this.value;

    draw();
};


document.getElementById('trueSize').onchange = function(ev) {
  if (document.getElementById('trueSize').checked) {
    canvas.classList.remove('fullwidth');
  } else {
    canvas.classList.add('fullwidth');
  }
};

document.getElementById('export').onclick = function () {
    var img = canvas.toDataURL('image/jpg');
    var link = document.createElement("a");
    link.download = 'PocztaPolska-Wizytówka';
    link.href = img;
    link.click();

    win.document.write('<img style="box-shadow: 0 0 1em 0 dimgrey;" src="' + img + '"/>');
    win.document.write('<h1 style="font-family:  \'Source Sans Pro\'; font-weight: 300">Right Click > Save As<h1>');
    win.document.body.style.padding = '1em';
};


function style(font, size, align, base) {
  ctx.font = "26px gvibes";
  ctx.textAlign = align;
    ctx.rotate(+0.045 * Math.PI);
}

function style2(font, size, align, base) {
    ctx.font = "26px gvibes";
    ctx.textAlign = align;
    ctx.rotate(-0.005 * Math.PI);
ctx.fillStyle = "#fff";
}

window.change = function(val) {
    draw()
}



function draw() {
	
	
   // uppercase the text
    var top = textTop;
    var Mid = textMid;
    var Bot = textBot;
    var bottom = textBottom;

    // set appropriate canvas size
    canvas.width = image.width;
    canvas.height = image.height;

    var _textSizeTop = 18;
    var _textSizeBottom = 18;

    // draw the image
    ctx.drawImage(image, 0, 0);
    ctx.drawImage(image2, 730, 290)
    // styles
    
		var ctx1 = canvas.getContext("2d");
    ctx1.rotate(-7 * Math.PI / 180);
	ctx1.fillStyle = "#7f96ce";
	
   if (tempArray.length === 1 ) {
   ctx1.fillRect(0, 540, 430, 140);
   } else if (tempArray.length === 2) {
	   ctx1.fillRect(0, 540, 430, 180);
   } else if (tempArray.length === 3) {
	   ctx1.fillRect(0, 540, 430, 220);
   } else if (tempArray.length === 4) {
   ctx1.fillRect(0, 540, 430, 260);
   } else if (tempArray.length === 5) {
	    ctx1.fillRect(0, 540, 430, 290);
   }
	
	if ( tempArray.length !== 0 ) {
		ctx1.fillStyle = "#fff";
		ctx.font = "bold 26px gvibes";
		ctx.fillText("U nas ubezpieczysz:", 20, 580);
	}



	
    // draw top text
    style2('gvibes', _textSizeTop, 'start', 'bottom', '#fff');
    ctx.drawBreakingText(bottom, 20, 640, null, 1, 'fill');
    // draw top text
    style('gvibes', _textSizeTop, 'start', 'bottom', 'rgba(255,255,255,255)');


	if(visitMe) {
	 var ctx11 = canvas.getContext('2d');
	ctx11.lineWidth = 2;
	ctx11.beginPath();
	ctx11.setLineDash([8,3]);
    ctx11.fill();
    ctx11.stroke();
	ctx.font = "bold 34px Arial";
    ctx11.strokeStyle = 'red';
    ctx11.fillStyle = "red";
	ctx.drawBreakingText(top, 160, 344, null, 1, 'fill');
	}

    if(visitMe) {
        var ctx11 = canvas.getContext('2d');
       ctx11.lineWidth = 2;
       ctx11.beginPath();
       ctx11.setLineDash([8,3]);
       ctx11.fill();
       ctx11.stroke();
       ctx.font = "bold 34px Arial";
       ctx11.strokeStyle = 'red';
       ctx11.fillStyle = "red";
       ctx.drawBreakingText(Mid, 160, 412, null, 1, 'fill');
       }

       if(visitMe) {
        var ctx11 = canvas.getContext('2d');
       ctx11.lineWidth = 2;
       ctx11.beginPath();
       ctx11.setLineDash([8,3]);
       ctx11.fill();
       ctx11.stroke();
       ctx.font = "bold 30px Arial";
       ctx11.strokeStyle = 'red';
       ctx11.fillStyle = "red";
       ctx.drawBreakingText(Bot, 160, 480, null, 1, 'fill');
       }
}


var image2 = new Image()
image2.onload = () => {
    ctx.drawImage(image2, 499, 153)
}



image.crossOrigin = "Anonymous";

image.src = 'img/mainIMG.jpg';

$(".gambar").attr("src", "https://user.gadjian.com/static/images/personnel_boy.png");
function readFile(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
		
            $('.upload-demo').addClass('ready');
            $('#cropImagePop').modal('show');
            rawImg = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        swal("Sorry - you're browser doesn't support the FileReader API");
    }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var img = new Image();      
                    img.src = e.target.result;

                    img.onload = function () {
                        var w = this.width;
                        var h = this.height;
					      
					 if(w > 400 & h > 590 ) {	 
					 
						rawImg = e.target.result;
						$('.upload-demo').addClass('ready');
						$('#cropImagePop').modal('show');
						
						
					 } else {
					   alert("Zdjecie musi mieć wymiar min 400x590");
					   
					 }
						
						
					}
	   
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$uploadCrop = $('#upload-demo').croppie({
    viewport: {
        width: 232,
        height: 318
    },
    enableResize: true,
    enableOrientation: true,
    mouseWheelZoom: 'ctrl'
});
$('#cropImagePop').on('shown.bs.modal', function(){
    // alert('Shown pop');
    $uploadCrop.croppie('bind', {
        url: rawImg
    }).then(function(){
        console.log('jQuery bind complete');
    });
});


$('#cropImageBtn').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'base64',
        format: 'png',
        size: {width: 232, height: 318}
    }).then(function (resp) {
        image2.src = resp;
        $('#cropImagePop').modal('hide');
    });
});
// End upload preview image
