import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Calendar from '../Calendar.vue'

import dayjs from 'dayjs'

const testTitle = (wrapper, currentDate) => {
  const currentYear = currentDate.year()
  const currentMonth = currentDate.month() + 1

  expect(wrapper.get('.title').text()).toBe(`${currentYear}.${('1' + currentMonth).slice(-2)}`)
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

describe('rendering time now - n month', () => {
  const wrapper = mount(Calendar)
  const leftButton = wrapper.get('.header> :first-child')
  it('rendered left button properly', () => {
    expect(leftButton.text()).toBe('<')
  })


  const times = Math.floor(Math.random() * 10)
  for (let i = 1; i <= times; i ++) {
    leftButton.trigger('click')
  }
  const currentDate = dayjs().add(-times, 'month')

  it('rendered year and month properly in ".title" element', () => testTitle(wrapper, currentDate))

  it('rendered days properly', () => testDays(wrapper, currentDate))

})

describe('rendering time now + n month', () => {
  const wrapper = mount(Calendar)
  const rightButton = wrapper.get('.header> :last-child')
  it('rendered right button properly', () => {
    expect(rightButton.text()).toBe('>')
  })


  const times = Math.floor(Math.random() * 10)
  for (let i = 1; i <= times; i ++) {
    rightButton.trigger('click')
  }
  const currentDate = dayjs().add(times, 'month')

  it('rendered year and month properly in ".title" element', () => testTitle(wrapper, currentDate))

  it('rendered days properly', () => testDays(wrapper, currentDate))
})
