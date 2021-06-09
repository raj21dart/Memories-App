import React ,{ useState } from 'react'
import { Paper, Container, Avatar, Typography, Grid, Button } from '@material-ui/core';
import LockOutlinedIcon  from '@material-ui/icons/LockOutlined'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Icon from './icon'
import Input from './Input'

import useStyles from './styles'



const Auth = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = () => {

    }
    
    const handleChange = () => {
    
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {

        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            
            history.push('/')
        } catch (error) {
            console.log(error);
        }

    }
    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again");
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}  elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">{isSignUp ? 'Sign Up' : 'Sign In' }</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <> 
                                     <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                     <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password' } handleShowPassword={handleShowPassword} />
                        {
                            isSignUp && 
                            <Input name="confirmPassword" label="Repeat Passoword" handleChange={handleChange} type="password"/>
                        }
                    </Grid>


                    {/* SIGN- IN  // SIGN - UP */}
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        {isSignUp ? 'Sign Up' : 'Sign In' }
                    </Button>
                    
                    {/* Login With Google */}
                    <GoogleLogin
                        clientId="245511486070-p2ve4484omje8fopuikhc2shha2ji0vn.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    {/* Status */}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? 'Already have an account? Sign In' : "Don't have an account, Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth