import { Box, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import content from '../../content/content.json'

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h3">{content.title}</Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>{content.subtitle}</Typography>
      <Button component={RouterLink} to="/subscriptions" variant="contained">
        {content.labels.addSubscription}
      </Button>
    </Box>
  )
}
