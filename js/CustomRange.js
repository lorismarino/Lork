/**********
 * CustomRange
 * v1.0.0
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
      console.log('ch')
      this.$.totalView.innerText = (
        this.$.input.value * this.step
      ).toLocaleString()
    })
  }
}

export default CustomRange
