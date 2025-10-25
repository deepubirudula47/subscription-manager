import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import content from '../../content/content.json'

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6">{content.title}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
