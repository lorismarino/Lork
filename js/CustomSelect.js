/**********
 * CustomSelect
 * v1.0.0
 */

class CustomSelect {
  constructor($customSelect) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.customSelect = $customSelect // Add custom-select in DOM objects.

    this.initParams()
    this.initialize()
  }

  /**
   * Initialize params
   */
  initParams() {
    this.name = this.$.customSelect.dataset.name
    this.isFilters = this.$.customSelect.dataset.filters // Set filters is activated.
    this.isOnMobile = this.$.customSelect.dataset.mobile // Set custom mobile is activated.
    this.virtualLabel = this.$.customSelect.dataset.label // Set activated label.
    this.items = JSON.parse(this.$.customSelect.dataset.items) // Create JSON object with items.
  }

  /**
   * Initialize component.
   */
  initialize() {
    if (!this.isOnMobile && window.matchMedia('(max-width: 991px)').matches) {
      // Create the select element.
      const $select = document.createElement('select')
      $select.setAttribute('name', this.name)

      // Create the default select option.
      const $defaultOption = document.createElement('option')
      $defaultOption.setAttribute('value', '')
      $defaultOption.innerText = this.$.customSelect.dataset.label
      $select.appendChild($defaultOption)

      // Create select options.
      this.items.forEach(item => {
        const $option = document.createElement('option')
        $option.setAttribute('value', item.value)
        $option.innerText = item.label
        $select.appendChild($option)
      })

      this.$.customSelect.innerHTML = ''
      this.$.customSelect.appendChild($select)
    } else {
      if (this.isFilters) {
        this.$.customSelect.classList.add('custom-select--filters')
      }

      // Create the content with elements.
      const $content = document.createElement('div')
      $content.classList.add('custom-select__content')
      this.items.forEach(item => {
        const $item = document.createElement('div')
        $item.dataset.label = item.label
        $item.dataset.value = item.value
        $item.innerText = item.label
        $item.classList.add('custom-select__item')
        $content.appendChild($item)
      })

      // Create the button.
      this.$.choose = document.createElement('div')
      this.$.choose.setAttribute('id', this.name)
      this.$.choose.classList.add('custom-select__choose')
      if (!this.isFilters) {
        this.$.choose.innerHTML = this.$.customSelect.dataset.label
      }

      // Create wrapping container for content.
      const $container = document.createElement('div')
      $container.classList.add('custom-select__container')
      $container.setAttribute('aria-labelledby', this.name)
      $container.appendChild($content)
      this.$.customSelect.innerHTML = ''
      this.$.customSelect.appendChild(this.$.choose)
      this.$.customSelect.appendChild($container)

      // Create input for select value.
      this.$.input = document.createElement('input')
      this.$.input.setAttribute('name', this.name)
      this.$.input.style.display = 'none'
      this.$.customSelect.appendChild(this.$.input)

      this.$.items = Array.from(
        this.$.customSelect.querySelectorAll('.custom-select__item')
      ) // Get all items in array.

      // Create the filter input.
      if (this.isFilters) {
        this.$.filter = document.createElement('input')
        this.$.filter.value = this.$.customSelect.dataset.label
        this.$.choose.appendChild(this.$.filter)
      }
    }

    this.events()
  }

  events() {
    if (
      (!this.isOnMobile && window.matchMedia('(min-width: 992px)').matches) ||
      this.isOnMobile
    ) {
      this.$.choose.addEventListener('click', () => {
        if (this.$.customSelect.classList.contains('custom-select--open')) {
          this.$.customSelect.classList.remove('custom-select--open')
          this.$.customSelect.classList.remove('custom-select--finish')
        } else {
          this.$.customSelect.classList.add('custom-select--open')
          setTimeout(() => {
            this.$.customSelect.classList.toggle('custom-select--finish')
          }, 200)
        }
      })

      if (this.isFilters) {
        this.$.filter.addEventListener('click', event => {
          event.stopPropagation()
          this.$.customSelect.classList.add('custom-select--open')

          setTimeout(() => {
            this.$.customSelect.classList.add('custom-select--finish')
          }, 200)
        })
      }

      this.$.items.forEach($item => {
        $item.addEventListener('click', () => {
          this.changeValue($item)
        })
      })

      if (this.isFilters) {
        this.$.filter.addEventListener('click', () => {
          this.$.filter.value = ''
          this.$.filter.setAttribute('placeholder', this.virtualLabel)
          this.$.items.forEach($item => {
            const $newItem = $item
            $newItem.style.display = 'block'
          })
        })
        this.$.filter.addEventListener('input', () => {
          this.$.items.forEach($item => {
            if ($item.innerText.toLowerCase().includes(this.$.filter.value)) {
              const $newItem = $item
              $newItem.style.display = 'block'
            } else {
              const $newItem = $item
              $newItem.style.display = 'none'
            }
          })
        })
      }

      document.addEventListener('click', event => {
        if (!this.$.customSelect.contains(event.target)) {
          this.$.customSelect.classList.remove('custom-select--open')

          this.$.customSelect.classList.remove('custom-select--finish')

          if (this.isFilters) {
            if (this.$.filter.value === '') {
              this.$.input.value = ''
              this.$.filter.value = this.virtualLabel
            } else {
              this.$.filter.value = this.virtualLabel
            }
          }
        }
      })
    }

    window.addEventListener('resize', () => {
      this.initialize()
    })
  }

  changeValue($item) {
    if (this.isFilters) {
      this.$.filter.value = $item.dataset.label
    } else {
      this.$.choose.innerText = $item.dataset.label
    }

    this.$.input.value = $item.dataset.value
    this.virtualLabel = $item.dataset.label
    this.$.customSelect.classList.remove('custom-select--open')
    this.$.customSelect.classList.remove('custom-select--finish')
  }
}

export default CustomSelect
