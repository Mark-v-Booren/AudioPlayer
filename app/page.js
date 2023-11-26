import React from 'react'
import styles from './page.module.css'
import  {AudioPlayer}  from './AudioPlayer'
import Image from 'next/image'

export default function Home() {

  const mp3Files = ['./audio/LALALA.mp3','./audio/KUT.mp3','./audio/iedereen-vindt-wat.mp3'
]

  // Inline style to set the background image


// return (
//     <main className={styles.main}> 
//     <AudioPlayer playlist={mp3Files}/>
//     </main>
// )
   
return(
<main className={styles.main}>
<div className={styles.centeredContent}>
  <Image src="/logozwart.png" alt="Your Image" className={styles.centeredImage} 
   width={400}
   height={400}/>

  <AudioPlayer playlist={mp3Files} />
</div>
</main>)
}
