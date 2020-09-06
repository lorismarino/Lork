import CustomSelect from './components/CustomSelect'

const $customSelects = Array.from(document.querySelectorAll('.custom-select'))
for (const $customSelect of $customSelects) {
  new CustomSelect($customSelect)
}
