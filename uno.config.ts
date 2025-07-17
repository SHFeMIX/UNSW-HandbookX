import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4({
      preflights: {
        reset: false,
      }
    }),
    presetAttributify()
  ]
})
