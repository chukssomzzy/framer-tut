import { motion, useAnimation } from 'framer-motion'


const Box5 = () => {
  const control = useAnimation()

  return (
    <div className='box-container'>
      <button 
      onClick={()=> 
                 control.start({
                  x: "90vw",
                  transistion: {
                  duration: 0
              }
          })
      }
      >Move Right</button>
      <button
      onClick={()=> 
                 control.start({
                  x: 0,
                  transistion: {
                  duration: 2
              }
          })
      }
      >Move Left</button>
      <button  
      onClick={()=> 
                 control.start({
                  borderRadius: '50%',
                  transistion: {
                  duration: 2
              }
          })
      }
      >Circle</button>
      <button
      onClick={()=> 
                 control.start({
                  x: "40vw",
                  transistion: {
                  duration: 2
              }
          })
      }
      >Square</button>
      <button
      onClick={()=> 
          control.stop()
      }
      >stop</button>
      <motion.div
      className="box"
      animate= { control }

            
      >

      </motion.div>
      </div>
  )
}

export default Box5
