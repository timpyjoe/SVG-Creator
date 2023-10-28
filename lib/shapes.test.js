const { Circle, Triangle, Square } = require("./shapes")


describe("Shapes", () => {
  describe("Circle", () => {
    it("should create a circle svg that displays the characteristics I entered", () => {
      const color = "green";
      const text = "TIM";
      const bgColor = "Black";

      const circle = new Circle(color, text, bgColor);
      expect(circle.build()).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${bgColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

</svg>`);
    })
  }),
  describe("Triangle", () => {
    it("should create a triangle svg that displays the characteristics I entered", () => {
      const color = "green";
      const text = "TIM";
      const bgColor = "Black";

      const circle = new Triangle(color, text, bgColor);
      expect(circle.build()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,10 240,190 60,190" fill=${bgColor} />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

    </svg>`);
    })
  }),
  describe("Square", () => {
    it("should create a square svg that displays the characteristics I entered", () => {
      const color = "green";
      const text = "TIM";
      const bgColor = "Black";

      const circle = new Square(color, text, bgColor);
      expect(circle.build()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="60" y="10" width="180" height="180" fill=${bgColor}/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

    </svg>`);
    })
  })
})