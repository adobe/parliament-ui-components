import { render } from '@testing-library/react'
import { Provider } from '../src/Provider'

const customRender = (ui, options) =>
  render(ui, { wrapper: Provider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
