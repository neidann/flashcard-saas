'use client'
import Image from "next/image";
import getStripe from '../utils/get-stripe';
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid, CssBaseline } from '@mui/material';
import Head from 'next/head';
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: "POST",
      headers: {
        origin: 'http://localhost:3000',
      },
    });

    const checkout_sessionJson = await checkoutSession.json();

    if (checkoutSession.statuscode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkout_sessionJson.id,
    });
    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS for consistent styling */}
      <Container maxWidth="lg">
        <Head>
          <title>Flashcard AI</title>
          <meta name="description" content="Create flashcard from your text" />
        </Head>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <SignedOut>
              <Button color="inherit" href="/sign-in">Login</Button>
              <Button color="inherit" href="/sign-up">Sign Up</Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Toolbar>
        </AppBar>

        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Flashcard AI
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The easiest way to create flashcards from your text.
          </Typography>
          <Button variant="outlined" color="primary" sx={{ mt: 2, mr: 2 }} href="/generate">
            Get Started
          </Button>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Effortless Text Input</Typography>
              <Typography>Just enter your text, and our software takes care of the rest. Creating flashcards has never been simpler.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Intelligent Flashcards</Typography>
              <Typography>Our AI expertly condenses your text into clear and concise flashcards, optimized for quick memorization.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Universal Accessibility</Typography>
              <Typography>Study anytime, anywhere. Access your flashcards from any device, making it easy to learn on the go.</Typography>
            </Grid>
          </Grid>
        </Box>

        <SignedOut>
          <Box sx={{ my: 6, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 4,
                  border: '1px solid #e0e0e0',
                  borderColor: 'grey.300',
                  borderRadius: 2,
                }}>
                  <Typography variant="h5" gutterBottom>Basic</Typography>
                  <Typography variant="h5" gutterBottom>$5/month</Typography>
                  <Typography gutterBottom>Access to basic flashcard features and limited storage.</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>Choose Basic</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: 4,
                  border: '1px solid #e0e0e0',
                  borderColor: 'grey.300',
                  borderRadius: 2,
                }}>
                  <Typography variant="h5" gutterBottom>Pro</Typography>
                  <Typography variant="h5" gutterBottom>$10/month</Typography>
                  <Typography gutterBottom>Unlimited flashcards and storage, with priority customer support.</Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Pro</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </SignedOut>

      </Container>
    </ThemeProvider>
  );
}