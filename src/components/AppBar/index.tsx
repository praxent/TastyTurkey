import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Toolbar } from '@mui/material'
import TastyTurkeyText from '../../styles/assets/text_restaurant_name.png'

export const StyledAppBar = () => (
  <AppBar position="sticky" style={{ background: '#fff', height: '70px', textAlign: 'center' }}>
    <Toolbar style={{ margin: 'auto', display: 'flex' }}>
      <img src={TastyTurkeyText} alt="tasty turkey" style={{ height: '50px' }} />
    </Toolbar>
  </AppBar>
)
