'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: '10px',
    height: '100px',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
export default function Launcher() {
    return(
        <Box margin={'80px'} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={4} md={4}>
                <Item>xs=6 md=4</Item>
                </Grid>
            </Grid>
        </Box>
    )
}