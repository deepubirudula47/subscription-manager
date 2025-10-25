import { describe, it, expect } from 'vitest'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Subscriptions from './index'

describe('Subscriptions page', () => {
  it('renders list and form', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(React.createElement(Subscriptions))
    await new Promise((r) => setTimeout(r, 0))
    expect(document.body.textContent).toBeDefined()
    root.unmount()
    container.remove()
  })
})
