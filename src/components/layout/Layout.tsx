import type { ReactNode } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {Header} from '../header/Header';
import { Footer } from '../footer/Footer';

export function Layout({ children }: { children?: ReactNode }) {
	return (
		<Box display="flex" flexDirection="column" minHeight="100vh">
			<Header />
			<Container sx={{ flex: 1, py: 3 }}>{children}</Container>
			<Footer />
		</Box>
	);
}