import styles from '../Styles/Background.module.css'
import Image from 'next/image'
import BGImage from '../Images/Background.jpg'

export default function Background() {
	return (
		<div className={styles.container}>
			<Image className={styles.image} src={BGImage} alt='Background' />
		</div>
	)
}