import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import BackgroundImage from '../../assets/background_1.png'
import { CardContent, CardMedia } from "@mui/material";
import logo from '../../assets/logo.png'

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100vw',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    backgroundColor: '#FFFFFFE5',
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
}));


export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        image={logo}
                        height={90}
                        sx={{ objectFit: 'contain' }}
                        alt="Paella dish"
                    />
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </SignInContainer>
        </>
    );
}
