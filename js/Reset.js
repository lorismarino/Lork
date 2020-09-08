class Reset {
  constructor() {
    document.addEventListener('keydown', () => {
      document.body.classList.add('keyboard')
    })

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard')
    })
  }
}

export default Reset
