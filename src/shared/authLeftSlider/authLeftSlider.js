import React, { Component } from 'react';
import "./authLeftSlider.css";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import images from '../../data/images'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

class authLeftSlider extends Component {    
    render() {        
        return (
            <Box className='auth-left'>
                <Box className='auth-logo'>
                    <img src={images.logo} alt="logo" />
                </Box>
                <Box className='auth-inner'>
                    <Box className='auth-slider'>
                        <Carousel
                            className='auth-carousel'
                            animation="slide"
                            indicators={false}
                            fullHeightHover={false}  
                            duration= {1000}
                            navButtonsProps={{        
                                style: {
                                    borderRadius: 0,
                                    opacity: 1
                                }
                            }} 
                            navButtonsWrapperProps={{   
                                style: {
                                    bottom: '0',
                                    top: 'unset'
                                }
                            }} 
                            NextIcon={<EastIcon />}           
                            PrevIcon={<KeyboardBackspaceIcon />}
                        >
                            <Paper>
                                <Typography>First Item</Typography>
                                <Button variant="outlined">Click me please!</Button>
                            </Paper>
                            <Paper>
                                <Typography>Second Item</Typography>
                                <Button variant="outlined">Click me please!</Button>
                            </Paper>
                            <Paper>
                                <Typography>Third Item</Typography>
                                <Button variant="outlined">Click me please!</Button>
                            </Paper>
                        </Carousel>
                    </Box>
                    <Typography className='copyright-txt'>©Copyright EtOH 2023</Typography>                    
                </Box>
            </Box>
        );
    }
}

export default authLeftSlider;
