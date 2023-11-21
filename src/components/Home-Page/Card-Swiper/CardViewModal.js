'use client'
import { Box} from '@mui/material'
import styles from './CardSwiper.module.css'
import ProductDetails from '../../Global/Product-Details/ProductDetails';

function CardViewModal({data, targetId, handleCloseModal}) {
  const [targetProduct] = data.filter(({id}) => id === targetId)
  return (
    <Box className={styles.modalContainer}>
        <ProductDetails
          targetProduct={targetProduct}
          handleCloseModal={handleCloseModal}
          modal={true}
        />
    </Box>
  )
}

export default CardViewModal