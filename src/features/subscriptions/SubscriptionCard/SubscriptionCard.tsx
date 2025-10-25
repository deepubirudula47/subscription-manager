import type { ISubscription } from '../types'

interface Props { sub: ISubscription; onRemove: (id: string) => void }

export default function SubscriptionCard({ sub, onRemove }: Props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
      <div>{sub.name}</div>
      <div>${sub.price.toFixed(2)}</div>
      <button onClick={() => onRemove(sub.id)}>Remove</button>
    </div>
  )
}
