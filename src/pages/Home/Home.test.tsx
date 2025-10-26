import { describe, it, expect } from 'vitest'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import Home from './index'

describe('Home page', () => {
  it('renders hero', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(
      React.createElement(MemoryRouter, null, React.createElement(Home)),
    )
    await new Promise((r) => setTimeout(r, 0))
    expect(document.body.textContent).toContain('Subscription Manager')
    root.unmount()
    container.remove()
  })
})
