import { styled, Theme, CSSObject, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router';
import { Dashboard, Settings, Upload } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const navItems = [
    { text: 'Dashboard', path: '/', icon: <Dashboard /> },
    { text: 'Upload', path: '/upload', icon: <Upload /> },
    { text: 'Settings', path: '/settings', icon: <Settings /> }
];


export default function SideNavbar({ open, handleDrawerClose }: any) {
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            sx={(theme) => ({
                                minHeight: 48,
                                px: 2.5,
                                textDecoration: 'none',
                                transition: 'all 0.3s',
                                // ✅ Active State for Button
                                '&.active': {
                                    color: theme.palette.primary.main,
                                    fontWeight: 'bold',
                                },
                            })}
                        >
                            {/* ✅ Fix Icon Active Color */}
                            <ListItemIcon
                                sx={(theme) => ({
                                    minWidth: 0,
                                    justifyContent: 'center',
                                    marginRight: open ? 3 : 'auto',
                                    color: 'inherit',
                                })}
                            >
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText
                                primary={item.text}
                                sx={{
                                    opacity: open ? 1 : 0,
                                    textTransform: 'capitalize',
                                    color: 'inherit',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                    },
                                    open
                                        ? {
                                            justifyContent: 'initial',
                                        }
                                        : {
                                            justifyContent: 'center',
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: 'center',
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: 'auto',
                                            },
                                    ]}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
        </Drawer>
    )
}


SideNavbar.prototype = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired
}

