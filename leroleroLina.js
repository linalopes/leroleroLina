var lines, markov, data;
var lero;

function preload() {
  data = loadStrings('data/lina.txt');
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('prompt', 16);
  textAlign(CENTER);

  lines = ["clique para (re)gerar!"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data.join(' '));
  

  drawText();
}


function drawText() {
  background(221, 50, 36);
  fill(240, 238, 243);
  text(lines.join(' '), width/4, height/4, width/2, height/2);
  lero = lines.join('');
}

function mouseClicked() {
  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}

function keyPressed() {
  if (key == 's') {
    // creates a file called 'newFile.txt'
    let writer = createWriter('lerolero.txt');
    // write 'Hello world!'' to the file
    writer.write(lero);
    // close the PrintWriter and save the file
    writer.close();
  }
}
