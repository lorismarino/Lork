/**
 * Switch
 */

class Switch {
  constructor($switch) {
    this.$ = {} // initialize object of DOM elements
    this.$.switch = $switch // add switch in DOM objects

    this.initParams()
    this.initialize()
  }

  /**
   * initialize params
   */
  initParams() {
    this.active = this.$.switch.checked
    this.label = this.$.switch.dataset.label
    this.name = this.$.switch.getAttribute('name')
  }

  /**
   * initialize component
   */
  initialize() {
    // create component
    const $createSwitch = document.createElement('div')
    $createSwitch.setAttribute('tabindex', '0')
    $createSwitch.classList.add('switch')
    if (this.active) $createSwitch.classList.add('switch--active')
    this.$.switch.parentNode.replaceChild($createSwitch, this.$.switch)
    this.$.switch = $createSwitch

    // create container
    const $container = document.createElement('div')
    $container.classList.add('switch__container')

    // create input
    this.$.input = document.createElement('input')
    this.$.input.setAttribute('name', this.name)
    this.$.input.setAttribute('type', 'checkbox')
    if (this.active) this.$.input.checked = true
    this.$.input.style.display = 'none'
    $container.appendChild(this.$.input)

    this.$.switch.appendChild($container)

    // create label
    if (this.label) {
      const $label = document.createElement('label')
      $label.setAttribute('for', this.name)
      $label.classList.add('switch__label')
      $label.innerText = this.label
      this.$.switch.appendChild($label)
    }

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
