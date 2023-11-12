import { Container } from '@mui/material'
import { getLocalData } from '../../../json/lib/localdata';
import CategoriesSection from '@/src/components/Categories-page/CategoriesSection';

export default async function Categories() {

    const data = await getLocalData();
    if (!data) {
      throw new Error("Failed to get data");
    }

  return (
    <Container sx={{marginTop:"15px"}}>
        <CategoriesSection data={data}/>
        
    </Container>
  )
}
