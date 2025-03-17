import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import { styled } from '@mui/material';
import { Outlet } from 'react-router';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Dashboard() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            <SideNavbar open={open} handleDrawerClose={handleDrawerClose} />
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    background: 'linear-gradient(180deg,rgba(33, 33, 33, 0.08) 30%, rgba(243, 243, 243, 0.5) 30%)',
                    minHeight: '100vh'
                }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
}
