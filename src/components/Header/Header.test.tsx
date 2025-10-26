import { describe, it, expect } from 'vitest'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './index'

describe('Header', () => {
  it('mounts and shows title', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(React.createElement(Header))
    // wait
    await new Promise((r) => setTimeout(r, 0))
    expect(document.body.textContent).toContain('Subscription Manager')
    root.unmount()
    container.remove()
  })
})
