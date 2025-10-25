import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import SubscriptionList from '../../components/SubscriptionList'
import SubscriptionForm from '../../components/SubscriptionForm'
import type { ISubscription } from '../../features/subscriptions/types'
import { fetchSubscriptions } from '../../api/subscriptionApi'

export default function Subscriptions() {
  const [items, setItems] = useState<ISubscription[]>([])

  useEffect(() => {
    fetchSubscriptions().then((data) => setItems(data))
  }, [])

  function handleAdd(s: ISubscription) {
    setItems((cur) => [...cur, s])
  }

  function handleRemove(id: string) {
    setItems((cur) => cur.filter((i) => i.id !== id))
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Subscriptions
      </Typography>

      <SubscriptionForm onAdd={handleAdd} />
      <SubscriptionList items={items} onRemove={handleRemove} />
    </Container>
  )
}
