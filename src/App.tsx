import { CssBaseline, Container } from '@mui/material'
import AppRouter from './router'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 4 }}>
        <AppRouter />
      </Container>
    </>
  )
}

