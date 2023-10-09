let table;

function preload() {
  table = loadTable("assets/Global-Inflation.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  const minValue = -100; // Define the minimum value for the data
  const maxValue = 170000; // Define the maximum value for the data

  for (let r = 0; r < table.getRowCount(); r++) {
    const countryCode = table.getString(r, "Country Code");
    const yearValue = parseFloat(table.getString(r, "1970")); // 1970 value is the lower bound of the value's current range

    const size = map(yearValue, minValue, maxValue, 10, 50);

    const x = random(0, width); // Limit x to the canvas boundaries
    const y = random(0, height); // Limit y to the canvas boundaries

    fill(random(255), random(255), random(255));
    noStroke();

    ellipse(x, y, size, size);

    textAlign(CENTER, CENTER);
    textSize(8);
    fill(255); 
    text(countryCode, x, y);
  }

  textAlign(CENTER, TOP);
  fill(255); 
  for (let year = 1970; year <= 2022; year++) {
    const x = map(year, 1970, 2022, 50, width - 50);
    text(year, x, height - 30);
  }
}

function draw() {

}
