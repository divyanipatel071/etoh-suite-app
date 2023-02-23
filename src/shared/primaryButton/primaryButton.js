import React, { Component } from 'react';
import "./primaryButton.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import images from '../../data/images'
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    primaryButtonWrapper : {
        marginBottom: '90px',
        [customTheme.breakpoints.down("md")] :{
            marginBottom: '60px',
        },
        [customTheme.breakpoints.down("sm")] :{
            marginBottom: '35px',
        },
        [customTheme.breakpoints.down("xs")] :{
            marginBottom: '20px',
        },
        '& .auth-logo' :{
            maxWidth: '162px',   
            width: '100%',  
            [customTheme.breakpoints.down("md")] :{
                maxWidth: '142px',   
            },       
        },
    },
});


class primaryButton extends Component {       
    render() {  
        const { classes } = this.props;  
        return (
            <Box className={classes.primaryButtonWrapper}>
                <Box className='auth-logo'>
                    <img src={images.logo} alt="logo" />
                </Box>                                      
            </Box>
        );
    }
}

export default withStyles(useStyles)(primaryButton);