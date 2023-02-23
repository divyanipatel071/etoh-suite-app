import React, { Component } from 'react';
import "./messageModal.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images';
import Modal from '@mui/material/Modal';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@material-ui/core/Link';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

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
    messageModal: {
        flex: '0 0 51%',
        maxWidth: '51%',
        padding: '0 15px',
        '& .auth-logo' :{
            maxWidth: '162px',
            marginBottom: '90px',
        },
        '& .auth-inner': {
            paddingTop: '129px',
            '& .auth-left-row': {
                display: 'flex',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                margin: '0 -10px',
                '& .col': {
                    padding: '0 10px',
                },
                '& .col-left': {
                    flex: '0 0 54%',
                    maxWidth: '54%',
                },
                '& .col-right': {
                    flex: '0 0 46%',
                    maxWidth: '46%',
                    paddingRight: '206px',
                    "@media (max-width: 1536px)": {
                        paddingRight: '95px',
                    },
                }
            }
        },
        '& .auth-desc': {
            fontSize: '24px',
            lineHeight: '28px',
            color: '#000000',
            fontWeight: '400',
            marginBottom: '19px',
        },
        '& .auth-name': {
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0',            
            color: '#94a3b8',
            fontWeight: '400',
        },
        '& .auth-img': {
            margin: '61px auto 0',
            maxWidth: '380px',
            width: '100%',
            height: '630px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '-50px',
        },
        '& .copyright-txt' :{
            fontSize: '12px',
            letterSpacing: '0',
            color: '#94a3b8',
            fontWeight: '400',
            fontFamily: 'Expletus Sans', 
            textAlign: 'right',
            '& span': {
                color: '#2b2b2b',
            }
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
        textTransform: 'unset',
        width: '100%',
        padding: '12px 10px',
        minHeight: '56px',
        marginBottom: '30px',
        transition: 'all 0.5s ease-in-out',
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
    
    // modal start
    modalDialogBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 430,
        backgroundColor: '#ffffff',
        padding: '36px 40px 34px',
        borderRadius: '24px',
        '& .modal-heading': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '27px'
        },
        '& .modal-title':{            
            fontSize: '22px',
            lineHeight: '26px',
            color: '#000000',    
            letterSpacing: '0',
            fontFamily: 'Expletus Sans',         
        },
        '& .close-icon': {
            color: 'rgba(43, 43, 43, 0.87)',
            lineHeight: '0',
        },
        '& .bottom-link': {
            textAlign: 'center',
            fontSize: '14px',            
            lineHeight: '20px',
            letterSpacing: '0',
            color: '#2B2B2B',
            fontWeight: '500',
            '& .modal-link': {
                marginLeft: '3px',
            }
        },
        '& .primary-btn' : {
            minHeight: '48px',
            fontSize: '14px',
            lineHeight: '19px',
            marginBottom: '23px',
        }
    },
    modalDialog: {
        '& .MuiBackdrop-root':{
            backgroundColor: 'rgba(57,57,57,0.502)',
        }        
    },
    modalLink : {
        fontSize: '14px',            
        lineHeight: '20px',
        letterSpacing: '0',
        color: '#4ba3b7',
        fontWeight: '500',
        transition: 'all 0.5s ease-in-out',
        textTransform: 'capitalize',
    },
    messageList: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '11px',
        '& .message-detail': {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            '& .message-icon': {
                background: '#F2F8FC',
                width: '48px',
                height: '48px',
                borderRadius: '100%',
                display: 'flex',
                justifyContent:' center',
                alignItems:' center',
                letterSpacing: '-0.394867px',
                color: 'rgba(43, 43, 43, 0.87)',
                fontSize: '18px',
                lineHeight: '22px',
                fontWeight:'700',
            },
            '& .message-info': {
                paddingLeft: '13px',
            }, 
            '& .message-name': {
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '19px',
                color: '#000000',
                marginBottom: '3px',
            },
            '& .message-id': {
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '16px',
                color: 'rgba(43, 43, 43, 0.87)',
            }
        },
        '& .message-right': {
            marginkeft: '10px',
        }
    },
    checkboxControl :{
        marginBottom: '6px',
        '& .MuiFormControlLabel-label':{
            color: '#000000',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '17px',
        },
        '& .MuiCheckbox-root' :{
            color: '#94A3B8',
            '&.Mui-checked': {
                color: '#4ba3b7',
            }
        },
        '& p':{
            margin: '0'
        }
    }
    // modal end
});

class messageModal extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    handleOpen() {
        this.setState({ open: true });
    };
    
    handleClose(){
        this.setState({ open: false });
    };

    render() {  
        const { classes } = this.props;  
            
        return (
            <Box className={classes.messageModal}>
               <Box className='auth-inner'>
                    <Box className='auth-left-row'>
                        <Box className='col col-left'>
                            <Button className={classes.primaryButton} onClick={this.handleOpen}>Open Modal</Button>
                            <Box className='auth-desc'>
                                “Manage your company from your pocket”
                            </Box>
                            <Box className='auth-name'>
                                - Audrey Chaillet
                            </Box>
                            <Box className='auth-img'>
                                <img src={images.imageIphone} alt="imageIphone" />
                            </Box>
                        </Box>
                        <Box className='col col-right'>
                            <Typography className='copyright-txt'>
                                ©Copyright <Box component='span'>EtOH 2023</Box>
                            </Typography>
                        </Box>
                    </Box>                                        
                </Box>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    // BackdropProps={{style: {backgroundColor: 'rgba(57,57,57,0.5019607843137255)'}}} 
                    className={classes.modalDialog}
                >
                    <Box className={classes.modalDialogBox}>
                        <Box className='modal-heading'>
                            <Typography className='modal-title' component="h2">
                                Join EtOH Suite
                            </Typography>
                            <Link href='#' className='close-icon' onClick={this.handleClose}>
                                <CloseIcon />
                            </Link>
                        </Box>                        
                        <Box className='modal-description'>
                            <Box className={classes.messageList}>
                                <Box className='message-detail'>
                                    <Box className='message-icon'>EH</Box>
                                    <Box className='message-info'>
                                        <Box className='message-name'>Esther Howard</Box>
                                        <Box className='message-id'>kenzi.lawson@example.com</Box>
                                    </Box>
                                </Box>
                                <Box className='message-right'>
                                    <Link title='Not you?' href='#' className={classes.modalLink}>
                                        Not you?
                                    </Link> 
                                </Box>
                            </Box>
                            <Box className={classes.checkboxControl}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <p>
                                            I agree to the <Link href='#' className={classes.modalLink}>Terms of Use</Link> and <Link href='#' className={classes.modalLink}>Privacy Policy</Link>                                                                                
                                        </p>
                                    }
                                />
                            </Box>
                            <Button className={`primary-btn ${classes.primaryButton}`} title='Create account'>Create account</Button>  
                            <Box className='bottom-link'>
                                Have an account? 
                                <Link title='Login' href='#' className={`modal-link ${classes.modalLink}`}>
                                    Login
                                </Link>  
                            </Box>   
                        </Box>                                               
                    </Box>
                </Modal>
            </Box>
        );
    }
}

export default withStyles(useStyles)(messageModal);