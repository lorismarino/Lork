import Accordion from './Accordion'
import Carousel from './Carousel'
import CustomFile from './CustomFile'
import CustomRange from './CustomRange'
import CustomSelect from './CustomSelect'
import Dropdown from './Dropdown'
import Modal from './Modal'
import Tabs from './Tabs'

const $accordions = Array.from(document.querySelectorAll('.accordion'))
for (const $accordion of $accordions) {
  new Accordion($accordion)
}

const $carousels = Array.from(document.querySelectorAll('.carousel'))
for (const $carousel of $carousels) {
  new Carousel($carousel)
}

const $customFiles = Array.from(document.querySelectorAll('.custom-file'))
for (const $customFile of $customFiles) {
  new CustomFile($customFile)
}

const $customRanges = Array.from(document.querySelectorAll('.custom-range'))
for (const $customRange of $customRanges) {
  new CustomRange($customRange)
}

const $customSelects = Array.from(document.querySelectorAll('.custom-select'))
for (const $customSelect of $customSelects) {
  new CustomSelect($customSelect)
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
