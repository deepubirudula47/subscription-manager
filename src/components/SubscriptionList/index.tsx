import { List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type { ISubscription } from '../../types'

interface Props {
  items: ISubscription[]
  onRemove: (id: string) => void
}

export default function SubscriptionList({ items, onRemove }: Props) {
  return (
    <List>
      {items.map((it) => (
        <ListItem
          key={it.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onRemove(it.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={it.name} secondary={`$${it.price}`} />
        </ListItem>
      ))}
    </List>
  )
}
