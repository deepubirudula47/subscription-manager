import { describe, it, expect } from 'vitest'
import React from 'react'
import { createRoot } from 'react-dom/client'
import SubscriptionCard from './SubscriptionCard'

describe('SubscriptionCard', () => {
  it('renders with name and price', async () => {
    const fake = { id: '1', name: 'Test', price: 1.23, active: true }
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(React.createElement(SubscriptionCard, { sub: fake, onRemove: () => {} }))
    await new Promise((r) => setTimeout(r, 0))
    expect(document.body.textContent).toContain('Test')
    expect(document.body.textContent).toContain('$1.23')
    root.unmount()
    container.remove()
  })
})
