import React, { useLayoutEffect, useState } from 'react'
import {
  ActionButton,
  defaultTheme,
  Provider as RSProvider
} from '@adobe/react-spectrum'
import Light from '@spectrum-icons/workflow/Light'
import Moon from '@spectrum-icons/workflow/Moon'
import useIsMounted from 'react-is-mounted-hook'

function useCurrentColorScheme() {
  const [colorScheme, setColorScheme] = useState(undefined)
  const isMounted = useIsMounted()
  useLayoutEffect(() => {
    setColorScheme(localStorage.theme || 'light')
  }, [isMounted])

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      setColorScheme(localStorage.theme || (mq.matches ? 'dark' : 'light'))
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
    localStorage.theme = colorScheme === 'dark' ? 'light' : 'dark'
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
