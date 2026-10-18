<template>
  <section class="keyboard-panel" aria-label="英語104キーボード">
    <h2>英語キーボード（US 104キー）</h2>
    <p>TEXTボックスをクリックしてからキーを押します。押したキーが光ります。同時押しにも対応しています。</p>
    <div class="keyboard-scroll">
      <svg viewBox="0 0 1000 330" role="img" aria-label="テンキー付き英語キーボード。押したキーを緑色で表示します。">
        <rect class="keyboard-case" x="0" y="0" width="1000" height="330" rx="12" />
        <g v-for="key in keys" :key="key.code" :data-code="key.code"
          :class="['keyboard-key', { pressed: pressed.has(key.code) }]">
          <title>{{ key.code }}</title>
          <rect :x="key.x" :y="key.y" :width="key.width" :height="key.height" rx="4" />
          <text :x="key.x + key.width / 2" :y="key.y + key.height / 2" text-anchor="middle" dominant-baseline="central">
            <tspan v-for="(line, index) in key.label.split('|')" :key="index" :x="key.x + key.width / 2"
              :dy="index === 0 ? (key.label.includes('|') ? -8 : 0) : 17">{{ line }}</tspan>
          </text>
        </g>
      </svg>
    </div>
    <p class="keyboard-note">FnキーやPrintScreenなど、OSが受け取るキーは反応しない場合があります。</p>
  </section>
</template>

<script>
const keys = []
function add(code, label, x, y, width = 40, height = 48) {
  keys.push({ code, label, x, y, width, height })
}
function row(y, entries) {
  let x = 12
  for (const [code, label, units = 1] of entries) {
    add(code, label, x, y, units * 44 - 4)
    x += units * 44
  }
}
add('Escape', 'Esc', 12, 12, 40, 36)
for (let i = 1; i <= 12; i++) add(`F${i}`, `F${i}`, 100 + (i - 1) * 44 + Math.floor((i - 1) / 4) * 20, 12, 40, 36)
row(64, [
  ['Backquote', '~|`'], ['Digit1', '!|1'], ['Digit2', '@|2'], ['Digit3', '#|3'],
  ['Digit4', '$|4'], ['Digit5', '%|5'], ['Digit6', '^|6'], ['Digit7', '&|7'],
  ['Digit8', '*|8'], ['Digit9', '(|9'], ['Digit0', ')|0'], ['Minus', '_|-'],
  ['Equal', '+|='], ['Backspace', 'Backspace', 2]
])
row(116, [
  ['Tab', 'Tab', 1.5], ...'QWERTYUIOP'.split('').map(c => [`Key${c}`, c]),
  ['BracketLeft', '{|['], ['BracketRight', '}|]'], ['Backslash', '\\|\\', 1.5]
])
row(168, [
  ['CapsLock', 'Caps Lock', 1.75], ...'ASDFGHJKL'.split('').map(c => [`Key${c}`, c]),
  ['Semicolon', ':|;'], ['Quote', '"|\''], ['Enter', 'Enter', 2.25]
])
row(220, [
  ['ShiftLeft', 'Shift', 2.25], ...'ZXCVBNM'.split('').map(c => [`Key${c}`, c]),
  ['Comma', '<|,'], ['Period', '>|.'], ['Slash', '?|/'], ['ShiftRight', 'Shift', 2.75]
])
row(272, [
  ['ControlLeft', 'Ctrl', 1.25], ['MetaLeft', 'Win', 1.25], ['AltLeft', 'Alt', 1.25],
  ['Space', 'Space', 6.25], ['AltRight', 'Alt', 1.25], ['MetaRight', 'Win', 1.25],
  ['ContextMenu', 'Menu', 1.25], ['ControlRight', 'Ctrl', 1.25]
])
for (const [i, code, label] of [[0, 'PrintScreen', 'Print|Screen'], [1, 'ScrollLock', 'Scroll|Lock'], [2, 'Pause', 'Pause']]) add(code, label, 690 + i * 44, 12, 40, 36)
for (const [i, code, label] of [[0, 'Insert', 'Insert'], [1, 'Home', 'Home'], [2, 'PageUp', 'Page|Up'], [3, 'Delete', 'Delete'], [4, 'End', 'End'], [5, 'PageDown', 'Page|Down']]) add(code, label, 690 + (i % 3) * 44, 64 + Math.floor(i / 3) * 52)
add('ArrowUp', '↑', 734, 220)
add('ArrowLeft', '←', 690, 272)
add('ArrowDown', '↓', 734, 272)
add('ArrowRight', '→', 778, 272)
for (const [i, code, label] of [[0, 'NumLock', 'Num|Lock'], [1, 'NumpadDivide', '/'], [2, 'NumpadMultiply', '*'], [3, 'NumpadSubtract', '-']]) add(code, label, 828 + i * 42, 64, 38)
for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
  const n = 7 - r * 3 + c
  add(`Numpad${n}`, `${n}`, 828 + c * 42, 116 + r * 52, 38)
}
add('NumpadAdd', '+', 954, 116, 38, 100)
add('NumpadEnter', 'Enter', 954, 220, 38, 100)
add('Numpad0', '0', 828, 272, 80)
add('NumpadDecimal', '.', 912, 272, 38)

export default {
  name: 'EnglishKeyboard',
  data: () => ({ keys, pressed: new Set() }),
  mounted() {
    window.addEventListener('keydown', this.press)
    window.addEventListener('keyup', this.release)
    window.addEventListener('blur', this.reset)
    document.addEventListener('visibilitychange', this.visibilityChanged)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.press)
    window.removeEventListener('keyup', this.release)
    window.removeEventListener('blur', this.reset)
    document.removeEventListener('visibilitychange', this.visibilityChanged)
  },
  methods: {
    press(event) { this.pressed.add(event.code) },
    release(event) { this.pressed.delete(event.code) },
    reset() { this.pressed.clear() },
    visibilityChanged() { if (document.hidden) this.reset() }
  }
}
</script>

<style scoped>
.keyboard-panel { min-width: 0; }
.keyboard-panel h2 { font-size: 22px; }
.keyboard-panel p { color: #b8c5d5; font-size: 14px; line-height: 1.7; }
.keyboard-scroll { overflow-x: auto; padding: 16px 0; }
svg { display: block; width: 100%; max-width: 1100px; min-width: 680px; }
.keyboard-case { fill: #111820; stroke: #465467; }
.keyboard-key rect { fill: #303b49; stroke: #607086; stroke-width: 1; }
.keyboard-key text { fill: #edf2fa; font-size: 11px; font-family: sans-serif; pointer-events: none; }
.keyboard-key.pressed rect { fill: #57e6a0; stroke: #b8ffdb; stroke-width: 2; filter: drop-shadow(0 0 5px #57e6a0); }
.keyboard-key.pressed text { fill: #062819; font-weight: bold; }
.keyboard-note { max-width: 70ch; }
</style>
