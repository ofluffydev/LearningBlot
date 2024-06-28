// Simple pentagon based off of example in tutorial

const width = 125;
const height = 125;

setDocDimensions(width, height);

const shape = (n, size) => {
  const t = new bt.Turtle()
  t.jump([(width-size)/2, ((height-size)/2)-height*0.06])
  for (let i = 0; i < n; i++) t.forward(size).right(-360/n)
  return t.lines()
}

drawLines(shape(5, 40))