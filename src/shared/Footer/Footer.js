import React, { Component } from 'react';
import "./Footer.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images'
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
    authMainWrapper: {
        background: 'red'
    },
    FooterWrapper : {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '60px',        
        marginTop: '-142px',
        [customTheme.breakpoints.down("md")] :{
            padding: '40px',
            marginTop: '-102px',
        },
        [customTheme.breakpoints.down("sm")] :{
            padding: '25px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '0',
        },
        '& img': {
            maxWidth: '100%',   
        }, 
        '& .bottom-right':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '15px',
            [customTheme.breakpoints.down("sm")] :{
                marginTop: '15px',
                marginLeft: 0,
                width: '100%'
            },
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
            fontFamily: 'Expletus Sans',   
            [customTheme.breakpoints.down("xs")] :{
                marginRight: '15px',
            },          
            '& .app-link': {
                marginLeft: '12px',
                [customTheme.breakpoints.down("xs")] :{
                    marginLeft: '8px',
                },
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


class Footer extends Component {       
    render() {  
        const { classes } = this.props;  
        return (
            <Box className={`footer-wrapper ${classes.FooterWrapper}`}>
                <Box className='bottom-left'>
                    <Typography className='copyright-txt'>
                        ©Copyright <Box component='span'>EtOH 2023</Box>
                    </Typography>
                </Box>
                <Box className='bottom-right'>
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
        );
    }
}


export default withStyles(useStyles)(Footer);