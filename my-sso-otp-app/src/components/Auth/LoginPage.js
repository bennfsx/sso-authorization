import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';
import { Button } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/send-otp', { email })
            .then(response => {
                // Redirect to OTP page
                window.location.href = '/otp';
            })
            .catch(error => {
                console.error('There was an error sending the OTP!', error);
            });
    };
    const GoogleLoginButton = () => (
        <Button
            href="http://localhost:8080/oauth2/authorization/google"
            variant="contained"
            color="secondary"
        >
            Login with Google
        </Button>
    );

    return (
        <Container>
            <Typography variant="h4">OTP Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary">Send OTP</Button>
            </form>
        </Container>
    );
};

export default LoginPage;
