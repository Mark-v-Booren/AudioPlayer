import React from 'react'
import styles from './page.module.css'
import  {AudioPlayer}  from './AudioPlayer'

export default function Home() {

  const mp3Files = ['./audio/LALALA.mp3','./audio/KUT.mp3','./audio/iedereen-vindt-wat.mp3'
]


return (
    <main className={styles.main}> 
    <AudioPlayer playlist={mp3Files}/>
    </main>
)
   
}
