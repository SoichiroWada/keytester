import { afterEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import KeyTester from '../src/components/keyTester.vue'

let wrapper

afterEach(() => wrapper?.unmount())

function render() {
  wrapper = mount(KeyTester, { attachTo: document.body })
  return wrapper.get('#textbox')
}

describe('keyboard tester', () => {
  it('shows input and all four values for each keyboard event', async () => {
    const input = render()
    await input.setValue('a')
    expect(wrapper.get('#inputValue').text()).toBe('inputValue: a')

    for (const [type, first, keyCode, charCode] of [
      ['keydown', 1, 65, 0],
      ['keypress', 5, 97, 97],
      ['keyup', 9, 65, 0]
    ]) {
      await input.trigger(type, { key: 'a', code: 'KeyA', keyCode, charCode })
      const values = ['event.key: a', `event.keyCode: ${keyCode}`, `event.charCode: ${charCode}`, 'event.code: KeyA']
      values.forEach((value, offset) => {
        expect(wrapper.get(`#message${first + offset}`).text()).toBe(value)
      })
    }
  })

  it('shows both IME warnings and clears them on a normal keydown', async () => {
    const input = render()
    await input.trigger('keydown', { keyCode: 229 })
    expect(wrapper.get('#alertJ').text()).toBe('カナ漢字変換をOFFにしてください')
    expect(wrapper.get('#alertE').text()).toBe('Please turn off Kana Kanji Converter')
    expect(wrapper.get('#message1').text()).toBe('')
    await input.trigger('keydown', { key: 'Shift', keyCode: 16, code: 'ShiftLeft', charCode: 0 })
    expect(wrapper.get('#alertJ').text()).toBe('')
    expect(wrapper.get('#alertE').text()).toBe('')
    expect(wrapper.get('#message1').text()).toBe('event.key: Shift')
  })

  it('changes focus colors and clears all values while restoring focus', async () => {
    const input = render()
    input.element.focus()
    await wrapper.vm.$nextTick()
    expect(input.element.style.backgroundColor).toBe('white')
    input.element.blur()
    await wrapper.vm.$nextTick()
    expect(input.element.style.backgroundColor).toBe('rgb(2, 17, 40)')
    await input.setValue('a')
    for (const type of ['keydown', 'keypress', 'keyup']) {
      await input.trigger(type, { key: 'a', keyCode: 65, charCode: 0, code: 'KeyA' })
    }
    await input.trigger('keydown', { keyCode: 229 })
    await wrapper.get('#button').trigger('click')
    expect(input.element.value).toBe('')
    expect(wrapper.get('#inputValue').text()).toBe('inputValue:')
    for (let index = 1; index <= 12; index++) {
      expect(wrapper.get(`#message${index}`).text()).toBe('')
    }
    expect(wrapper.get('#alertJ').text()).toBe('')
    expect(wrapper.get('#alertE').text()).toBe('')
    expect(document.activeElement).toBe(input.element)
    expect(input.element.style.backgroundColor).toBe('white')
  })
})
