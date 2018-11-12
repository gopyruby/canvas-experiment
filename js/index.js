function findCanvasMidpoint() {
  var cDomElem = document.getElementById("drawingBoard");
  var ctx = cDomElem.getContext("2d");

  /*
   * 0-----------
   * |          |
   * |          |
   * ------------
   */
   
   return {
       'x': cDomElem.width / 2,
       'y': cDomElem.height / 2
   }
}

function drawCircle() {
  var cDomElem = document.getElementById("drawingBoard");
  var ctx = cDomElem.getContext("2d");

}

function drawLine(settings, colour, lineType) {
  /*
   * Could validate settings using something like JSONSchema
   *
   * {
   *   'coords': {
   *     'x': int,
   *     'y': int,
   *   },
   *   'atZero': bool
   * }
   */

  var cDomElem = document.getElementById("drawingBoard");
  var ctx = cDomElem.getContext("2d");

  // TODO: Learn Elm
  // Cool lib: https://github.com/Elm-Canvas/elm-canvas
  // moveTo x: Number, y: Number
  // result: move cursor to x, y pos
  ctx.moveTo(settings.x, settings.y);
  ctx.strokeStyle = colour;

  // TODO: Refactor to use prototypical inheritance
  zeroPoints = [
    {
      'x': 0,
      'y': 0
    },
    // {
    //   'x': settings.x,
    //   'y': settings.y
    // }
  ];

  if(lineType == "diagonal") {
    console.assert(settings.atZero, "Currently a diagonal line is only supported when the line is at a zero point");
    console.assert(zeroPoints.indexOf(settings.coords), "If you are seeing this message, validate your settings are correct. It is possible the zero point you have provided is not yet supported.")
    // lineTo x: Number, y: Number
    // result: set path to draw line on screen from cursor to end pos
    ctx.lineTo(cDomElem.width, cDomElem.height);
  }

  if (lineType == "horizontal") {
    console.assert(settings.x != settings.y, "A line can not exist if it is just a point.")
    ctx.lineTo(cDomElem.width, settings.y + 1);
  }

  ctx.stroke();
}

function drawImagePlaceholder() {
  var cDomElem = document.getElementById("drawingBoard");
  var ctx = cDomElem.getContext("2d");

  ctx.moveTo(0, 0);
  ctx.lineTo(cDomElem.width, cDomElem.height);
  ctx.moveTo(cDomElem.width, 0);
  ctx.lineTo(0, cDomElem.height);
  ctx.stroke();
}

drawLine({
  'x': 15,
  'y': 15,
  'atZero': true
}, '#f00000', 'horizontal');

// drawLine(findCanvasMidpoint(), '#f00000', 'horizontal');

// drawImagePlaceholder();
