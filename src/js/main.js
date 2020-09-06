import CustomSelect from './components/CustomSelect'
import Accordion from './components/Accordion'
import CustomFile from './components/CustomFile'
import CustomRange from './components/CustomRange'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'
import Tabs from './components/Tabs'

const $customSelects = Array.from(document.querySelectorAll('.custom-select'))
for (const $customSelect of $customSelects) {
  new CustomSelect($customSelect)
}

const $accordions = Array.from(document.querySelectorAll('.accordion'))
for (const $accordion of $accordions) {
  new Accordion($accordion)
}

const $customFiles = Array.from(document.querySelectorAll('.custom-file'))
for (const $customFile of $customFiles) {
  new CustomFile($customFile)
}

const $customRanges = Array.from(document.querySelectorAll('.custom-range'))
for (const $customRange of $customRanges) {
  new CustomRange($customRange)
}

const $dropdowns = Array.from(document.querySelectorAll('.dropdown'))
for (const $dropdown of $dropdowns) {
  new Dropdown($dropdown)
}

const $modals = Array.from(document.querySelectorAll('.modal'))
for (const $modal of $modals) {
  new Modal($modal)
}

const $tabs = Array.from(document.querySelectorAll('.tabs'))
for (const $tab of $tabs) {
  new Tabs($tab)
}
