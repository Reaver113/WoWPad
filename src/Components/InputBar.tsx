import { InputProps } from '../app/Type'
import styles from '../Styles/InputBar.module.css'
import { useState } from 'react'

export default function InputBar(props: InputProps) {

	const [charNo, setCharNo] = useState(props.default)

	const inputHandler = (event: any) => {
		setCharNo(event.target.value)
	}

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      props.action(charNo)
    }
  }
	
	return (
		<div className={styles.container}>
			<input className={styles.input} value={charNo} onChange={inputHandler} onKeyDown={handleKeyDown} type={props.isInteger ? "number" : "text"} ></input>
			<div className={styles.button} onClick={() => props.action(charNo)}>{props.buttonText}</div>
		</div>
	)
}