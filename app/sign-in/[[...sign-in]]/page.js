import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';


export default function SignInPage() {
  return (

      <Container maxWidth="sm">

          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <Button color="inherit">
              <Link href="/sign-in" passHref>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/sign-up" passHref>
                Sign Up
              </Link>
            </Button>
          </Toolbar>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: 'center', my: 4 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign In
          </Typography>
          <SignIn />
        </Box>
      </Container>

  );
}