/**
 * Switch
 */

class Switch {
  constructor($switch) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.switch = $switch // Add switch in DOM objects.

    this.initParams()
    this.initialize()
  }

  /**
   * Initialize params
   */
  initParams() {
    this.active = this.$.switch.checked
    this.name = this.$.switch.getAttribute('name')
  }

  /**
   * Initialize component.
   */
  initialize() {
    // create component
    const $createSwitch = document.createElement('div')
    $createSwitch.setAttribute('tabindex', '0')
    $createSwitch.classList.add('switch')
    if (this.active) $createSwitch.classList.add('switch--active')
    this.$.switch.parentNode.replaceChild($createSwitch, this.$.switch)
    this.$.switch = $createSwitch

    // create input
    this.$.input = document.createElement('input')
    this.$.input.setAttribute('name', this.name)
    this.$.input.setAttribute('type', 'checkbox')
    if (this.active) this.$.input.checked = true
    this.$.input.style.display = 'none'
    this.$.switch.appendChild(this.$.input)

    this.events()
  }

  events() {
    this.$.switch.addEventListener('click', event => {
      event.stopPropagation()
      this.$.switch.classList.toggle('switch--active')
      this.$.input.checked = !this.$.input.checked
    })
  }
}

export default Switch
