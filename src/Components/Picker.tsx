import { PickerProps } from '@/app/Type'
import styles from '../Styles/Picker.module.css'
import { useState } from 'react'
import Image from 'next/image'


export default function Picker( props: PickerProps) {
	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

	const [isOpen, setIsOpen] = useState(false)
	const [playerClass, setPlayerClass] = useState(props.icons[getRandomInt(9)])

	return (
		<div className={styles.container}>
			{isOpen &&
				<div className={styles.speechBubble}>
					{props.icons.map((icon: any, index: number) => (
						<div className={styles.imageContainer} key={index} onClick={() => setPlayerClass(icon)}>
							<Image className={styles.image} src={icon.src} alt={icon.name}/>
						</div>
					))}
				</div>
			}
			<Image className={styles.buttonImage} src={playerClass.src} alt={playerClass.name} onClick={() => setIsOpen(isOpen ? false : true)}/>
		</div>
	)
}