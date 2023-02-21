import React, { Component } from 'react';
import "./messageModal.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images';
import Modal from '@mui/material/Modal';
import Button from '@material-ui/core/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@material-ui/core/Link';

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
        textTransform: 'capitalize',
        '&:hover': {
            background: '#4ba3b7',
            color: '#ffffff',
        }
    },
    
    modalDialogBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#ffffff',
        padding: '20px',
        border: '2px solid #000',
    },
    modalDialog: {
        '& .MuiBackdrop-root':{
            backgroundColor: 'rgba(57,57,57,0.502)',
        }        
    }
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
                        <Typography className='modal-title' component="h2">
                            Join EtOH Suite
                        </Typography>
                        <Box className='modal-description'>
                            <Box className={classes.messageList}>
                                <Box className='message-detail'>
                                    <Box className='message-icon'></Box>
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
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Labelcc" />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <p>
                                            I agree to the <Link href='#' className={classes.modalLink}>Terms of Use</Link> and <Link href='#' className={classes.modalLink}>Privacy Policy</Link>                                                                                
                                        </p>
                                    }
                                />
                            </FormGroup>
                            <Button className={classes.primaryButton} title='Create account'>Create account</Button>  
                        </Box>                                               
                    </Box>
                </Modal>
            </Box>
        );
    }
}

export default withStyles(useStyles)(messageModal);