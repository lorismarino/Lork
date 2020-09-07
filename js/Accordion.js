/**********
 * Accordion
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */

class Accordion {
  constructor($accordion) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.accordion = $accordion // Add accordion in DOM objects.

    this._initDOM()
    this._initParams()
    this._initialize()
  }

  /**
   * Initialize DOM
   */
  _initDOM() {
    this.$.items = Array.from(
      this.$.accordion.querySelectorAll('.accordion__item')
    )
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.items = []
    this.isMultiple = this.$.accordion.dataset.multiple // Set is multiple item open.
  }

  /**
   * Initialize component.
   */
  _initialize() {
    for (const $item of this.$.items) {
      if ($item.classList.contains('accordion__item--open')) {
        const $content = $item.querySelector('.accordion__itemContainer')
        const contentHeight = $content.offsetHeight
        this.items.push({ item: $item, height: contentHeight })
      } else {
        const $content = $item.querySelector('.accordion__itemContainer')
        const contentHeight = $content.offsetHeight
        $content.style.height = 0
        this.items.push({ item: $item, height: contentHeight })
      }
    }
    this._events()
  }

  _events() {
    for (const { item, height } of this.items) {
      const $button = item.querySelector('.accordion__itemButton')
      const $content = item.querySelector('.accordion__itemContainer')
      $button.addEventListener('click', event => {
        if (!this.isMultiple) {
          for (const { item } of this.items) {
            if (!item.contains(event.target)) {
              if (item.classList.contains('accordion__item--open')) {
                item.querySelector('.accordion__itemContainer').style.height = 0
                item.classList.remove('accordion__item--open')
              }
            }
          }
        }

        if (item.classList.contains('accordion__item--open')) {
          $content.style.height = 0
          item.classList.remove('accordion__item--open')
        } else {
          $content.style.height = `${height}px`
          item.classList.add('accordion__item--open')
        }
      })
    }
  }
}

export default Accordion
