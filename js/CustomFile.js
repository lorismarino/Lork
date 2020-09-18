/**********
 * CustomFile
 * v1.0.0s
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
    this.type = this.$.customFile.dataset.type
      ? this.$.customFile.dataset.type
      : 'file'
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
    if (this.type === 'files') this.$.input.setAttribute('multiple', true)
    else if (this.type === 'folder') {
      this.$.input.setAttribute('webkitdirectory', true)
      this.$.input.setAttribute('directorys', true)
    }
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
    this.$.container.addEventListener('click', () => {
      this.$.input.click()
    })

    const sizeConvert = size => {
      const bytes = size
      const sizes = ['bytes', 'kb', 'mb', 'gb', 'tb']
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      const convert = Math.round(bytes / Math.pow(1024, i), 2)
      return `${convert} ${sizes[i]}`
    }

    this.$.input.addEventListener('change', event => {
      if (this.type === 'file') {
        const file = event.target.files[0]
        this.$.label.innerText = file.name
        this.$.size.innerText = sizeConvert(file.size)
      } else {
        let files = Array.from(event.target.files)

        const $files = document.createElement('div')
        let size = 0

        files.forEach((file, index) => {
          const $file = document.createElement('div')
          $file.innerText = file.name
          $file.classList.add('custom-file__file')

          const close = document.createElement('div')
          close.classList.add('custom-file__fileClose')
          close.innerHTML = '&times;'

          close.addEventListener('click', () => {
            files.splice(index, 1)
            $files.removeChild($file)
          })

          $file.appendChild(close)
          $files.appendChild($file)
          size += file.size
        })

        this.$.size.innerText = sizeConvert(size)

        this.$.customFile.appendChild($files)
      }
    })
  }
}

export default CustomFile
