import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import type { ISubscription } from '../../types'

interface Props {
  onAdd: (s: ISubscription) => void
}

export default function SubscriptionForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name) return
    const item: ISubscription = {
      id: String(Date.now()),
      name,
      price: Number(price) || 0,
      active: true,
    }
    onAdd(item)
    setName('')
    setPrice('')
  }

  return (
    <Box component="form" onSubmit={submit} sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} size="small" />
      <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} size="small" />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  )
}
