/**********
 * Dropdown
 * v1.1.0
 */

class Dropdown {
  constructor($dropdown) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.dropdown = $dropdown // Add dropdown in DOM objects.

    this._initParams()
    this._initialize()
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.isOnMobile = this.$.dropdown.dataset.mobile // Set custom mobile is activated.
    this.name = this.$.dropdown.dataset.name
  }

  /**
   * Initialize component.
   */
  _initialize() {
    this.$.items = Array.from(
      this.$.dropdown.querySelectorAll('.dropdown__item')
    )

    // Create the content with elements.
    const $content = document.createElement('div')
    $content.classList.add('dropdown__content')

    for (const $item of this.$.items) {
      $content.appendChild($item)
    }

    // Create the button.
    this.$.choose = document.createElement('div')
    this.$.choose.classList.add('dropdown__choose')
    this.$.choose.innerHTML = this.$.dropdown.dataset.label
    this.$.choose.setAttribute('id', this.name)

    // Create wrapping container for content.
    const $container = document.createElement('div')
    $container.classList.add('dropdown__container')
    $container.appendChild($content)
    $container.setAttribute('aria-labelledby', this.name)
    this.$.dropdown.innerHTML = ''
    this.$.dropdown.appendChild(this.$.choose)
    this.$.dropdown.appendChild($container)

    this._events()
  }

  _events() {
    this.$.choose.addEventListener('click', () => {
      this.$.dropdown.classList.toggle('dropdown--open')
    })

    document.addEventListener('click', event => {
      if (!this.$.dropdown.contains(event.target)) {
        this.$.dropdown.classList.remove('dropdown--open')
      }
    })

    window.addEventListener('resize', () => {
      this._initialize()
    })
  }
}

export default Dropdown
