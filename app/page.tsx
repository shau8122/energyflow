
import Categories from '@/app/_components/categories/Categories'
import LogoComponent from '@/app/_components/logocomponents/LogoComponent'
import AboutHomePage from './_components/about/AboutHomePage'



export default function Home() {
  
  return (
    <div className='bg-[#b9e2f5]/90'>
     <LogoComponent/>
     <Categories/>
     <AboutHomePage/>
    
    </div>
  )
}
