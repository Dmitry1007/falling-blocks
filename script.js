var canvas  = document.querySelector('canvas')
var context = canvas.getContext('2d')

var block = new Block(10, 10, canvas, context)

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  block.draw().moveDown()
  requestAnimationFrame(gameLoop)
})

function Block(x, y, canvas, context) {
  this.x = x
  this.y = y
  this.canvas  = canvas
  this.context = context
  this.height  = 50
  this.width   = 50
}

Block.prototype.moveDown = function () {
  if (this.canvas && this.canvas.height - this.height > this.y) {
    this.y++
  }
  return this
}

Block.prototype.draw = function () {
  if (this.context) {
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }
  return this
}
