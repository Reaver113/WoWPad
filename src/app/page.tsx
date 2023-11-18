"use client"
import { useEffect, useState } from "react"
import "../Styles/index.css"
import FinalDisplay from "../Components/Sections/FinalDisplay"
import DungeonSelect from "@/Components/Sections/DungeonSelect"
import CharacterSelect from "@/Components/Sections/CharacterSelect"
import { ClassIcons, GrabCode } from "./Helpers"
import Login from "@/Components/Login"
import Background from "@/Components/Background"
import { GetClassicData, GetBurningCrusadeData, GetWrathOfTheLichKingData, GetCataclysmData, GetMistsOfPandariaData, GetWarlordsOfDraenorData, GetLegionData, GetBattleForAzerothData, GetShadowlandsData, GetDragonflightData, GetUserData, LoginUser } from "@/lib/api"

export default function Home() {

  const [accessToken, setAccessToken] = useState("")
  const [hasTokenBeenAssigned, setHasTokenBeenAssigned] = useState(false);
  const [hasUserDataBeenGrabbed, setHasUserDataBeenGrabbed] = useState(false)
  const [hasInstanceDataBeenGrabbed, setHasInstanceDataBeenGrabbed] = useState(false)
  const [instanceData, setInstanceData] = useState({})
  const [userData, setUserData] = useState({})
  const [user, setUser] = useState("")
  const REDIRECT_URI = "http://localhost:3000"
  const BNET_ID = process.env.NEXT_PUBLIC_BNET_ID
  const BNET_SECRET = process.env.NEXT_PUBLIC_BNET_SECRET

  
  async function AssignAccessToken() {
    const token = await LoginUser({user: user, bnet_id: BNET_ID, redirect_uri: REDIRECT_URI, bnet_secret: BNET_SECRET})
      return token.access_token
  }

  async function AssignInstanceData() {
    let data = await Promise.all([
        GetClassicData({access_token: accessToken}),
        GetBurningCrusadeData({access_token: accessToken}),
        GetWrathOfTheLichKingData({access_token: accessToken}),
        GetCataclysmData({access_token: accessToken}),
        GetMistsOfPandariaData({access_token: accessToken}),
        GetWarlordsOfDraenorData({access_token: accessToken}),
        GetLegionData({access_token: accessToken}),
        GetBattleForAzerothData({access_token: accessToken}),
        GetShadowlandsData({access_token: accessToken}),
        GetDragonflightData({access_token: accessToken})
    ]);
    setInstanceData(data);
  }
  useEffect(() => {
    window.location.search.includes("code") &&
      setUser(GrabCode())
  user && !hasTokenBeenAssigned &&
    AssignAccessToken()
      .then(value => {value && setAccessToken(value), setHasTokenBeenAssigned(true)})
  accessToken && !hasUserDataBeenGrabbed &&
    GetUserData({access_token: accessToken})
      .then(value => {setUserData(value), setHasUserDataBeenGrabbed(true)})
  accessToken && !hasInstanceDataBeenGrabbed &&
    AssignInstanceData().then(x => {setHasInstanceDataBeenGrabbed(true)})
  },[user, accessToken])

  return (
    <>
      <Background />
      {!user ? 
        <Login bnet_id={BNET_ID} redirect_uri={REDIRECT_URI}/>
      :  
      <div>
        <CharacterSelect accountData={userData}/>
        <DungeonSelect instanceData={instanceData}/>
      </div>}
    </>
  )
}
