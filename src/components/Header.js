import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BookIcon from '@mui/icons-material/Book';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/logo.jpg';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: 280,
    '& .MuiDrawer-paper': {
        width: 280,
        backgroundColor: '#1c1c1c',
        color: '#e0e0e0',
        padding: theme.spacing(2),
        borderRadius: '0 16px 16px 0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: '#00bcd4', // Deep teal color
    '&:hover': {
        backgroundColor: '#333',
        color: '#cfd8dc',
    },
    '& .MuiListItemText-primary': {
        fontSize: '1.2rem',
        fontWeight: 600,
    },
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: '#00bcd4', // Deep teal color
    textDecoration: 'none',
    fontSize: '18px',
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: '#333',
        color: '#cfd8dc',
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false); // State to toggle the drawer
    const handleDrawerToggle = () => setOpen(!open); // Toggle drawer open/close

    return (
        <>
            {/* AppBar with logo, title, and links */}
            <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #263238, #37474f)', height: 64 }}>
                <Toolbar>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt='logo' style={{ height: "2.5rem", borderRadius: '50%', marginRight: '0.5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} />
                    </Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#b0bec5', fontSize: '22px', fontWeight: 700 }}>
                        The Rustic Restaurant
                    </Typography>
                    <StyledLink to="/menu">Menu</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Side Drawer for mobile menu */}
            <StyledDrawer anchor="right" open={open} onClose={handleDrawerToggle}>
                <List>
                    {/* Drawer menu items */}
                    {[ 
                        { text: 'Home', icon: <HomeIcon />, path: '/' },
                        { text: 'Menu', icon: <RestaurantMenuIcon />, path: '/menu' },
                        { text: 'Book a Table', icon: <BookIcon />, path: '/book-table' },
                        { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' }
                    ].map(({ text, icon, path }) => (
                        <StyledListItem button component={Link} to={path} onClick={handleDrawerToggle} key={text}>
                            {icon}
                            <ListItemText primary={text} />
                        </StyledListItem>
                    ))}
                </List>
            </StyledDrawer>
        </>
    );
};

export default Header;
