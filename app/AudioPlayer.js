
'use client'
import React, {useState, useRef, useEffect} from 'react'

import styles from './AudioPlayer.module.css'
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaPause} from "react-icons/fa"

const AudioPlayer = ({playlist}) => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0)

  // const [isPlaying, setIsPlaying]= useState(false);
  // const [duration, setDuration] = useState(0);


  // const audioPlayer = useRef()

  // useEffect(()=>{

  // }
  // , [audioPlayer?.current?.loadmetadata, audioPlayer?]);
  // reset track the audio when track changes
 useEffect (()=>{
    audioRef.current.load();}, [currentTrack]) 

 const playPauseHandler = () =>{
  if (audioRef.current.paused){
    audioRef.current.play()
  }else{audioRef.current.pause()}
 }

 const nextTrackHandler = () => {
  setCurrentTrack((prevTrack)=> (prevTrack + 1 ) % playlist.length)
 };

 const prevTrackHandler = () => {
  setCurrentTrack((prevTrack)=> (prevTrack - 1 ) % playlist.length)
 };
  // const togglePlayPause=()=>{

  //   const preValue = isPlaying;

  //   setIsPlaying(!preValue)

  //   if(!preValue) {
  //     audioPlayer.current.play();
     
  //   }else{
  //     audioPlayer.current.pause();
  //   }
  // }

  return (
    <div className={styles.audioPlayer}>
      <button onClick={nextTrackHandler} className={styles.forwardBackward}> <FaLongArrowAltRight/>NEXT</button>
        <audio  ref ={audioRef} controls className={styles.customAudio}>
        <source src={playlist[currentTrack]} type='audio/mp3'/>
        </audio>
        {/* <button onClick={playPauseHandler}className={styles.forwardBackward}><FaPlay className={styles.play} /></button> */}
        <button onClick={prevTrackHandler} className={styles.forwardBackward}> <FaLongArrowAltLeft/>PREV</button>



        {/* <button className={styles.forwardBackward}> <FaLongArrowAltRight/> 30</button>
        <button className={styles.playPause} onClick={togglePlayPause} >{ isPlaying ? <FaPlay className={styles.play} /> : <FaPause/>}</button>
        <button className={styles.forwardBackward}> <FaLongArrowAltLeft/> 30</button>

        <div className={styles.currenttime}>0:00</div>
      
        <div> 
            <input type="range" className={styles.progressBar}></input></div>

        <div className={styles.duration}> {duration}</div>
         */}
        </div>
  )
}

export { AudioPlayer }