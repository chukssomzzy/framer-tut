import { useState } from 'react'
import { motion } from 'framer-motion'

const Box1= () => {
 const [IsAnimate, setIsAnimate] = useState(false)   
  return (
    <div className='box-container'>
         <motion.div 
                  className="box"
                  animate={{
                          x: IsAnimate ? "40vw" : 0,
                          opacity:IsAnimate ? 1 : 0.2,
                          rotate: IsAnimate ? 360 : 0,
                  }}
                  initial={{
                      opacity:0.2,
                  }}
                 transistion={{
                     type:'spring',
                     stiffness:60,
                 }}
                 onClick = {()=> setIsAnimate(true)}
      >

      </motion.div>
      </div>
  )
}

export default Box1
