import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/register/RegisterForm";
import { Layout } from "../../components/layout/Layout";

export default function AuthPage() {
  const [tab, setTab] = useState(0);
  return (
    <Layout>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Container sx={{ py: 6 }} maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Welcome
          </Typography>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            aria-label="auth tabs"
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <Box sx={{ mt: 3 }}>
            {tab === 0 ? <LoginForm /> : <RegisterForm />}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
