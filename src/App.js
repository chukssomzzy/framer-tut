import './App.css';
import { motion } from 'framer-motion' 
import {useState, useEffect, useRef} from 'react'
import Images from './assets/Images'

function App() {
        const [width, setWidth] = useState(0)
        const carouselRef = useRef()

    useEffect(() => {
       setWidth(carouselRef.current.scrollWidth- carouselRef.current.offsetWidth)
    }, [])

/* Jsx Variablea */ 

        const carouselList = Images.map((img)=>(
            <motion.div className="item" key={img}>
            <img src={img} alt="carousel" />
            </motion.div>
        ))

    return (
        <div>
        <motion.div ref= {carouselRef} className='carousel' whileTap={{cursor:'grabbing'}}>
        <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel'>
      {
       carouselList
      }
      </motion.div>
      </motion.div>
    </div>
  );
}

export default App;                                                  
