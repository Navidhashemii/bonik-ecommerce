import { Box, Button, Typography } from '@mui/material'
import styles from './PaymentMethod.module.css'
import Link from 'next/link'

function PaymentDone() {
  return (
    <Box className={styles.doneBox}>
        <Box className={styles.modal}>
            <Box className={styles.textBox}>
                <Typography
                    variant='h2'
                    className={styles.doneTitle}
                >
                    All Done!
                </Typography>

                <Typography
                    variant='subtitle1'
                    className={styles.doneText}
                >
                    Your orders are processing.
                </Typography>
            </Box>

            <Link href='/'>
                <Button className={styles.doneBtn}>
                    Done
                </Button>
            </Link>
        </Box>
    </Box>
  )
}

export default PaymentDone