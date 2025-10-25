import { useState } from 'react'
import type { ISubscription } from '../types'

interface Props { onAdd: (s: ISubscription) => void }

export default function SubscriptionForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    onAdd({ id: Date.now().toString(), name, price: Number(price), active: true })
    setName('')
    setPrice('')
  }

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
      <button type="submit">Add</button>
    </form>
  )
}
