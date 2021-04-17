import React, { useEffect, useState } from 'react'
import {
  ActionButton,
  defaultTheme,
  Provider as RSProvider
} from '@adobe/react-spectrum'
import Light from '@spectrum-icons/workflow/Light'
import Moon from '@spectrum-icons/workflow/Moon'

function useCurrentColorScheme() {
  const [colorScheme, setColorScheme] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue('--initial-theme')
    setColorScheme(initialColorValue)

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      setColorScheme(
        localStorage.getItem('theme') || (mq.matches ? 'dark' : 'light')
      )
    }

    mq.addListener(onChange)
    window.addEventListener('storage', onChange)
    return () => {
      mq.removeListener(onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [])

  return colorScheme
}

export const Provider = ({
  colorScheme: colorSchemeProp = 'light',
  scale = 'medium',
  children,
  ...props
}) => {
  const colorScheme = useCurrentColorScheme()
  return (
    <RSProvider
      theme={defaultTheme}
      colorScheme={colorScheme || colorSchemeProp}
      scale={scale}
    >
      <div
        className={`spectrum spectrum--${colorScheme} spectrum--${scale}`}
        dir='ltr'
        {...props}
      >
        {children}
      </div>
    </RSProvider>
  )
}

export const ThemeSwitcher = () => {
  const colorScheme = useCurrentColorScheme()
  const onPress = () => {
    const scheme = colorScheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', scheme)
    window.dispatchEvent(new Event('storage'))
  }
  const label =
    colorScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <div title={label} role='presentation'>
      <ActionButton aria-label={label} onPress={onPress}>
        {colorScheme === 'dark' ? <Light /> : <Moon />}
      </ActionButton>
    </div>
  )
}
