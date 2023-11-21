'use client'
import { Box, Button, Rating, Tab, TextField, Typography } from '@mui/material'
import styles from './ProductPage.module.css'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react';
import Image from 'next/image';

function ProductDescription({targetProduct, data}) {

    const [value, setValue] =useState('1');

    const {description, brand, seller, rate} = targetProduct
    const comments = data.comments 

    const handleChangeTab = (value, newValue) => {
      setValue(newValue);
    };

  return (
    <Box className={styles.descriptionContainer}>
      <TabContext value={value}>
        <Box className={styles.descriptionTabListBox}>
            <TabList
                onChange={handleChangeTab}
                aria-label="lab API tabs example"
                textColor='secondary'
                indicatorColor='secondary'
                className={styles.descriptionTabList}
            >
            <Tab
                label="Description" 
                value="1" 
                className={styles.descriptionTabs}
            />

            <Tab 
                label={`Review (${rate})`} 
                value="2" 
                className={styles.descriptionTabs}
            />
          </TabList>
        </Box>

        <TabPanel 
            value="1" 
            className={styles.descriptionTabPanel} 
        >
            <Typography className={styles.descriptionTitle}>
                Specification:
            </Typography>

            <Typography 
                variant='subtitle2' 
                className={styles.descriptionSubTitle}
            >
                Seller: {seller}
            </Typography>

            <Typography 
                variant='subtitle2' 
                className={styles.descriptionSubTitle}
            >
                Brand: {brand}
            </Typography>

            <Typography 
                variant='subtitle2' 
                className={styles.descriptionSubTitle}
            >
                Model: {description.model}
            </Typography>

            <Typography 
                variant='subtitle2' 
                className={styles.descriptionSubTitle}
            >
                Feature: {description.feature}
            </Typography>

            <Typography 
                variant='subtitle2' 
                className={styles.descriptionSubTitle}
            >
                Made In: {description.made}
            </Typography>

        </TabPanel>
        <TabPanel 
            value="2" 
            sx={{padding:"0"}}
        >
            <Box>
                {comments.map(({id, name, image, star, date, context}) => (
                    <Box 
                        key={id} 
                        className={styles.cmContainer}
                    >
                        <Box className={styles.profileContainer}>
                            <Image
                                src={image}
                                alt={name}
                                width={40}
                                height={40}
                                priority
                            />
                            <Box className={styles.profileTextContainer}>
                                <Typography className={styles.cmName}>
                                    {name}
                                </Typography>
                                <Box className={styles.boxContainer}>
                                    <Rating 
                                        value={star} 
                                        size='small' 
                                        readOnly
                                    />
                                    <Typography 
                                        variant='subtitle2' 
                                        className={styles.cmDate}
                                    >
                                        {date}
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Typography className={styles.cmContext}>
                            {context}
                        </Typography>
                    </Box>
                ))}
                <Box className={styles.writeCmContainer}>
                    <Typography 
                        variant='h5' 
                        className={styles.writeCmTitle}
                    >
                        Write a Review for This Product
                    </Typography>
                    <Typography className={styles.writeCmRating}>
                        Your Rating
                    </Typography>
                    <Rating size='small'/>
                    <Typography className={styles.writeCmReview}>
                        Your Review
                    </Typography>
                    <TextField
                        color='secondary' 
                        multiline 
                        rows={6} 
                        className={styles.textField}
                    />
                    <Button className={styles.cmBtn}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default ProductDescription