import styles from '../Styles/Title.module.css'
import Image from 'next/image'
import { TitleProps } from '@/app/Type'

export default function Title( props: TitleProps) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image className={styles.image} src={props.image} alt="wow pad logo" />
			</div>
			<div className={styles.title}>{props.title}</div>
		</div>
	)
}