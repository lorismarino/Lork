/**********
 * Carousel
 * Made by Loris Marino <loris.mro@gmail.com>
 * https://github.com/LorisMarino
 * https://lorismarino.fr
 */

import { TweenLite, Power4 } from 'gsap'

class Carousel {
  constructor($carousel) {
    this.$ = {} // Initialize object of DOM elements.
    this.$.carousel = $carousel // Add carousel in DOM objects.

    this._initDOM()
    this._initParams()
    this._initialize()
  }

  /**
   * Initialize DOM
   */
  _initDOM() {
    this.$.navigation = {
      left: this.$.carousel.querySelector('.carousel__button--left'),
      right: this.$.carousel.querySelector('.carousel__button--right')
    }
    this.$.items = this.$.carousel.querySelector('.carousel__items')
  }

  /**
   * Initialize params
   */
  _initParams() {
    this.isTouchDevice = !!(
      'ontouchstart' in window || navigator.maxTouchPoints
    )
    this.type = this.$.carousel.dataset.type
      ? this.$.carousel.dataset.type
      : 'normal'
    this.activeItem = 1
    this.pagination = this.$.carousel.dataset.pagination
    this.drag = this.$.carousel.dataset.drag
    this.auto = this.$.carousel.dataset.auto
    this.width = this.$.carousel.offsetWidth
    this.numberItems = Array.from(
      this.$.carousel.querySelectorAll('.carousel__item')
    ).length
  }

  /**
   * Initialize component.
   */
  _initialize() {
    if (this.pagination) {
      const $pagination = document.createElement('div')
      $pagination.classList.add('carousel__pagination')

      for (let i = 0; i < this.numberItems; i++) {
        const $item = document.createElement('button')
        $item.setAttribute('type', 'button')
        $item.classList.add('carousel__paginationBullet')
        $item.dataset.item = i + 1

        if (i === 0) {
          $item.classList.add('carousel__paginationBullet--active')
        }

        $pagination.appendChild($item)
      }
      this.$.carousel.appendChild($pagination)
    }

    if (this.auto) {
      setInterval(() => {
        this._moveRight()
      }, parseInt(this.auto))
    }

    this._events()
  }

  _events() {
    this.$.navigation.left.addEventListener('click', () => {
      this._moveLeft()
    })

    this.$.navigation.right.addEventListener('click', () => {
      this._moveRight()
    })

    for (const $bullet of Array.from(
      this.$.carousel.querySelectorAll('.carousel__paginationBullet')
    )) {
      $bullet.addEventListener('click', () => {
        this.$.carousel
          .querySelector('.carousel__paginationBullet--active')
          .classList.remove('carousel__paginationBullet--active')
        $bullet.classList.add('carousel__paginationBullet--active')
        this._moveItems($bullet.dataset.item - 1)
        this.activeItem = parseInt($bullet.dataset.item)
      })
    }

    if (this.drag) {
      if (this.isTouchDevice) {
        this.$.carousel.addEventListener('touchstart', event => {
          this.actualPosition = event.touches[0].clientX
          this.pressItems = true
          this.translate = 0
          this.dragCretaedItem = false
        })

        this.$.carousel.addEventListener('touchmove', event => {
          this._dragItems(event.changedTouches[0].clientX)
        })

        document.addEventListener('touchend', event => {
          setTimeout(() => {
            this.pressItems = false

            if (event.changedTouches[0] > this.actualPosition) this._moveLeft()
            else if (event.changedTouches[0] < this.actualPosition)
              this._moveRight()

            if (
              this.type === 'infinite' &&
              this.activeItem === this.numberItems &&
              Array.from(this.$.items.querySelectorAll('.carousel__item'))
                .length > this.numberItems
            ) {
              this.$.items.removeChild(
                this.$.items.querySelector('.carousel__item')
              )
            } else if (
              this.type === 'infinite' &&
              this.activeItem === 1 &&
              Array.from(this.$.items.querySelectorAll('.carousel__item'))
                .length > this.numberItems
            ) {
              this.$.items.removeChild(
                this.$.items.querySelector('.carousel__item:last-child')
              )
            }
          }, 100)
        })
      } else {
        this.$.items.addEventListener('mousedown', event => {
          this.actualPosition = event.clientX
          this.pressItems = true
          this.translate = 0
          this.dragCretaedItem = false
        })

        this.$.items.addEventListener('mousemove', event => {
          this._dragItems(event.clientX)
        })

        document.addEventListener('mouseup', event => {
          setTimeout(() => {
            this.pressItems = false

            if (event.clientX > this.actualPosition) this._moveLeft()
            else if (event.clientX < this.actualPosition) this._moveRight()

            if (
              this.type === 'infinite' &&
              this.activeItem === this.numberItems &&
              Array.from(this.$.items.querySelectorAll('.carousel__item'))
                .length > this.numberItems
            ) {
              this.$.items.removeChild(
                this.$.items.querySelector('.carousel__item')
              )
            } else if (
              this.type === 'infinite' &&
              this.activeItem === 1 &&
              Array.from(this.$.items.querySelectorAll('.carousel__item'))
                .length > this.numberItems
            ) {
              this.$.items.removeChild(
                this.$.items.querySelector('.carousel__item:last-child')
              )
            }
          }, 100)
        })
      }
    }
  }

  _dragItems(clientX) {
    if (this.pressItems) {
      if (clientX > this.actualPosition) {
        this.translate = clientX - this.actualPosition

        if (this.type === 'infinite') {
          if (this.activeItem === 1) {
            if (!this.dragCretaedItem) {
              const $lastItem = this.$.carousel.querySelector(
                '.carousel__item:last-child'
              )
              const duplicateLastItem = $lastItem.cloneNode(true)
              duplicateLastItem.style.transform = 'translateX(-100%)'
              duplicateLastItem.style.position = 'absolute'
              this.$.items.insertBefore(
                duplicateLastItem,
                this.$.items.querySelector('.carousel__item')
              )

              this.dragCretaedItem = true
            }

            TweenLite.to(this.$.items, 0.1, { x: this.translate })
          }
        } else {
          if (this.activeItem > 1) {
            TweenLite.to(this.$.items, 0.1, {
              x:
                (this.activeItem - 1) * -this.$.carousel.offsetWidth +
                this.translate
            })
          }
        }
      } else if (clientX < this.actualPosition) {
        this.translate = this.actualPosition - clientX

        if (this.type === 'infinite') {
          if (this.activeItem < this.numberItems) {
            TweenLite.to(this.$.items, 0.1, {
              x:
                (this.activeItem - 1) * -this.$.carousel.offsetWidth -
                this.translate
            })
          } else if (this.activeItem === this.numberItems) {
            if (!this.dragCretaedItem) {
              this.dragCretaedItem = true
              const $firstItem = this.$.carousel.querySelector(
                '.carousel__item'
              )
              const duplicateFirstItem = $firstItem.cloneNode(true)
              this.$.items.appendChild(duplicateFirstItem)
            }
            TweenLite.to(this.$.items, 0.1, {
              x:
                (this.numberItems - 1) * -this.$.carousel.offsetWidth -
                this.translate
            })
          }
        } else {
          if (this.activeItem < this.numberItems) {
            TweenLite.to(this.$.items, 0.1, {
              x:
                (this.activeItem - 1) * -this.$.carousel.offsetWidth -
                this.translate
            })
          }
        }
      }
    }
  }

  _moveLeft() {
    if (this.type === 'normal') {
      if (this.activeItem > 1) {
        this._moveItems(this.activeItem - 2, 'left')
        this.activeItem--
      }
    } else if (this.type === 'loop') {
      if (this.activeItem > 1) {
        this._moveItems(this.activeItem - 2, 'left')
        this.activeItem--
      } else if (this.activeItem === 1) {
        this._moveItems(this.numberItems - 1, 'left')
        this.activeItem = this.numberItems
      }
    } else if (this.type === 'infinite') {
      if (this.activeItem === 1) {
        const $lastItem = this.$.items.querySelector(
          '.carousel__item:last-child'
        )
        const duplicateLastItem = $lastItem.cloneNode(true)
        duplicateLastItem.style.transform = 'translateX(-100%)'
        duplicateLastItem.style.position = 'absolute'

        this.$.items.appendChild(duplicateLastItem)
        this.$.items.insertBefore(
          this.$.items.querySelector('.carousel__item:last-child'),
          this.$.items.querySelector('.carousel__item')
        )
        this._moveItems(-1, 'left')
        this.activeItem = this.numberItems
      } else if (this.activeItem <= this.numberItems) {
        this._moveItems(this.activeItem - 2, 'left')
        this.activeItem--
      }
    }
  }

  _moveRight() {
    if (this.type === 'normal') {
      if (this.activeItem < this.numberItems) {
        this._moveItems(this.activeItem, 'right')
        this.activeItem++
      }
    } else if (this.type === 'loop') {
      if (this.activeItem < this.numberItems) {
        this._moveItems(this.activeItem, 'right')
        this.activeItem++
      } else if (this.activeItem === this.numberItems) {
        this._moveItems(0, 'right')
        this.activeItem = 1
      }
    } else if (this.type === 'infinite') {
      if (this.activeItem < this.numberItems) {
        this._moveItems(this.activeItem, 'right')
        this.activeItem++
      } else if (this.activeItem === this.numberItems) {
        const $firstItem = this.$.carousel.querySelector('.carousel__item')
        const duplicateFirstItem = $firstItem.cloneNode(true)
        this.$.items.appendChild(duplicateFirstItem)
        this._moveItems(this.activeItem, 'right')
        this.activeItem = 1
      }
    }
  }

  _moveItems(x, position = null) {
    TweenLite.to(this.$.items, 1, {
      ease: Power4.easeOut,
      x: x * -this.width,
      onComplete: () => {
        if (
          this.type === 'infinite' &&
          position === 'right' &&
          this.activeItem === 1
        ) {
          this.$.items.removeChild(
            this.$.items.querySelector('.carousel__item')
          )
          TweenLite.to(this.$.items, 0, { x: 0 })
          this.$.items.insertBefore(
            this.$.items.querySelector('.carousel__item:last-child'),
            this.$.items.querySelector('.carousel__item')
          )
        } else if (
          this.type === 'infinite' &&
          position === 'left' &&
          this.activeItem === this.numberItems
        ) {
          this.$.items.removeChild(
            this.$.items.querySelector('.carousel__item')
          )
          TweenLite.to(this.$.items, 0, {
            x: (this.numberItems - 1) * -this.width
          })
        }
      }
    })

    if (position === 'left') {
      this.$.carousel
        .querySelector('.carousel__paginationBullet--active')
        .classList.remove('carousel__paginationBullet--active')
      if (this.activeItem === 1)
        this.$.carousel
          .querySelector('.carousel__paginationBullet:last-child')
          .classList.add('carousel__paginationBullet--active')
      else
        this.$.carousel
          .querySelector(
            `.carousel__paginationBullet:nth-child(${this.activeItem - 1})`
          )
          .classList.add('carousel__paginationBullet--active')
    } else if (position === 'right') {
      this.$.carousel
        .querySelector('.carousel__paginationBullet--active')
        .classList.remove('carousel__paginationBullet--active')
      if (this.activeItem === this.numberItems)
        this.$.carousel
          .querySelector('.carousel__paginationBullet')
          .classList.add('carousel__paginationBullet--active')
      else
        this.$.carousel
          .querySelector(
            `.carousel__paginationBullet:nth-child(${this.activeItem + 1})`
          )
          .classList.add('carousel__paginationBullet--active')
    }
  }
}

export default Carousel

const $carousels = Array.from(document.querySelectorAll('.carousel'))
for (const $carousel of $carousels) {
  new Carousel($carousel)
}
