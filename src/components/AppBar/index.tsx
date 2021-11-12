import React from 'react'
import AppBar from '@mui/material/AppBar'
import { IconButton, Toolbar } from '@mui/material'
import TastyTurkeyText from '../../styles/assets/text_restaurant_name.png'

export const StyledAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <img src={TastyTurkeyText} alt="tasty turkey" />
      </IconButton>
    </Toolbar>
  </AppBar>
)
