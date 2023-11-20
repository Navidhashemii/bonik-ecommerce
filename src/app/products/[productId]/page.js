
import { Container } from '@mui/material'
import { getLocalData } from '../../../../json/lib/localdata';
import ProductDetails from '@/src/components/Global/Product-Details/ProductDetails';
import ProductDescription from '@/src/components/Product-Page/ProductDescription';
import FrequentlyProducts from '@/src/components/Product-Page/FrequentlyProducts';
import FilteredProducts from '@/src/components/Product-Page/FilteredProducts';


export default async function ProductPage({params}) {

  const data = await getLocalData();

  const products = data.products
  const targetProductId = Number(params.productId);
  const [targetProduct] = products.filter(({ id }) => id === targetProductId);
  const withDiscount = products.filter(({discount}) => discount)
  const targetWithDiscount = withDiscount.filter(({id}) => id !== targetProductId)
  const brandBased = products.filter(({brand}) => brand === targetProduct.brand) 
  const targetBrandBased = brandBased.filter(({id}) => id !== targetProductId)
  const relatedProducts = products.filter(({categoryId}) => categoryId === targetProduct.categoryId)
  const targetRelatedProducts = relatedProducts.filter(({id}) => id !== targetProductId)

  return (
    <Container
      sx={{
        marginTop:"15px",
        '@media screen and (min-width:900px)': {maxWidth: '1140px'},
        '@media screen and (min-width:1200px)': {maxWidth: '1260px'}
      }}
    >
      <ProductDetails targetProduct={targetProduct} modal={false}/>
      <ProductDescription targetProduct={targetProduct} data={data}/>
      <FrequentlyProducts targetWithDiscount={targetWithDiscount}/>
      <FilteredProducts filtered={targetBrandBased} brand={true}/>
      <FilteredProducts filtered={targetRelatedProducts} brand={false}/>

    </Container>
  )
}
