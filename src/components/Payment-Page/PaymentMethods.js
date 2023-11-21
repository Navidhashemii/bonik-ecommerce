import { Box, Button, Divider, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import styles from './PaymentMethod.module.css'
import { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import PaymentDone from './PaymentDone'
import Link from 'next/link'

function PaymentMethods() {

    const [value, setValue] = useState('credit')
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const controlProps = (item) => ({
        checked: value === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });


      function handleClick() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            setShowModal(true)
        }, 2000)
      }



  return (
    <Box className={styles.boxContainer}>
        <Box className={styles.methodContainer}>
            <Box className={styles.radioBox}>
                <Radio {...controlProps('credit')} color="secondary" />
                <Typography variant='h6' className={styles.paymentName}>
                    Pay with credit card
                </Typography>
            </Box>
            {value !== 'credit' 
            ?
            null
            :
            <Box className={styles.methodContainer}>
                <Divider variant='middle'/>
                <Box className={styles.methodDetailsContainer}>
                    <Box className={styles.column}>
                        <Typography className={styles.text}>
                            Card Number
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            type='number'
                            size='small'
                            variant="outlined" 
                            color='secondary'
                            className={styles.field}
                        />
                        <Typography className={styles.text}>
                            Exp Date
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            type='number'
                            size='small'
                            variant="outlined" 
                            color='secondary'
                            className={styles.field}
                        />
                    </Box>

                    <Box className={styles.column}>
                        <Typography className={styles.text}>
                            Name on Card
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            size='small'
                            variant="outlined" 
                            color='secondary'
                            className={styles.field}
                        />
                        <Typography className={styles.text}>
                            Bank Name
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            size='small'
                            variant="outlined" 
                            color='secondary'
                            className={styles.field}
                        />
                    </Box>
                </Box>
            </Box>
            }
        </Box>

        <Box className={styles.methodContainer}>
            <Box className={styles.radioBox}>
                <Radio {...controlProps('paypal')} color="secondary" />
                <Typography variant='h6' className={styles.paymentName}>
                    Pay with Paypal
                </Typography>
            </Box>
            {value !== 'paypal' 
            ?
            null
            :
            <Box className={styles.methodContainer}>
                <Divider variant='middle'/>
                <Typography className={styles.text}>
                    PayPal Email
                </Typography>
                <TextField
                    id="outlined-basic"
                    type='email'
                    size='small'
                    variant="outlined" 
                    color='secondary'
                    className={styles.paypalField}
                />
            </Box>
            }
        </Box>

        <Box className={styles.methodContainer}>
            <Box className={styles.radioBox}>
                <Radio {...controlProps('cash')} color="secondary" />
                <Typography variant='h6' className={styles.paymentName}>
                    Cash on Delivery
                </Typography>
            </Box>
        </Box>
        <Box className={styles.btnsContainer}>
            <Link href='/cart/details' style={{width:"49%"}}>
                <Button className={styles.backBtn}>
                    Back to checkout details
                </Button>
            </Link>

            <LoadingButton
            onClick={handleClick}
            loading={loading}
            loadingPosition="center"
            variant="contained"
            className={styles.payBtn}
            >
            Submit
            </LoadingButton>
        </Box>
        {showModal ? 
        
        <PaymentDone/>
        :
        null
        }
    </Box>
  )
}

export default PaymentMethods