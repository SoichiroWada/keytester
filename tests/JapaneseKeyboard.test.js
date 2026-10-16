import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import JapaneseKeyboard from '../src/components/JapaneseKeyboard.vue'

let wrapper
afterEach(() => wrapper?.unmount())

async function keyboard(type, code) {
  window.dispatchEvent(new KeyboardEvent(type, { code }))
  await wrapper.vm.$nextTick()
}

describe('Japanese full keyboard', () => {
  it('renders 109 distinct physical keys including JIS and numpad keys', () => {
    wrapper = mount(JapaneseKeyboard)
    const codes = wrapper.findAll('[data-code]').map(key => key.attributes('data-code'))
    expect(codes).toHaveLength(109)
    expect(new Set(codes).size).toBe(109)
    for (const code of ['IntlYen', 'IntlRo', 'Convert', 'NonConvert', 'KanaMode', 'NumpadEnter']) {
      expect(codes).toContain(code)
    }
  })

  it('tracks simultaneous presses, repeated keydown, left/right modifiers and numpad independently', async () => {
    wrapper = mount(JapaneseKeyboard)
    for (const code of ['ShiftLeft', 'ShiftRight', 'Digit1', 'Numpad1', 'Numpad1']) {
      await keyboard('keydown', code)
    }
    expect(wrapper.findAll('.pressed')).toHaveLength(4)
    await keyboard('keyup', 'ShiftLeft')
    await keyboard('keyup', 'Numpad1')
    expect(wrapper.get('[data-code="ShiftLeft"]').classes()).not.toContain('pressed')
    expect(wrapper.get('[data-code="Numpad1"]').classes()).not.toContain('pressed')
    expect(wrapper.get('[data-code="ShiftRight"]').classes()).toContain('pressed')
    expect(wrapper.get('[data-code="Digit1"]').classes()).toContain('pressed')
  })

  it('resets on window blur and removes listeners on unmount', async () => {
    wrapper = mount(JapaneseKeyboard)
    await keyboard('keydown', 'KeyA')
    window.dispatchEvent(new Event('blur'))
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.pressed')).toHaveLength(0)
    const pressed = wrapper.vm.pressed
    wrapper.unmount()
    wrapper = null
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyB' }))
    expect(pressed.size).toBe(0)
  })
})
