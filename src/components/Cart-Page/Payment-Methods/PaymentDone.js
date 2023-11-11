import { Box, Button, Divider, Typography } from '@mui/material'
import styles from './PaymentMethod.module.css'

function PaymentDone() {
  return (
    <Box className={styles.doneBox}>
        <Box className={styles.textBox}>
            <Typography variant='h2' className={styles.doneTitle}>
                All Done!
            </Typography>
            <Typography variant='subtitle1' className={styles.doneText}>
                Your orders are processing.
            </Typography>
        </Box>
        <Button className={styles.doneBtn}>
            Done
        </Button>
    </Box>
  )
}

export default PaymentDone