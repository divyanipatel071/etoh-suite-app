import React, { Component } from 'react';
import "./authLeft.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images'
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import Header from '../Header';
import AuthSlider from '../authSlider/authSlider';

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
        width: '576px',
        maxWidth: '100%',
        padding: '60px',
        [customTheme.breakpoints.down("md")] :{
            width: '470px',
            padding: '40px',
        },
        [customTheme.breakpoints.down("sm")] :{
            width: '100%',
            padding: '25px',
        },
        backgroundColor: '#fafcfe',              
        '& .auth-inner': {
            paddingTop: '37px',
            [customTheme.breakpoints.down("sm")] :{
                paddingTop: '21px',
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
    },       
});


class authLeft extends Component {       
    render() {  
        const { classes } = this.props;             
        return (
            <Box className={classes.authLeft}>  
                <Header></Header>    
                <Box className='auth-inner'>                  
                    <AuthSlider></AuthSlider>                                                     
                </Box>
            </Box>
        );
    }
}

export default withStyles(useStyles)(authLeft);