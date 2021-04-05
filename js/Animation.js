class Animation {
  constructor() {
    this.$ = {}
    this.init()
  }

  setDOM() {
    this.$.animatedTitles = Array.from(
      document.querySelectorAll('.animated-title')
    )
  }

  init() {
    for (const animatedTitle of Array.from(
      document.querySelectorAll('.animated-title')
    )) {
      animatedTitle.classList.remove('animated-title')
      const wrapperTitle = document.createElement('div')
      wrapperTitle.classList.add('animated-title__text')
      animatedTitle.parentNode.insertBefore(wrapperTitle, animatedTitle)
      wrapperTitle.appendChild(animatedTitle)

      const wrapperTitle2 = document.createElement('div')
      wrapperTitle2.classList.add('animated-title')
      wrapperTitle.parentNode.insertBefore(wrapperTitle2, wrapperTitle)
      wrapperTitle2.appendChild(wrapperTitle)
    }

    this.setDOM()
    this.events()
  }

  events() {
    let title = new IntersectionObserver(
      observables => {
        for (const item of observables) {
          if (item.intersectionRatio > 0.5) {
            item.target.classList.add('animated-title--visible')
            title.unobserve(item.target)
          }
        }
      },
      {
        threshold: [0.5]
      }
    )

    for (const animatedTitle of this.$.animatedTitles) {
      title.observe(animatedTitle)
    }
  }
}

export default Animation
