import React, { Component } from 'react';
import "./downloadModal.css";
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
    downloadModal: {
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
        width: 580,
        backgroundColor: '#ffffff',
        padding: '49px 49px 25px',
        borderRadius: '24px',
        [customTheme.breakpoints.down("md")] :{
            padding: '35px 35px 20px',
            width: 520,
        },
        [customTheme.breakpoints.down("sm")] :{
            maxWidth: '90%',
            padding: '25px 25px 20px',
        },
        '& .modal-heading': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '34px',
            [customTheme.breakpoints.down("md")] :{
                marginBottom: '28px',
                
            },
        },
        '& .modal-title':{            
            fontSize: '20px',
            lineHeight: '26px',
            color: '#000000',    
            letterSpacing: '0',
            fontFamily: 'Expletus Sans',     
            fontWeight: 500, 
            [customTheme.breakpoints.down("md")] :{
                fontSize: '18px',
                lineHeight: '24px',
            },   
        },
        '& .close-icon': {
            color: 'rgba(43, 43, 43, 0.87)',
            lineHeight: '0',
            marginLeft: '10px',
        }, 
        '& .modal-image' : {
            marginBottom: '23px',
            lineHeight: '0',
            textAlign: 'center',           
            '& img' : {              
                [customTheme.breakpoints.down("md")] :{
                    width: '260px'
                },   
            }
        }       
    },
    modalDialog: {
        '& .MuiBackdrop-root':{
            backgroundColor: 'rgba(57,57,57,0.502)',
        }        
    },
    downloadBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .store-btn': {
            lineHeight: '0',
            width: '50%',
            marginRight: '25px',
            [customTheme.breakpoints.down("sm")] :{
                marginRight: '15px',
            },
            '&:last-child': {
                marginRight: '0'
            },
            '& img': {
                width: '100%',
            }
        }
    }
    // modal end
});

class downloadModal extends Component {  
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
            <Box className={classes.downloadModal}>
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
                    className={classes.modalDialog}
                >
                    <Box className={classes.modalDialogBox}>
                        <Box className='modal-heading'>
                            <Typography className='modal-title' component="h2">
                                Download EtOH Suite on the App Store and Google Play.
                            </Typography>
                            <Link href='#' className='close-icon' onClick={this.handleClose}>
                                <CloseIcon />
                            </Link>
                        </Box>                        
                        <Box className='modal-description'>
                            <Box className='modal-image'>
                                <img src={images.modalImg} alt="modalImg" />
                            </Box>
                            <Box className={classes.downloadBtn}>
                                <Link href='#' className='store-btn'>
                                    <img src={images.appStore} alt="appStore" />
                                </Link>
                                <Link href='#' className='store-btn'>
                                    <img src={images.playStore} alt="playStore" />
                                </Link>
                            </Box>
                        </Box>                                               
                    </Box>
                </Modal>
            </Box>
        );
    }
}

export default withStyles(useStyles)(downloadModal);