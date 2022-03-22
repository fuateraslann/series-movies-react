import React , {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {ReactComponent as FacebookIcon} from "../Assets/social/facebook-blue.svg"
import {ReactComponent as InstagramIcon} from "../Assets/social/instagram-blue.svg"
import {ReactComponent as TwitterIcon} from "../Assets/social/twitter-blue.svg"
import {ReactComponent as AppStore} from "../Assets/store/app-store.svg"

export default function Footer() {
  
  const [clickedIconIndex,setClickedIconIndex] = useState("")

  useEffect(()=>{
    switch(clickedIconIndex){
        case "facebook" : 
          window.open('https://www.facebook.com/', '_blank')
          break
        case "instagram" : 
          window.open('https://www.instagram.com/', '_blank')
          break
        case "twitter" : 
          window.open('https://www.twitter.com/', '_blank')
          break
        case "app-store":
          window.open('https://www.apple.com/app-store/', '_blank')
          break
        default:
          break
    }
    console.log(clickedIconIndex)
  },[clickedIconIndex])

  const handleChange = (event,value)=>{
    setClickedIconIndex(value)
  }

  const style = {
    width : "100%",
    position : "absolute",
    bottom : 0
  }

  return (
      <BottomNavigation sx={style} value={clickedIconIndex} onChange={handleChange}>
        <BottomNavigationAction
          label="Facebook"
          value="facebook"
          style={{ width: 100 }}
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          label="Instagram"
          value="instagram"
          style={{ width: 100 }}
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          label="Twitter"
          value="twitter"
          style={{ width: 100 }}
          icon={<TwitterIcon />}
        />
        <BottomNavigationAction
          value = "app-store"
          style={{ width: 100 }}
          icon={<AppStore />}
        />
      </BottomNavigation>
  )
}


