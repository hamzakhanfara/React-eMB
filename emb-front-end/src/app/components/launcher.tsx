'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ILauncherApp, Config } from '../conf/launcher.interface';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import skfImage from '@/app/assets/skf.png'
import Link from 'next/link';
const launcherApps: ILauncherApp[] = Config as ILauncherApp[];
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
function GridList() {
    const lengthofApps = launcherApps.length
    const apps = [];
    for (let i = 0; i < lengthofApps; i++){
        apps.push(<Grid item xs={4} md={4} key={i}><Card><CardMedia sx={{ height: 140 }} image={skfImage.src} title="green iguana" /><CardContent><Typography gutterBottom variant="h6" component="div">{launcherApps[i].application}</Typography><Typography variant="body2" sx={{ color: 'text.secondary' }}>description à voir</Typography></CardContent><CardActions><Link href={launcherApps[i].routerlink}><Button size="small">Open</Button></Link><Button size="small">Learn More</Button></CardActions></Card></Grid>)
    }
    return(
        <Box margin={'80px'} sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div"> List of Applications :</Typography>
            <Grid container spacing={2}>
                {apps}
            </Grid>
        </Box>
    )
}
export default function Launcher() {
    return(
            <GridList />
    )
}