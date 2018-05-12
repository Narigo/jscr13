const shapes = [
  `
 xx
xx 
`,
  `
xx 
 xx
`,
  `
x
`
];

class Shape {
  constructor(id) {
    this.string = shapes[id].slice(1, shapes[id].length - 1);
  }

  toString() {
    return this.string;
  }
}

function collides(a, b) {
    return a.x == b.x && a.y == b.y;
}

describe("possible shapes", () => {
  it("can create an s-Shape", () => {
    const pieceA = new Shape(0);
    expect("\n" + pieceA.toString() + "\n").toBe(`
 xx
xx 
`);
  });

  it("can create a mirrored s-Shape", () => {
    const pieceA = new Shape(1);
    expect("\n" + pieceA.toString() + "\n").toBe(`
xx 
 xx
`);
  });
});

describe("collision", () => {
  it("setup works", () => {
    expect(true).toBe(true);
  });

  it("will collide when pieces have the same coordinates", () => {
    const pieceA = { x: 0, y: 0 };
    const pieceB = { x: 0, y: 0 };
    expect(collides(pieceA, pieceB)).toBe(true);
  });

  it("will not collide when pieces dont overlap", () => {
    const pieceA = { x: 0, y: 0 };
    const pieceB = { x: 0, y: 100 };
    expect(collides(pieceA, pieceB)).toBe(false);
  });

  it("two pieces collide, when they are the same", () => {
    const pieceA = { x: 0, y: 0 };
    expect(collides(pieceA, pieceA)).toBe(true);
    const pieceB = { x: 100, y: 100 };
    expect(collides(pieceB, pieceB)).toBe(true);
  });
});
