import styles from '../Styles/Title.module.css'
import Image from 'next/image'
import { TitleProps } from '@/app/Type'

export default function Title( props: TitleProps) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
			</div>
			<div className={styles.title}>{props.title}</div>
		</div>
	)
}