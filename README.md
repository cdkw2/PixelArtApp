# Pixel Art Tool

 The code is an online pixel art tool created using HTML, CSS, and JavaScript. It allows users to create and save pixel art on a canvas. The tool has a pencil tool, an eraser tool, and buttons for clearing the canvas and saving the artwork.

## HTML File
The HTML file (index.html) contains the structure of the web page. It has a canvas element where the pixel art is created and several input elements and buttons for controlling the tool. The script element at the bottom of the HTML file links to the JavaScript file.

## CSS File
The CSS file (style.css) contains the styles for the web page. It has styles for the buttons, inputs, and canvas element, as well as some layout styles for positioning the buttons and canvas on the page.

## JavaScript File
The JavaScript file (script.js) has the logic for the pixel art tool. It has event listeners for the mouse and touch events, which are used for drawing on the canvas. It also has event listeners for the buttons, which are used for clearing the canvas, saving the artwork, and toggling the eraser tool. The tool uses a two-dimensional array to represent the pixels on the canvas, with each element in the array representing a single pixel.

The drawPixel() function is called whenever the user clicks or drags the mouse or touches the canvas. It gets the coordinates of the mouse or touch event and uses the fillRect() method to draw a square at that position on the canvas.

The clearCanvas() function is called when the user clicks the "Clear" button. It fills the canvas with white using the fillRect() method.

The saveCanvas() function is called when the user clicks the "Save" button. It gets the data URL of the canvas using the toDataURL() method and creates a new a element with an href attribute set to the data URL. It then simulates a click on the a element to download the image.

The toggleEraser() function is called when the user clicks the "Eraser" button. It toggles a global variable eraserOn, which is used to determine whether the user is drawing with the eraser tool or the pencil tool.


> **Overall, the code is a simple example of how to create an online drawing tool using HTML, CSS, and JavaScript. It can be modified and extended in many ways, such as adding new tools, colors, and brushes, or integrating it with a server-side backend to save and share artwork. I may or maynot update the code as it's just a side project made in 1 hour or so. But if you use this code and make something out of it, let me know!**
