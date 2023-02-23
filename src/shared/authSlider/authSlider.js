import React, { Component } from 'react';
import "./authSlider.css";
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import images from '../../data/images'
import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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
    carouselWrapper: {
        maxWidth: '456px',
        width: '100%',
        [customTheme.breakpoints.down("sm")] :{
            margin: '0 auto',
        },
        '& .slider-bottom':{
            marginRight: '80px',
        },
        '& .slider-quotes': {
            fontSize: '24px',
            lineHeight: '32px',
            color: '#000000',            
            fontFamily: 'Expletus Sans', 
            fontWeight: '400',
            marginBottom: '20px',
            [customTheme.breakpoints.down("md")] :{
                fontSize: '20px',
                lineHeight: '28px',
                marginBottom: '15px',
            }, 
            [customTheme.breakpoints.down("sm")] :{
                fontSize: '18px',
                lineHeight: '24px',
                marginBottom: '10px',
            },
            [customTheme.breakpoints.down("xs")] :{
                fontSize: '16px',
                lineHeight: '20px',
            }, 
        },
        '& .slider-author': {
            fontSize: '14px',
            lineHeight: '23px',
            letterSpacing: 0,           
            color: '#94a3b8',
            fontFamily: 'Expletus Sans', 
            fontWeight: 400,
            marginBottom: '20px',
            [customTheme.breakpoints.down("md")] :{
               marginBottom: '15px',
            }, 
            [customTheme.breakpoints.down("sm")] :{
                marginBottom: '10px',
            }, 
        },
        '& .slider-img':{
            marginBottom: '48px',
            [customTheme.breakpoints.down("xs")] :{
                marginBottom: '25px',
            },
        },
        '& .slick-prev, & .slick-next': {
            bottom: '8px',
            top: 'unset',
            transform: 'unset',
            background: 'transparent',
            color: '#2b2b2b',
            zIndex: 10,
            '&:before' :{
                display: 'none'
            },
            '&:hover, &:focus': {
                color: '#2b2b2b',
            }
        },
        '& .slick-prev': {
            left: 'auto',
            right: 46
        },
        '& .slick-next': {
            right: 0,
        },
        '& .start-icon': {
            lineHeight: 0,
        }
    }
});


class authSlider extends Component {       
    render() {  
        const { classes } = this.props;  
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,   
            nextArrow: <Box className='slider-next'><EastIcon /></Box>, 
            prevArrow: <Box className='slider-prev'><KeyboardBackspaceIcon /></Box>  
        };    
        return (
            <Box className={classes.carouselWrapper}>
                <Slider {...settings} className='carosel-slider' >
                    <Box className='slider-item'>
                        <Box className='slider-img'>
                            <img src={images.sliderImg1} alt='sliderImg1' />
                        </Box>
                        <Box className='slider-caption'>
                            <Box className='slider-quotes'>
                                “A must-have for any modern business looking to stay organized."
                            </Box>
                            <Box className='slider-bottom'>
                                <Box className='slider-author'>
                                    - Annie
                                </Box>
                                <Box className='slider-control'>
                                    <Box className='start-icon'>
                                        <StarIcon style={{fontSize: "20px"}} />
                                        <StarIcon style={{fontSize: "20px"}} />
                                        <StarIcon style={{fontSize: "20px"}} />
                                        <StarIcon style={{fontSize: "20px"}} />
                                        <StarIcon style={{fontSize: "20px"}} />
                                    </Box>
                                </Box> 
                            </Box>                                                               
                        </Box>
                    </Box>
                    <Box className='slider-item'>
                        <Box className='slider-img'>
                            <img src={images.sliderImg2} alt='sliderImg2' />
                        </Box>
                        <Box className='slider-caption'>
                            <Box className='slider-quotes'>
                                "A must-have for any modern business looking to stay organized."
                            </Box>
                            <Box className='slider-bottom'>
                                <Box className='slider-author'>
                                    - Annie
                                </Box>
                                <Box className='slider-control'>
                                    <Box className='start-icon'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </Box>
                                </Box>   
                            </Box>                                 
                        </Box>
                    </Box>
                    <Box className='slider-item'>
                        <Box className='slider-img'>
                            <img src={images.sliderImg3} alt='sliderImg3' />
                        </Box>
                        <Box className='slider-caption'>
                            <Box className='slider-quotes'>
                                "Saves us time and money with its efficient management tools."
                            </Box>
                            <Box className='slider-bottom'>
                                <Box className='slider-author'>
                                    - Sarah Clark
                                </Box>
                                <Box className='slider-control'>
                                    <Box className='start-icon'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </Box>
                                </Box>          
                            </Box>                          
                        </Box>
                    </Box>
                </Slider>
                {/* <Box className='slider-control'>
                    <button className="button" onClick={this.previous}>
                        Previous
                    </button>
                    <button className="button" onClick={this.next}>
                        Next
                    </button>
                </Box> */}
            </Box>  
        );
    }
}

export default withStyles(useStyles)(authSlider);