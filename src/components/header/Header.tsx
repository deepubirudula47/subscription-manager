import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import content from '../../content/content.json'

export function Header() {  

  const brand = content.header?.brand ?? 'SubManager'
  const nav = content.header?.nav ?? ['Dashboard','Plans','Invoices','Customers']

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {brand}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {nav.map((label) => (
              <Button color="inherit" key={label}>{label}</Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
