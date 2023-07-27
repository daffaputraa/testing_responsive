
import { Navbar, Hero, HeaderImage } from './components/index';
import {ellipse} from './assets'
function App() {
  
  return (
    <>
    <div className=' bg-black h-[1000px]'>
       <img src={ellipse} className='absolute ' alt="" srcset="" /> 
        <Navbar />
        <Hero />
        <HeaderImage />
      </div>
    </>
  )
};

export default App
