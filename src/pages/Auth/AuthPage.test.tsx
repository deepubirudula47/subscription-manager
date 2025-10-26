import { describe, it, expect } from 'vitest'
import { createRoot } from 'react-dom/client'
import React from 'react'
import AuthPage from './AuthPage'

describe('Auth page', () => {
  it('renders welcome title from content.json', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(React.createElement(AuthPage))
    await new Promise((r) => setTimeout(r, 0))

    expect(document.body.textContent).toContain('Welcome')

    root.unmount()
    container.remove()
  })
})
