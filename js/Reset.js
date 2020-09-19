class Reset {
  constructor() {
    document.addEventListener('keydown', event => {
      if (!/^[a-z0-9]$/i.test(event.key))
        document.body.classList.add('keyboard')
    })

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard')
    })
  }
}

export default Reset
