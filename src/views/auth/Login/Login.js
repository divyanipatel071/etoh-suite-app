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

const BREAKPOINTS = {
    xxs: 0, 
    xs: 300, 
    sm: 600, 
    md: 900, 
    lg: 1200, 
    xl: 1536,
    xxl: 1920, 
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
    container: {
        '&.MuiContainer-root': {
            maxWidth: '100%',
            padding: '0 60px',
            // [customTheme.breakpoints.up("xl")]: {
            //     backgroundColor: 'red',
            // }
        }        
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
        '&:hover': {
            background: 'transparent',
        },
        '& .MuiButton-startIcon': {
            width: '26px',
            height: '26px',
            marginRight: '29px',
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
    },
    fieldRequirement: {
        marginTop: '7px',
        marginBottom: '40px',
        '& .requirement-title': {
            fontSize: '12px',
            lineHeight: '16px',
            marginBottom: '14px',
            letterSpacing: '0',
            color: '#505050',
            fontWeight: '400',
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
            }
        }
    },
    authWrapper: {
        padding: '60px 0 50px',
        textAlign: 'left',
        '& img': {
            maxWidth: '100%',
        },
        '& .auth-inner-block': {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -15px',
            '& .auth-right': {
                flex: '0 0 49%',
                maxWidth: '49%',
                marginTop: '124px',
                padding: '0 15px',
                '& .right-inner-content': {
                    maxWidth: '510px',
                    width: '100%',
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
            fontFamily: 'Expletus Sans', 
        },
        '& .sub-txt': {
            fontSize: '14px',
            lineHeight: '24px',
            margin: '0 0 48px',
            color: '#505050',
        },           
        '& .or-txt': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            fontSize: '16px',
            lineHeight: '20px',
            marginBottom: '60px',
            color: '#94a3b8',
            fontWeight: '500',
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
        '& .form-control' : {
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
        '& .page-link': {
            textAlign: 'right',
            marginBottom: '95px',
        },
        '& .bottom-link': {
            textAlign: 'center',
            fontSize: '14px',            
            lineHeight: '20px',
            letterSpacing: '0',
            color: '#505050',
            fontWeight: '500',
            '& .form-link': {
                marginLeft: '10px',
            }
        },
        '& .right-bottom': {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            marginTop: 'auto',
        },
        '& .downlaod-app': {
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0',
            color: '#2b2b2b',
            fontWeight: '400',
            display: 'flex',
            alignItems: 'center',
            marginRight: '24px',
            '& .app-link': {
                marginLeft: '12px',
                '& img': {
                    width: '15px',
                }
            }
        },
        '& .translate-language': {
            display: 'flex',
            alignItems: 'center',
            '& .translate-icon': {
                width: '17px',
                marginRight: '3px',
            },
            '& .translate-control': {
                '& .MuiSelect-select' :{
                    fontSize: '12px',
                    letterSpacing: '0',
                    color: '#2b2b2b',
                    fontWeight: '400',
                    fontFamily: 'Expletus Sans', 
                    paddingBottom: '0',
                    paddingTop: '0',
                },
                '& .MuiInput-underline:before': {
                    display: 'none',
                },
                '& .MuiInput-underline:after': {
                    display: 'none',
                }
            }
        }
    },
});

class Login extends Component {    
    render() {    
        const { classes } = this.props;   
        return (
            <Box className={classes.authWrapper}>
                <Container className={classes.container}>
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
                                    <Box className='or-txt'>
                                        <Box component='span'>Or</Box>
                                    </Box>
                                    <Box
                                        component='form'
                                        noValidate
                                        autoComplete='off'
                                    >
                                        <Box className='form-control'>
                                            <TextField 
                                                // error
                                                label='Email' 
                                                variant='outlined' 
                                                // helperText="Invalid email"
                                            />
                                        </Box>
                                        <Box className='form-control'>
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
                                <Box className='right-bottom'>
                                    <Box className='downlaod-app'>
                                        Download App
                                        <Link href='#' className='app-link'>
                                            <img src={images.appIcon1} alt='app-icon' />
                                        </Link> 
                                        <Link href='#' className='app-link'>
                                            <img src={images.appIcon2} alt='app-icon' />
                                        </Link> 
                                    </Box>
                                    <Box className='translate-language'>
                                        <Box component='span' className='translate-icon'>
                                            <img src={images.translate} alt='translate' />
                                        </Box>
                                        <FormControl className='translate-control'>
                                            <Select
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value={10}>English</MenuItem>
                                                <MenuItem value={20}>Arabic</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>            

        );
    }
}

export default withStyles(useStyles)(Login);