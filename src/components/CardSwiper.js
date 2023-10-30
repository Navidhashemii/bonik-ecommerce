'use client'

import { Box, Button, Divider, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSwiper.css'
import Image from "next/image";



function CardSwiper({data}) {

  return (
    <Box>
        <Swiper
            modules={[ Navigation, ]}
            style={{
                '--swiper-navigation-color': 'white',
                '--swiper-navigation-size': '20px',
            }}
            spaceBetween={20}
            navigation={true}
        >
            {data.map(({id, image1, name, price, star, rate, discount}) => (
                <SwiperSlide key={id}>
                    <Box 
                        sx={{
                            position:"relative",
                            width:"100%",
                            aspectRatio:"1/1",
                            height:"480px",
                            marginTop:"15px",
                            backgroundColor:"white",
                            textAlign:"center",
                            padding:"10px",
                            borderRadius:"4px",
                            position:"relative"
                        }}
                    >
                        <Image
                            src={image1}
                            width={200}
                            height={270}
                            alt={name}         
                        />
                            <Divider variant="middle"/>
                            <Typography
                                sx={{
                                    color:"grey",
                                    marginTop:"12px",
                                    fontSize:"20px"
                                }}
                            >
                                {name}
                            </Typography>
                                {discount 
                            ? 
                            <Box>
                                <Box
                                    sx={{
                                        width:"36px",
                                        height:"26px",
                                        backgroundColor:"red",
                                        color:"white",
                                        borderRadius:"30px",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        fontSize:"12px",
                                        position:"absolute",
                                        top:"8px"
                                    }}
                                >
                                    {discount}%
                                </Box>
                                
                                <Typography
                                    sx={{
                                        fontStyle:"oblique",
                                        fontSize:"22px",
                                        color:"red",
                                        fontWeight:"bold",
                                        marginTop:"5px"
                                    }}
                                >
                                    ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                                </Typography>

                                <Typography
                                    sx={{
                                        textDecoration:"line-through",
                                        textDecorationColor:"red",
                                        fontSize:"18px"
                                    }}
                                >
                                    ${price.toFixed(2)}
                                </Typography>

                                </Box>

                                : 

                                <Typography
                                    sx={{
                                        fontStyle:"oblique",
                                        fontSize:"18px",
                                        color:"red",
                                        fontWeight:"bold"
                                        ,marginTop:"5px"
                                    }}
                                >
                                    {price}
                                </Typography>

                                }

                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        marginTop:"5px"
                                    }}
                                >
                                    <Rating size="small" value={star}/>

                                    <Typography
                                        sx={{
                                            color:"grey",
                                            marginLeft:"5px",
                                            fontSize:"12px"
                                        }}
                                    >
                                        ({rate})
                                    </Typography>

                                </Box>

                                <Button
                                    sx={{
                                        color:"black",
                                        border:"1px solid black",
                                        width:"100%",
                                        marginTop:"18px",
                                        textTransform:"capitalize"
                                    }}
                                >
                                    Add to Cart
                                </Button>

                            </Box>

                    </SwiperSlide>
            ))}
            
        </Swiper>

    </Box>

  )
}

export default CardSwiper