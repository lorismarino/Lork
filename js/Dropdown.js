/**********
 * Dropdown
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
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
    this.type = this.$.dropdown.dataset.type
      ? this.$.dropdown.dataset.type
      : 'link' // Set type of dropdown.
    this.items =
      this.type === 'link' ? JSON.parse(this.$.dropdown.dataset.items) : null // Create JSON object with items.
  }

  /**
   * Initialize component.
   */
  _initialize() {
    if (
      !this.isOnMobile &&
      this.type === 'link' &&
      window.matchMedia('(max-width: 991px)').matches
    ) {
      // Create the select element.
      this.$.select = document.createElement('select')

      // Create the default select option.
      const $option = document.createElement('option')
      $option.setAttribute('value', '')
      $option.innerText = this.$.dropdown.dataset.label
      this.$.select.appendChild($option)

      // Create select options.
      for (const item of this.items) {
        const $option = document.createElement('option')
        $option.setAttribute('value', item.link)
        $option.innerText = item.label
        this.$.select.appendChild($option)
      }

      this.$.dropdown.innerHTML = ''
      this.$.dropdown.appendChild(this.$.select)
    } else {
      if (this.type === 'content')
        this.$.items = Array.from(
          this.$.dropdown.querySelectorAll('.dropdown__item')
        )

      // Create the content with elements.
      const $content = document.createElement('div')
      $content.classList.add('dropdown__content')

      if (this.type === 'link') {
        for (const item of this.items) {
          const $item = document.createElement('a')
          $item.innerText = item.label
          $item.setAttribute('href', item.link)

          $item.classList.add('dropdown__item')
          $content.appendChild($item)
        }
      } else if (this.type === 'content') {
        for (const $item of this.$.items) {
          $content.appendChild($item)
        }
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

      this.$.items = Array.from(
        this.$.dropdown.querySelectorAll('.dropdown__item')
      ) // Get all items in array.
    }

    this._events()
  }

  _events() {
    if (
      (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches) ||
      this.isOnMobile ||
      (!this.isOnMobile && this.type === 'content')
    ) {
      this.$.choose.addEventListener('click', () => {
        this.$.dropdown.classList.toggle('dropdown--open')
      })

      document.addEventListener('click', event => {
        if (!this.$.dropdown.contains(event.target)) {
          this.$.dropdown.classList.remove('dropdown--open')
        }
      })
    } else if (
      !this.isOnMobile &&
      this.type === 'link' &&
      window.matchMedia('(max-width: 991px)').matches
    ) {
      this.$.select.addEventListener('change', () => {
        window.location = this.$.select.value
      })
    }

    window.addEventListener('resize', () => {
      this._initialize()
    })
  }
}

export default Dropdown
