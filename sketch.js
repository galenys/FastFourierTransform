var mic, fft;

function setup() {
   createCanvas(window.innerWidth, window.innerHeight);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);
   var spectrum = fft.analyze();
   
   stroke(4, 205, 0); //rgb(4, 205, 0)
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height/2, 0) );
   }
   endShape();
}