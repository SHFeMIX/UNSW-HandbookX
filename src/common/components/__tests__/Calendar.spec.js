import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Calendar from '../Calendar.vue'

import dayjs from 'dayjs'

const testTitle = (wrapper, currentDate) => {
  const currentYear = currentDate.year()
  const currentMonth = currentDate.month() + 1

  expect(wrapper.get('.title').text()).toBe(`${currentYear}.${('0' + currentMonth).slice(-2)}`)
}

const testDays = (wrapper, currentDate) => {
  const renderedText = wrapper.text()
  const daysInCurrentMonth = currentDate.daysInMonth();

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    expect(renderedText).toContain(i)
  }
}

describe('default rendering time now', () => {
  const currentDate = dayjs()
  const wrapper = mount(Calendar)

  it('rendered year and month properly in ".title" element', () => testTitle(wrapper, currentDate))

  it('rendered days properly', () => testDays(wrapper, currentDate))

  it('render today\'s style properly', () => {
    expect(wrapper.get('*[style^="background:"]').text()).toBe(currentDate.date().toString())
  })
})
