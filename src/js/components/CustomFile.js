/**********
 * CustomFile
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */

class CustomFile {
  constructor($customFile) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.customFile = $customFile // Add custom-select in DOM objects.

    this._initParams()
    this._initialize()
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.isButton = this.$.customFile.dataset.button
    this.isButtonPosition = this.$.customFile.dataset.buttonpos
      ? this.$.customFile.dataset.buttonpos
      : 'right'
    this.isSize = this.$.customFile.dataset.size
  }

  /**
   * Initialize component.
   */
  _initialize() {
    if (this.isButton) {
      this.$.button = document.createElement('button')
      this.$.button.classList.add('custom-file__button')
      this.$.button.setAttribute('type', 'button')
      this.$.button.innerText = this.isButton
    }

    this.$.customFile.innerHTML = ''

    if (this.isSize) {
      this.$.container = document.createElement('div')
      this.$.container.classList.add('custom-file__container')
    }

    if (this.isButton && this.isButtonPosition === 'left') {
      this.isSize
        ? this.$.container.appendChild(this.$.button)
        : this.$.customFile.appendChild(this.$.button)
    }

    // Create label
    this.$.label = document.createElement('p')
    this.$.label.innerText = this.$.customFile.dataset.label
    this.$.label.classList.add('custom-file__label')
    this.isSize
      ? this.$.container.appendChild(this.$.label)
      : this.$.customFile.appendChild(this.$.label)

    // Create input
    this.$.input = document.createElement('input')
    this.$.input.setAttribute('name', this.$.customFile.dataset.name)
    this.$.input.setAttribute('type', 'file')
    this.$.input.style.display = 'none'
    this.isSize
      ? this.$.container.appendChild(this.$.input)
      : this.$.customFile.appendChild(this.$.input)

    if (this.isButton && this.isButtonPosition === 'right') {
      this.isSize
        ? this.$.container.appendChild(this.$.button)
        : this.$.customFile.appendChild(this.$.button)
    }

    if (this.isSize) {
      this.$.customFile.appendChild(this.$.container)

      // Create size info
      this.$.size = document.createElement('p')
      this.$.size.classList.add('custom-file__size')
      this.$.size.innerText = '0 mb'
      this.$.customFile.appendChild(this.$.size)
    }

    this._events()
  }

  _events() {
    this.$.customFile.addEventListener('click', () => {
      this.$.input.click()
    })

    this.$.input.addEventListener('change', event => {
      console.log('te')
      const file = event.target.files[0]
      this.$.label.innerText = file.name
      const bytes = file.size
      const sizes = ['bytes', 'kb', 'mb', 'gb', 'tb']
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      const convert = Math.round(bytes / Math.pow(1024, i), 2)
      this.$.size.innerText = `${convert} ${sizes[i]}`
    })
  }
}

export default CustomFile

const $customFiles = Array.from(document.querySelectorAll('.custom-file'))
for (const $customFile of $customFiles) {
  new CustomFile($customFile)
}
