import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';

const OtpPage = () => {
    const [email, setEmail] = React.useState('');
    const [otp, setOtp] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/verify-otp', { email, otp })
            .then(response => {
                // Handle successful OTP verification
                window.location.href = '/';
            })
            .catch(error => {
                console.error('OTP verification failed!', error);
            });
    };

    return (
        <Container>
            <Typography variant="h4">Verify OTP</Typography>
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
                <TextField
                    label="OTP"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary">Verify OTP</Button>
            </form>
        </Container>
    );
};

export default OtpPage;
