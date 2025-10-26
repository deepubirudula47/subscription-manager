import { CssBaseline, Container } from '@mui/material'

import AppRouter from './router'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 4 }}>
        <AppRouter />
      </Container>
    </>
  )
}

