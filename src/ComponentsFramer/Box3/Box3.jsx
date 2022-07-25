
 import { motion } from 'framer-motion'

const Box3 = () => {

    /* animation Variabkes */
   
        const boxVariant = {
            hidden: {
                x: '-100vw'
            },
            visible: {
                x:0,
                transition: {
                    delay: 0.5,
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                }
            }

        }
    const listVariant = {
            hidden: {
                x: -10,
                opacity: 0
            },
            visible: {
                x:0,
                opacity: 1,
            }
    }

    /* --- jsx vars --- */
    const listElement = [1,2,3].map((item)=>(
        <motion.li 
          className="box-item"
          key={item}
          variants= {listVariant} 
        ></motion.li>
    ))

    return (
      <div className='box-container'>
      <motion.div className="box"
                  variants={boxVariant}
                  animate= 'visible'
                  initial= 'hidden'
      >
        {
          listElement
        }
      </motion.div>
      </div>
  )
}

export default Box3
