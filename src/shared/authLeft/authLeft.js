import React, { Component } from 'react';
import "./authLeft.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images'
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
    authLeft: {
        flex: '0 0 51%',
        maxWidth: '51%',
        padding: '0 15px',
        '& .auth-logo' :{
            maxWidth: '162px',
            marginBottom: '60px',
            [customTheme.breakpoints.up("xl")]: {                
                marginBottom: '90px',
            },
        },
        '& .auth-inner': {
            paddingTop: '90px',
            [customTheme.breakpoints.up("xl")]: {                
                paddingTop: '129px',
            },
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
            fontFamily: 'Expletus Sans', 
        },
        '& .auth-name': {
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0',            
            color: '#94a3b8',
            fontWeight: '400',
            fontFamily: 'Expletus Sans', 
        },
        '& .auth-img': {
            margin: '61px auto 0',
            maxWidth: '380px',
            height: '630px',
            width: '100%',
            position: 'relative',
            '& img': {
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                position: 'relative',
                bottom: '-50px',
            }
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
});


class authLeft extends Component {    
    render() {  
        const { classes } = this.props;         
        return (
            <Box className={classes.authLeft}>
                <Box className='auth-logo'>
                    <img src={images.logo} alt="logo" />
                </Box>
                <Box className='auth-inner'>
                    <Box className='auth-left-row'>
                        <Box className='col col-left'>
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
            </Box>
        );
    }
}

export default withStyles(useStyles)(authLeft);