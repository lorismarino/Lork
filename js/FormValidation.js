/**********
 * FormValidation
 * v1.0.0
 */

class FormValidation {
  constructor($form) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.form = $form // Add form in DOM objects.

    this._initParams()
    this._initDOM()
    this._initialize()
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.noInstant = !!this.$.form.dataset.noinstant
    this.noSubmit = !!this.$.form.dataset.nosubmit
    this.formError = false
  }

  /**
   * Initialize DOM
   */
  _initDOM() {
    this.$.inputGroups = Array.from(
      this.$.form.querySelectorAll('.input-group')
    )
  }

  /**
   * Initialize component.
   */
  _initialize() {
    this._events()
  }

  _events() {
    for (const $inputGroup of Array.from(
      this.$.form.querySelectorAll('.input-group')
    )) {
      const $input = $inputGroup.querySelector('input')

      $input.addEventListener('blur', () => {
        if (!this.noInstant) {
          this.validate($inputGroup)
        }
      })
    }

    if (!this.noSubmit) {
      this.$.form.addEventListener('submit', event => {
        this.formError = false
        for (const $inputGroup of Array.from(
          this.$.form.querySelectorAll('.input-group')
        )) {
          if (!this.validate($inputGroup)) this.formError = true
        }

        if (this.formError) event.preventDefault()
      })
    }
  }

  validate($inputGroup) {
    const $input = $inputGroup.querySelector('input')
    const value = $input.value
    const inputType = $input.getAttribute('type')

    // rules
    const rules = {}
    if ($inputGroup.dataset.required)
      rules.required = $inputGroup.dataset.required
    if ($inputGroup.dataset.minlength)
      rules.minLength = parseInt($inputGroup.dataset.minlength)
    if ($inputGroup.dataset.maxlength)
      rules.maxLength = parseInt($inputGroup.dataset.maxlength)
    if ($inputGroup.dataset.requiredmessage)
      rules.requiredMessage = $inputGroup.dataset.requiredmessage
    if ($inputGroup.dataset.errorminlength)
      rules.errorMinLength = $inputGroup.dataset.errorminlength
    if ($inputGroup.dataset.errormaxlength)
      rules.errorMaxLength = $inputGroup.dataset.errormaxlength
    if ($inputGroup.dataset.errormessage)
      rules.errorMessage = $inputGroup.dataset.errormessage

    if (inputType === 'text') {
      if (rules.required && !value) {
        this.setError($inputGroup, rules.requiredMessage || 'required')
        return false
      } else if (rules.minLength && value.length < rules.minLength) {
        this.setError($inputGroup, rules.errorMinLength || 'too low')
        return false
      } else if (rules.maxLength && value.length > rules.maxLength) {
        this.setError($inputGroup, rules.errorMaxLength || 'too big')
        return false
      } else {
        this.clearError($inputGroup)
        return true
      }
    } else if (inputType === 'number') {
      if (rules.required && !value) {
        this.setError($inputGroup, rules.requiredMessage || 'required')
        return false
      } else if (rules.minLength && value < rules.minLength) {
        this.setError($inputGroup, rules.errorMinLength || 'too low')
        return false
      } else if (rules.maxLength && value > rules.maxLength) {
        this.setError($inputGroup, rules.errorMaxLength || 'too big')
        return false
      } else {
        this.clearError($inputGroup)
        return true
      }
    } else if (inputType === 'email') {
      if (rules.required && !value) {
        this.setError($inputGroup, rules.requiredMessage || 'required')
        return false
      } else if (
        !value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.setError($inputGroup, rules.errorMessage || 'not a valid email')
        return false
      } else {
        this.clearError($inputGroup)
        return true
      }
    } else if (inputType === 'tel') {
      if (rules.required && !value) {
        this.setError($inputGroup, rules.requiredMessage || 'required')
        return false
      } else if (
        !value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
      ) {
        this.setError($inputGroup, rules.errorMessage || 'not a valid email')
        return false
      } else {
        this.clearError($inputGroup)
        return true
      }
    }
  }

  setError($inputGroup, error) {
    let $error = $inputGroup.querySelector('.input-group__error')
    if ($error) {
      $error.innerText = error
    } else {
      $error = document.createElement('p')
      $error.classList.add('input-group__error')
      $error.innerText = error
      $inputGroup.appendChild($error)
    }
  }

  clearError($inputGroup) {
    const $error = $inputGroup.querySelector('.input-group__error')
    if ($error) {
      $inputGroup.removeChild($error)
    }
  }
}

export default FormValidation
