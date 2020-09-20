/**********
 * Header
 * v1.0.0
 */

class Header {
  constructor() {
    this.$ = {} // Initialize object of DOM elements.

    this._initDOM()
    this._initParams()
    this._initialize()
  }

  /**
   * Initialize DOM
   */
  _initDOM() {
    this.$.header = document.querySelector('.header') // Add header in DOM objects.
    this.$.close = this.$.header.querySelector('.header__toggle--close')
    this.$.open = this.$.header.querySelector('.header__toggle--open')
    this.$.items = Array.from(
      this.$.header.querySelectorAll('.header__menuItem')
    )
  }

  /**
   * Initialize params
   */
  _initParams() {}

  /**
   * Initialize component.
   */
  _initialize() {
    this._events()
  }

  _events() {
    if (!window.matchMedia('(min-width: 1200px)').matches) {
      this.$.open.addEventListener('click', () => {
        this.$.header.classList.add('header--open')
      })

      this.$.close.addEventListener('click', () => {
        this.$.header.classList.remove('header--open')
      })

      document.addEventListener('click', event => {
        if (!this.$.header.contains(event.target))
          this.$.header.classList.remove('header--open')
      })

      for (const item of this.$.items) {
        const sub = item.querySelector('.header__menuItemSub')
        if (sub) {
          const button = item.querySelector('.header__menuItemButton')
          const height = sub.offsetHeight
          sub.style.height = 0
          sub.style.transition = 'height 0.3s ease-in-out'

          button.addEventListener('click', () => {
            if (sub.classList.contains('header__menuItemSub--open')) {
              sub.style.height = 0
              sub.classList.remove('header__menuItemSub--open')
            } else {
              sub.style.height = `${height}px`
              sub.classList.add('header__menuItemSub--open')
            }
          })
        }
      }
    }
  }
}

export default Header
