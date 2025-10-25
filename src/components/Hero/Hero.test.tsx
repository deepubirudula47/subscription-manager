import { describe, it, expect } from 'vitest'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import Hero from './index'

describe('Hero', () => {
  it('mounts and contains CTA text', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    root.render(
      React.createElement(MemoryRouter, null, React.createElement(Hero)),
    )
    await new Promise((r) => setTimeout(r, 0))
    expect(document.body.textContent).toMatch(/Subscription Manager|Add subscription/i)
    root.unmount()
    container.remove()
  })
})
