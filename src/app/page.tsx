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

export default function Home() {

  const [user, setUser] = useState("")
  const classIcons = ClassIcons()
  const [characterCount, setCharacterCount] = useState(3)
  const CharArray = [];
  
  useEffect(() => {
    window.location.search.includes("code") &&
      setUser(GrabCode())
  },[])

  console.log(user)
  for (let i = 0; i < characterCount; i++) {
    CharArray.push(
      <div className={styles.classPickerContainer}>
        <Bubble>
          <Text {...{text: "Class?"}}/>
          <Picker {...{icons: classIcons}}/>
        </Bubble>
        <Bubble>
          <Text {...{text: "Spec?"}}/>
          <Picker {...{icons: classIcons}}/>
        </Bubble>
        <Bubble>
          <Text {...{text: "Name?"}}/>
          <InputBar {...{ isInteger: false, buttonText: "Submit", action: setCharacterCount}}/>
        </Bubble>
      </div>
    )
  }

  return (
    <>
          <Background />
    {!user ? 
      <Login />
    :  
    <div className={styles.container}>
    <InputLayout>
      <Title {...{title: "WoWPad", image: Wowpad}} />
        <Bubble>
          <Text {...{text: "How Many Characters will you be usuing?"}}/>
          <InputBar {...{default: 3, isInteger: true, buttonText: "Submit", action: setCharacterCount}}/>
        </Bubble>
      {CharArray}
    </InputLayout>
    <DungeonListLayout>

    </DungeonListLayout>
    <CheckListLayout>

    </CheckListLayout>
    </div>}
    </>
  )
}
