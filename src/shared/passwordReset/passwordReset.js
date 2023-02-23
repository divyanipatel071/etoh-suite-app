import React, { Component } from 'react';
import "./passwordReset.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import images from '../../data/images'
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Header from '../Header';
import Footer from '../Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const BREAKPOINTS = {
    xs: 0, 
    sm: 600, 
    md: 960, 
    lg: 1280, 
    xl: 1920,
};

const breakpointsFull = {
    breakpoints: createBreakpoints({
        values: BREAKPOINTS
    })
};

const myTheme = { other: "stuff" };
const customTheme = createTheme(myTheme, breakpointsFull);

const useStyles = (theme) => ({
    passwordResetWrapper : {
        padding: '60px',
        textAlign: 'left',
        [customTheme.breakpoints.down("md")] :{
           padding: '40px',
        },
        [customTheme.breakpoints.down("sm")] :{
           padding: '25px',
        },
        '& .password-reset-row': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '954px',
            margin: '0 auto',
            [customTheme.breakpoints.down("md")] :{
                maxWidth: '740px',
            },
            [customTheme.breakpoints.down("xs")] :{
                flexWrap: 'wrap',
                justifyContent: 'center',
                textAlign: 'center',
                maxWidth: '320px',
             },
            '& .password-reset-img': {
                maxWidth: '456px',
                width: '100%',
                [customTheme.breakpoints.down("md")] :{
                    maxWidth: '325px',
                },
                [customTheme.breakpoints.down("xs")] :{
                    maxWidth: '235px',
                },
            }
        },
        '& .password-reset-content': {
            marginLeft: '168px',
            [customTheme.breakpoints.down("md")] :{
                marginLeft: '100px',
            },
            [customTheme.breakpoints.down("xs")] :{
                marginLeft: '0',
                marginTop: '20px',
            },
        },
        '& .heading': {
            fontSize: '24px',
            lineHeight: '28px',
            margin: '0 0 8px',
            color: '#000000',
            letterSpacing: '0',
            fontFamily: 'Expletus Sans', 
            [customTheme.breakpoints.down("md")] :{
                fontSize: '20px',
                lineHeight: '24px',
                margin: '0 0 15px',
            }, 
            [customTheme.breakpoints.down("sm")] :{
                fontSize: '18px',
                lineHeight: '24px',
                margin: '0 0 10px',
            }, 
        },
        '& .sub-txt': {
            fontSize: '14px',
            lineHeight: '24px',
            margin: '0 0 48px',
            color: '#505050',
            fontFamily: 'Expletus Sans', 
            [customTheme.breakpoints.down("md")] :{
                margin: '0 0 30px',
            }, 
        },  
    },
    primaryButton : {
        background: '#4ba3b7',
        border: '1px solid #4ba3b7',
        borderRadius: '7px',
        filter: 'drop-shadow(0px 1px 3.5px rgba(0,0,0,0.2))',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#ffffff',
        fontWeight: '500',
        fontFamily: 'Expletus Sans', 
        textAlign: 'center',
        padding: '12px 10px',
        minHeight: '56px',
        marginBottom: '0',
        transition: 'all 0.5s ease-in-out',
        textTransform: 'capitalize',
        width: 'auto',
        minWidth: '165px',
        [customTheme.breakpoints.down("xs")] :{
            fontSize: '16px',
            lineHeight: '20px',
            padding: '8px 6px',
            minHeight: '46px',
        },
        '&:hover': {
            background: '#4ba3b7',
            color: '#ffffff',
        }
    },
    wrapper: {
        minHeight: '100vh',
        paddingBottom: '142px',
        display: 'flex',
        flexDirection: 'column',
        [customTheme.breakpoints.down("sm")] :{
            paddingBottom: '105px',
        },
    },
    authMainWrapper: {
        '& .wrapper' :{
            paddingBottom: '0',
        },
        '& .header-wrapper' :{
            display: 'none',
        },
        '& .footer-wrapper': {
            marginLeft: '576px',
            [customTheme.breakpoints.down("md")] :{
                marginLeft: '470px',
            },
            [customTheme.breakpoints.down("sm")] :{
                marginLeft: '0',
            },
        }
    },
    innerWrapper: {
        margin: 'auto',
        width: '100%',
    }
});


class passwordReset extends Component {       
    render() {  
        const { classes } = this.props;  
        return (
            <Box className={classes.mainWrapper}>
                <Box className={`wrapper ${classes.wrapper}`}>
                    <Header></Header>
                    <Box className={classes.innerWrapper}>
                        <Box className={classes.passwordResetWrapper}>                
                            <Box className='password-reset-inner'>
                                <Box className='password-reset-row'>
                                    <Box className='password-reset-img'>
                                        <img src={images.passwordReset} alt="password-reset" />
                                    </Box>
                                    <Box className='password-reset-content'>
                                        <Typography className='heading' variant='h1'>Password Reset</Typography>
                                        <Box component='p' className='sub-txt'>Your password has been successfully reset. You can now login with your new credentials.</Box>
                                        <Button className={classes.primaryButton} title='login'>Login</Button>  
                                    </Box>
                                </Box>
                            </Box>                                             
                        </Box>
                    </Box>    
                </Box>
                <Footer></Footer>   
            </Box>  
        );
    }
}

export default withStyles(useStyles)(passwordReset);