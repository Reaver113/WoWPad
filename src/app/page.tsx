"use client"
import Text from "../Components/Text"
import Bubble from "../Components/Bubble"
import Title from "../Components/Title"
import Wowpad from "../Images/WowPad.png"
import InputLayout from "../Components/Layouts/InputLayout"
import InputBar from "../Components/InputBar"
import { useEffect, useState } from "react"
import Picker from "../Components/Picker"
import styles from "../Styles/index.module.css"
import DungeonListLayout from "@/Components/Layouts/DungeonListLayout"
import CheckListLayout from "@/Components/Layouts/CheckListLayout"
import { ClassIcons, GrabCode } from "./Helpers"
import Login from "@/Components/Login"
import Background from "@/Components/Background"
import { GetUserData, LoginUser } from "@/lib/api"
import Button from "@/Components/Button"

export default function Home() {

  const [accessToken, setAccessToken] = useState("")
  const [hasTokenBeenAssigned, setHasTokenBeenAssigned] = useState(false);
  const [hasDataBeenGrabbed, setHasDataBeenGrabbed] = useState(false)
  const [user, setUser] = useState("")
  const REDIRECT_URI = "http://localhost:3000"
  const BNET_ID = process.env.NEXT_PUBLIC_BNET_ID
  const BNET_SECRET = process.env.NEXT_PUBLIC_BNET_SECRET

  
  async function AssignAccessToken() {
    const token = await LoginUser({user: user, bnet_id: BNET_ID, redirect_uri: REDIRECT_URI, bnet_secret: BNET_SECRET})
      return token.access_token
  }
  
  useEffect(() => {
    window.location.search.includes("code") &&
      setUser(GrabCode())
  user && !hasTokenBeenAssigned &&
    AssignAccessToken()
      .then(value => {value && setAccessToken(value), setHasTokenBeenAssigned(true)})
  accessToken && !hasDataBeenGrabbed &&
    GetUserData({access_token: accessToken, bnet_id: BNET_ID, bnet_secret: BNET_SECRET}).then(value => {console.log(value), setHasDataBeenGrabbed(true)})
  },[user, accessToken])

  return (
    <>
          <Background />
    {!user ? 
      <Login bnet_id={BNET_ID} redirect_uri={REDIRECT_URI}/>
    :  
    <div className={styles.container}>
    <InputLayout>
      <Title {...{title: "WoWPad", image: Wowpad}} />
      <Bubble>
        <Button text="Restart" link='/' action={() => location.reload()}/>
      </Bubble>
        <Bubble>
          <Text {...{text: "Select Your Server"}}/>
        </Bubble>
    </InputLayout>
    <DungeonListLayout>

    </DungeonListLayout>
    <CheckListLayout>

    </CheckListLayout>
    </div>}
    </>
  )
}
