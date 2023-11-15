
import { Container } from '@mui/material'
import { getLocalData } from '../../../../json/lib/localdata';
import ProductDetails from '@/src/components/Global/Product-Details/ProductDetails';
import ProductDescription from '@/src/components/Product-Page/ProductDescription';
import FrequentlyProducts from '@/src/components/Product-Page/FrequentlyProducts';

export default async function ProductPage({params}) {

  const data = await getLocalData();

  const products = data.products
  const targetProductId = Number(params.productId);
  const [targetProduct] = products.filter(({ id }) => id === targetProductId);
  const withDiscount = products.filter(({discount}) => discount)
  const targetWithDiscount = withDiscount.filter(({id}) => id !== targetProductId) 

  return (
    <Container sx={{marginTop:"15px"}}>
      <ProductDetails targetProduct={targetProduct} modal={false}/>
      <ProductDescription targetProduct={targetProduct} data={data}/>
      <FrequentlyProducts targetWithDiscount={targetWithDiscount}/>

    </Container>
  )
}
