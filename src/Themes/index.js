import { theme } from '@react-spectrum/theme-default'

import themeGlobal from '@spectrum-css/vars/dist/spectrum-global.css'
import themeLight from '@spectrum-css/vars/dist/spectrum-light.css'
import themeLightest from '@spectrum-css/vars/dist/spectrum-lightest.css'
import themeDark from '@spectrum-css/vars/dist/spectrum-dark.css'
import themeDarkest from '@spectrum-css/vars/dist/spectrum-darkest.css'
import scaleMedium from '@spectrum-css/vars/dist/spectrum-medium.css'
import scaleLarge from '@spectrum-css/vars/dist/spectrum-large.css'

const LIGHT = { ...theme }
LIGHT.light = themeLightest
LIGHT.dark = themeLight

export default LIGHT
