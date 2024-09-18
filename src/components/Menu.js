import React from 'react';
import { Container, Typography, Paper, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocalDining, Fastfood, Cake, LocalBar } from '@mui/icons-material';

const StyledContainer = styled(Container)({
    padding: '32px',
    backgroundColor: '#fff8f0',
    minHeight: '80vh',
});

const SectionTitle = styled(Typography)({
    margin: '32px 0',
    fontWeight: 'bold',
    color: '#e64a19',
    textAlign: 'center',
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    borderBottom: '2px solid #e64a19',
    paddingBottom: '8px',
    letterSpacing: '2px',
});

const MenuColumn = styled(Paper)({
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    border: '1px solid #e64a19',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.07)',
        boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
    },
});

const IconWrapper = styled(IconButton)({
    color: '#e64a19',
    marginBottom: '8px',
    fontSize: '2rem',
});

const DishName = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#333',
    textTransform: 'capitalize',
});

const DishDescription = styled(Typography)({
    fontSize: '0.9rem',
    color: '#777',
    fontStyle: 'italic',
});

const sections = [
    {
        title: 'Starters',
        items: [
            { name: 'Medu Vada', description: 'Crispy fried lentil doughnuts' },
            { name: 'Mysore Bonda', description: 'Golden fried savory snack' },
            { name: 'Rasam Vada', description: 'Lentil dumplings in tangy rasam' },
            { name: 'Idli', description: 'Steamed rice cakes with chutney' },
            { name: 'Onion Pakora', description: 'Crispy onion fritters' },
            { name: 'Pesarattu', description: 'Green gram dosa with chutney' },
            { name: 'Banana Bajji', description: 'Fried banana fritters' },
        ],
        icon: LocalDining,
    },
    {
        title: 'Main Course',
        items: [
            { name: 'Masala Dosa', description: 'Crispy dosa stuffed with potato masala' },
            { name: 'Sambar Rice', description: 'Rice mixed with flavorful sambar' },
            { name: 'Hyderabadi Biryani', description: 'Spicy and fragrant rice dish' },
            { name: 'Pongal', description: 'Rice cooked with spices and lentils' },
            { name: 'Rava Dosa', description: 'Crispy semolina dosa with chutney' },
            { name: 'Tomato Rice', description: 'Rice flavored with tomatoes and spices' },
            { name: 'Lemon Rice', description: 'Tangy rice with lemon and peanuts' },
        ],
        icon: Fastfood,
    },
    {
        title: 'Desserts',
        items: [
            { name: 'Payasam', description: 'Sweet milk and vermicelli pudding' },
            { name: 'Mysore Pak', description: 'Rich ghee and gram flour sweet' },
            { name: 'Rava Kesari', description: 'Semolina dessert flavored with saffron' },
            { name: 'Coconut Barfi', description: 'Coconut fudge with cardamom' },
            { name: 'Sweet Pongal', description: 'Sweet rice with jaggery and ghee' },
            { name: 'Unniyappam', description: 'Sweet fried rice dumplings' },
            { name: 'Ada Pradhaman', description: 'Traditional Kerala dessert with jaggery' },
        ],
        icon: Cake,
    },
    {
        title: 'Beverages',
        items: [
            { name: 'Filter Coffee', description: 'Strong South Indian coffee' },
            { name: 'Butter Milk', description: 'Chilled spiced yogurt drink' },
            { name: 'Neer Moru', description: 'Traditional spiced buttermilk' },
            { name: 'Panakam', description: 'Jaggery and spiced water drink' },
            { name: 'Tender Coconut', description: 'Fresh and cooling coconut water' },
            { name: 'Lime Soda', description: 'Refreshing lime soda' },
            { name: 'Herbal Tea', description: 'Soothing tea with herbs' },
        ],
        icon: LocalBar,
    },
];

const MenuPage = () => (
    <StyledContainer>
        {sections.map(({ title, items, icon: Icon }, idx) => (
            <div key={idx}>
                <SectionTitle>{title}</SectionTitle>
                <Grid container spacing={3}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <MenuColumn>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <DishName>{item.name}</DishName>
                                <DishDescription>{item.description}</DishDescription>
                            </MenuColumn>
                        </Grid>
                    ))}
                </Grid>
            </div>
        ))}
    </StyledContainer>
);

export default MenuPage;
