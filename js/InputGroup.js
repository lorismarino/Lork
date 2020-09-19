/**********
 * InputGroup
 * v1.0.0
 */

class InputGroup {
  constructor($inputGroup) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.inputGroup = $inputGroup // Add inputGroup in DOM objects.

    this._initialize()
  }

  /**
   * Initialize component.
   */
  _initialize() {
    const content = this.$.inputGroup.innerHTML
    const $content = document.createElement('div')
    $content.classList.add('input-group__content')
    $content.innerHTML = content
    this.$.input = $content.querySelector('input')
    this.$.inputGroup.innerHTML = ''
    this.$.inputGroup.appendChild($content)
    this._events()
  }

  _events() {
    this.$.input.addEventListener('focus', () => {
      this.$.inputGroup.classList.add('input-group--active')
    })

    this.$.input.addEventListener('blur', () => {
      if (!this.$.input.value)
        this.$.inputGroup.classList.remove('input-group--active')
    })
  }
}

export default InputGroup
