import React, { Component } from 'react';
import './Login.css';
import AuthLeft from '../../../shared/authLeft/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import images from '../../../data/images';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Footer from '../../../shared/Footer/Footer';

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
    overrides : {
        MuiButton: {
            primaryButton: {           
            },
            socialButton: {
            },
        },
    },
    primaryButton : {
        background: '#4ba3b7',
        border: '1px solid #4ba3b7',
        borderRadius: '7px',
        filter: 'drop-shadow(0px 1px 3.5px rgba(0,0,0,0.2))',
        fontSize: '19px',
        lineHeight: '23px',
        color: '#ffffff',
        fontWeight: '500',
        fontFamily: 'Expletus Sans', 
        textAlign: 'center',
        width: '100%',
        padding: '12px 10px',
        minHeight: '56px',
        marginBottom: '30px',
        transition: 'all 0.5s ease-in-out',
        textTransform: 'capitalize',
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
    socialButton: {
        fontSize: '14px',
        lineHeight: '18px',
        border: '1px solid #e8ecf2',
        borderRadius: '7px',
        width: '100%',
        color: '#2b2b2b',
        textTransform: 'unset',
        background: 'transparent',
        padding: '12px 10px',
        marginBottom: '42px',
        fontWeight: '500',
        minHeight: '56px',
        fontFamily: 'Expletus Sans', 
        transition: 'all 0.5s ease-in-out',
        [customTheme.breakpoints.down("md")] :{
            marginBottom: '30px',
        }, 
        [customTheme.breakpoints.down("xs")] :{
            minHeight: '46px',
            padding: '8px 6px',
        }, 
        '&:hover': {
            background: 'transparent',
        },
        '& .MuiButton-startIcon': {
            width: '26px',
            height: '26px',
            marginRight: '29px',
            [customTheme.breakpoints.down("md")] :{
                width: '20px',
                height: '20px',
                marginRight: '15px',
            }, 
        }
    }, 
    formLink : {
        fontSize: '14px',            
        lineHeight: '20px',
        letterSpacing: '0',
        color: '#4ba3b7',
        fontWeight: '500',
        transition: 'all 0.5s ease-in-out',
        textTransform: 'capitalize',
        fontFamily: 'Expletus Sans', 
    },
    fieldRequirement: {
        marginTop: '7px',
        marginBottom: '40px',
        [customTheme.breakpoints.down("md")] :{
            marginBottom: '28px',
        }, 
        '& .requirement-title': {
            fontSize: '12px',
            lineHeight: '16px',
            marginBottom: '14px',
            letterSpacing: '0',
            color: '#505050',
            fontWeight: '400',
            fontFamily: 'Expletus Sans', 
        },
        '& .requirement-list': {
            padding: '0',
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -10px',
            '& .list-icon': {                              
                lineHeight: '0',
                marginRight: '5px',
                '& .MuiSvgIcon-root': {
                    width: '10px',
                    height: '10px',
                    color: '#94a3b8',  
                    '&.check-icon': {
                        color: '#00ba88',
                    },
                    '&.clear-icon': {
                        color: '#bf3e50',
                    }
                }
            },
            '& .list-item': {
                width: '50%',
                padding: '0 10px',
                fontSize: '12px',
                lineHeight: '16px',
                marginBottom: '6px',
                letterSpacing: '0',
                color: '#000000',
                fontWeight: '400',
                fontFamily: 'Expletus Sans', 
                [customTheme.breakpoints.down("xs")] :{
                    width: '100%',
                },
            }
        }
    },
    orTxt: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontSize: '16px',
        lineHeight: '20px',
        marginBottom: '60px',
        color: '#94a3b8',
        fontWeight: '500',
        fontFamily: 'Expletus Sans', 
        [customTheme.breakpoints.down("md")] :{
            marginBottom: '40px',
        }, 
        [customTheme.breakpoints.down("xs")] :{
            fontSize: '14px',
            lineHeight: '18px',
            marginBottom: '30px',
        }, 
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            top: '50%',
            borderBottom: '1px solid #e8ecf2',
        },
        '& span': {
            position: 'relative',
            background: '#ffffff',
            padding: '0 10px',
        }
    },
    formControl : {
        marginBottom: '28px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e8ecf2',
        },
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiFormLabel-root': {
            fontSize: '14px',
            lineHeight: '18px',
            color: '#94a3b8',
            letterSpacing: '0',
            fontFamily: 'Expletus Sans', 
            fontWeight: '500', 
            '&.Mui-error': {
                color: '#e86577',
            },               
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#94a3b8'
            }                
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b5b5b5',
            borderWidth: '1px',
        },
        '& .MuiOutlinedInput-input': {
            color: '#000000',
            fontFamily: 'Expletus Sans', 
        },
        '& .MuiInputLabel-outlined': {
            color: '#94a3b8'
        },
        '& .MuiInputLabel-outlined.Mui-focused, & .MuiFormLabel-filled': {
            fontSize: '12px',
            lineHeight: '16px',
            color: '#000000',
            letterSpacing: '0',
            fontFamily: 'Expletus Sans', 
            fontWeight: '400',
            '& ~.MuiOutlinedInput-root': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#000000',
                }
            }
            
        },
        '& .MuiInputLabel-outlined.Mui-focused ': {
            '& ~.MuiOutlinedInput-root.Mui-error': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#bf3e50',
                }
            }
        },
        '& .MuiOutlinedInput-root.Mui-error': {
            '& .visibility-icon': {
                color: '#bf3e50',
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#bf3e50',
            },
        },
        '& .MuiFormLabel-filled ~.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#bf3e50',
        },
        '& .visibility-icon' :{
            color: '#94a3b8',
        },
        '& .MuiFormHelperText-root': {
            fontSize: '12px',
            letterSpacing: '0',
            color: '#e86577',
            fontFamily: 'Expletus Sans', 
            fontWeight: '400',
        },
    },
    authWrapper: {  
        textAlign: 'left',             
        '& img': {
            maxWidth: '100%',
        },
        '& .auth-inner-block': {
            display: 'flex',
            flexWrap: 'wrap',            
            '& .auth-right': {
                flex: '1',                
                padding: '60px 60px 57px',
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                [customTheme.breakpoints.down("md")] :{
                    padding: '40px 40px 37px',
                },
                [customTheme.breakpoints.down("sm")] :{
                    padding: '25px 25px 30px',                    
                },
                '& .right-inner-content': {
                    maxWidth: '510px',
                    width: '100%',
                    margin: 'auto',
                    [customTheme.breakpoints.down("md")] :{
                        maxWidth: '400px',
                    },
                },
                '& .right-inner' : {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%', 
                }
            },
        },
        '& .heading': {
            fontSize: '24px',
            lineHeight: '28px',
            margin: '0 0 20px',
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
        '& .page-link': {
            textAlign: 'right',
            marginBottom: '95px',
            [customTheme.breakpoints.down("md")] :{
                marginBottom: '60px',
            },
            [customTheme.breakpoints.down("xs")] :{
                marginBottom: '40px',
            },
        },
        '& .bottom-link': {
            textAlign: 'center',
            fontSize: '14px',            
            lineHeight: '20px',
            letterSpacing: '0',
            color: '#505050',
            fontFamily: 'Expletus Sans', 
            fontWeight: '500',
            '& .form-link': {
                marginLeft: '10px',
            }
        },        
        
    },
});

class Login extends Component {    
    render() {    
        const { classes } = this.props;   
        return (
            <Box className={classes.authWrapper}>                                 
                <Box className='auth-inner-block'>
                    <AuthLeft></AuthLeft>
                    <Box className='auth-right'>
                        <Box className='right-inner'>
                            <Box className='right-inner-content'>
                                <Typography className='heading' variant='h1'>Sign Up</Typography>
                                <Box component='p' className='sub-txt'>Continue with Google or enter your details</Box>
                                <Button 
                                    title='Login with Google'
                                    className={classes.socialButton}
                                    startIcon={<img src={images.goggle} alt='goggle' />}
                                >
                                    Login with Google
                                </Button>
                                <Box className={classes.orTxt}>
                                    <Box component='span'>Or</Box>
                                </Box>
                                <Box
                                    component='form'
                                    noValidate
                                    autoComplete='off'
                                >
                                    <Box className={classes.formControl}>
                                        <TextField 
                                            // error
                                            label='Email' 
                                            variant='outlined' 
                                            // helperText="Invalid email"
                                        />
                                    </Box>
                                    <Box className={classes.formControl}>
                                        <TextField
                                            error
                                            label='Password'                                   
                                            variant='outlined'
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <VisibilityIcon className='visibility-icon' />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            helperText="Password does not meet requirements"
                                        />
                                        <Box className={classes.fieldRequirement}>
                                            <Box className='requirement-title'>Must Contain</Box>
                                            <List className="requirement-list">
                                                <ListItem className='list-item'>
                                                    <Box className='list-icon'>                                                            
                                                        <ClearIcon className='clear-icon' />
                                                    </Box>
                                                    At least one capital letter
                                                </ListItem>
                                                <ListItem className='list-item'>
                                                    <Box className='list-icon'>
                                                        <CheckIcon className='check-icon' />
                                                    </Box>
                                                    At least one lowercase letter
                                                </ListItem>
                                                <ListItem className='list-item'>
                                                    <Box className='list-icon'>
                                                        <CircleOutlinedIcon className='circle-icon' />
                                                    </Box>
                                                    At least one number
                                                </ListItem>
                                                <ListItem className='list-item'>
                                                    <Box className='list-icon'>
                                                        <CircleOutlinedIcon className='circle-icon' />
                                                    </Box>
                                                    Minimum character length is 8 characters
                                                </ListItem>
                                            </List>
                                        </Box>                                            
                                    </Box>
                                    <Box className='page-link'>
                                        <Link title='Forgot Password?' href='#' className={classes.formLink}>
                                            Forgot Password?
                                        </Link>   
                                    </Box>
                                    <Button className={classes.primaryButton}>Create account</Button>     
                                    <Box className='bottom-link'>
                                        Already have an account? 
                                        <Link title='Login' href='#' className={`form-link ${classes.formLink}`}>
                                            Login
                                        </Link>  
                                    </Box>                         
                                </Box>
                            </Box>
                            <Footer></Footer>                           
                        </Box>
                    </Box>
                </Box>               
            </Box>            

        );
    }
}

export default withStyles(useStyles)(Login);