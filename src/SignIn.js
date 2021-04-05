import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import auth from './Auth'
// import { PostData } from '../src/server/PostData'
// import { Redirect } from 'react-dom'


const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://lovewimbledon.org/wp-content/uploads/2017/04/better-gym.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),

    },
    "&:hover": {
        backgroundColor: 'transparent'
    }
});

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            redirect: false

        }
        this.signin = this.signin.bind(this)
        this.onChange = this.onChange.bind(this)

    }

    signin() {
        // PostData('signin', this.state).then((result) => {
        //     let responseJSON = result;
        //     if (responseJSON.userData) {
        //         sessionStorage.setItem('userData', responseJSON)
        //         this.setState({ redirect: true })
        //     } else {
        //         console.log('Sign in error')
        //     }
        // })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    render() {
        const { classes } = this.props

        // if (this.state.redirect) {
        //     return (<Redirect to={"/home"} />)
        // }

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>

                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
          </Typography>
                        <form className={classes.form} noValidate >
                            <TextField
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus />


                            <TextField
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password" />

                            <Button
                                onClick={() => {
                                    auth.signin(() => {
                                        this.props.history.push('/home')
                                    })
                                }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit.root}
                                style={{ boxShadow: 'none', backgroundColor: '#55a440' }}>
                                Sign In
            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SignIn)