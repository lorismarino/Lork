import CustomSelect from './components/CustomSelect'
import Accordion from './components/Accordion'

const $customSelects = Array.from(document.querySelectorAll('.custom-select'))
for (const $customSelect of $customSelects) {
  new CustomSelect($customSelect)
}

const $accordions = Array.from(document.querySelectorAll('.accordion'))
for (const $accordion of $accordions) {
  new Accordion($accordion)
}
