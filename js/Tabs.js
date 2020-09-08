/**********
 * Tabs
 * v1.0.0
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */

class Tabs {
  constructor($tabs) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.tabs = $tabs // Add modal in DOM objects.

    this._initDOM()
    this._initParams()
    this._initialize()
  }

  /**
   * Initialize DOM
   */
  _initDOM() {
    this.$.headerItems = Array.from(
      this.$.tabs.querySelectorAll('.tabs__headerItem')
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
    for (const $headerItem of this.$.headerItems) {
      const $contentItem = this.$.tabs.querySelector(
        `.tabs__contentItem[data-item="${$headerItem.dataset.item}"]`
      )
      $headerItem.addEventListener('click', () => {
        if (this.$.tabs.querySelector('.tabs__headerItem--active'))
          this.$.tabs
            .querySelector('.tabs__headerItem--active')
            .classList.remove('tabs__headerItem--active')
        if (this.$.tabs.querySelector('.tabs__contentItem--active'))
          this.$.tabs
            .querySelector('.tabs__contentItem--active')
            .classList.remove('tabs__contentItem--active')
        $headerItem.classList.add('tabs__headerItem--active')
        $contentItem.classList.add('tabs__contentItem--active')
      })
    }
  }
}

export default Tabs
