import { CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import LockIcon from '@mui/icons-material/Lock';
import Inputform from '../components/signup/Inputform';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import styles from './page.module.css'

const signupCard = (
    <Card className={styles.card} >
        <CardContent className={styles.CardContent}>
            <LockIcon className={styles.pageIcon}/>
            <Typography variant="h5" component="div">Sign up form</Typography>
            <p className={styles.p}>Email Address</p>
            <Inputform placeholder="Email Address"></Inputform>
            <p>Password</p>
            <Inputform placeholder="Password"></Inputform>
            <FormControlLabel className='chackboxlabel' sx={{ color: 'grey'}} control={<Checkbox />} label="Remember me" />
            <Button className={styles.ButtonSignin} variant="outlined" size="large">Sign in</Button>
        </CardContent>
    </Card>
)


export default function signup() {
    return(
        <div>
            <h1>Sign up Page</h1>
            <div className={styles.signupcard}>{signupCard}</div>
        </div>
    )
}