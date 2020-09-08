/**********
 * CustomRange
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */

class CustomRange {
  constructor($customRange) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.customRange = $customRange // Add customRange in DOM objects.

    this._initParams()
    this._initialize()
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.cursorPress = false
    this.total = this.$.customRange.dataset.total
    this.step = this.$.customRange.dataset.step
    this.transformCursor = 0
    this.actualStep = 0
  }

  /**
   * Initialize component.
   */
  _initialize() {
    // Create input
    this.$.input = document.createElement('input')
    this.$.input.setAttribute('name', this.$.customRange.dataset.name)
    this.$.input.style.display = 'none'

    // Create background bar.
    this.$.backgroundBar = document.createElement('div')
    this.$.backgroundBar.classList.add('custom-range__bar')
    this.$.backgroundBar.classList.add('custom-range__bar--background')

    // Create plain bar.
    this.$.plainBar = document.createElement('div')
    this.$.plainBar.classList.add('custom-range__bar')
    this.$.plainBar.classList.add('custom-range__bar--plain')

    // Create cusror.
    this.$.cursor = document.createElement('div')
    this.$.cursor.classList.add('custom-range__cursor')

    this.$.customRange.appendChild(this.$.backgroundBar)
    this.$.customRange.appendChild(this.$.plainBar)
    this.$.customRange.appendChild(this.$.cursor)
    this.$.customRange.appendChild(this.$.input)

    this.$.cursor.style.transform = `translateX(-50%)`

    this.width = this.$.customRange.offsetWidth
    this.numberSteps = this.total / this.step // nombre de fois pour arriver a total
    this.ratio = this.width / this.numberSteps // pixel de largeur pour 1% du total
    this._events()
  }

  _events() {
    this.$.cursor.addEventListener('mousedown', event => {
      this.cursorPress = true
      this.actualPosition = event.clientX
    })

    document.addEventListener('mouseup', ev => {
      this.cursorPress = false
    })

    document.addEventListener('mousemove', event => {
      if (this.cursorPress) {
        if (
          event.clientX > this.actualPosition &&
          event.clientX >= (this.actualStep + 1) * this.ratio &&
          this.actualStep < this.numberSteps
        ) {
          this.transformCursor =
            (this.actualStep + 1) * this.ratio - this.$.cursor.offsetWidth / 2
          this.$.cursor.style.transform = `translateX(${this.transformCursor}px)`
          this.$.plainBar.style.transform = `scaleX(${(1 / this.numberSteps) *
            (this.actualStep + 1)})`
          this.actualPosition = event.clientX
          this.actualStep++
        } else if (
          event.clientX < this.actualPosition &&
          event.clientX <= (this.actualStep - 1) * this.ratio &&
          this.actualStep > 0
        ) {
          this.transformCursor =
            (this.actualStep - 1) * this.ratio - this.$.cursor.offsetWidth / 2
          this.$.cursor.style.transform = `translateX(${this.transformCursor}px)`
          this.$.plainBar.style.transform = `scaleX(${(1 / this.numberSteps) *
            (this.actualStep - 1)})`
          this.actualPosition = event.clientX
          this.actualStep--
        }
      }
    })

    this.$.customRange.addEventListener('click', event => {
      let clickStep = 0
      for (let step = 0; step <= this.numberSteps; step++) {
        if (event.clientX > step * this.ratio - 20) clickStep = step
      }

      this.transformCursor =
        clickStep * this.ratio - this.$.cursor.offsetWidth / 2
      this.$.cursor.style.transform = `translateX(${this.transformCursor}px)`
      this.$.plainBar.style.transform = `scaleX(${(1 / this.numberSteps) *
        clickStep})`
    })
  }
}

export default CustomRange
