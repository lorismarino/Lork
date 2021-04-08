/**********
 * CustomRange
 * v1.1.1
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
    this.viewTotal = this.$.customRange.dataset.viewTotal
    this.step = this.$.customRange.getAttribute('step')
    this.name = this.$.customRange.getAttribute('name')
  }

  /**
   * Initialize component.
   */
  _initialize() {
    // create component
    const $createCustomRange = document.createElement('div')
    $createCustomRange.classList.add('custom-range')
    this.$.customRange.parentNode.replaceChild(
      $createCustomRange,
      this.$.customRange
    )
    this.$.customRange = $createCustomRange

    // Create input
    this.$.input = document.createElement('input')
    this.$.input.setAttribute('name', this.name)
    this.$.input.setAttribute('type', 'range')

    // Create total view.
    if (this.viewTotal) {
      this.$.totalView = document.createElement('div')
      this.$.totalView.classList.add('custom-range__total')
      this.$.totalView.innerText = (
        this.$.input.value * this.step
      ).toLocaleString()
    }

    this.$.customRange.appendChild(this.$.input)
    this.$.customRange.appendChild(this.$.totalView)

    this._events()
  }

  _events() {
    this.$.input.addEventListener('input', () => {
      this.$.totalView.innerText = (
        this.$.input.value * this.step
      ).toLocaleString()
    })

    this.$.input.addEventListener('change', () => {
      this.$.totalView.innerText = (
        this.$.input.value * this.step
      ).toLocaleString()
    })

    this.$.input.addEventListener('input', () => {
      this.$.input.style.background = `linear-gradient(to right, #4AA691 0%, #4AA691 ${this.$.input.value}%, #CCCCCC ${this.$.input.value}%, #CCCCCC 100%)`
    })
  }
}

export default CustomRange
