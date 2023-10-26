class Circle {
  constructor(color, text, bgColor) {
    this.color = color,
    this.text = text,
    this.bgColor = bgColor
  }

  buildCircle() {
    const logo = 
    `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

</svg>`;

return logo;
  }
}

class Triangle {
  constructor(color, text, bgColor) {
    this.color = color,
    this.text = text,
    this.bgColor = bgColor
  }

  buildTriangle() {
    const logo =
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <polygon points="150,10 240,190 60,190" fill=${this.bgColor} />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

    </svg>`

    return logo;
  }
}

class Square {
  constructor(color, text, bgColor) {
    this.color = color,
    this.text = text,
    this.bgColor = bgColor
  }

  buildSquare() {
    const logo =
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="60" y="10" width="180" height="180" fill=${this.bgColor}/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>

    </svg>`

    return logo;
  }
}


module.exports = { Circle, Triangle, Square }