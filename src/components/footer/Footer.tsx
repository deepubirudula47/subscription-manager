import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import content from '../../content/content.json'

export function Footer() {
  const text = content.footer?.copyright ?? '© 2025 SubManager. All rights reserved.'
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'grey.200', mt: 'auto' }}>
      <Container sx={{ py: 2, textAlign: 'center' }}>
        <Typography variant="body2">{text}</Typography>
      </Container>
    </Box>
  );
}
