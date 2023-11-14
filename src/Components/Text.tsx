import { TextProps } from '@/app/Type'
import styles from '../Styles/Text.module.css'

export default function Text( props: TextProps ) {
	return (
		<div className={styles.container}>
			<div className={styles.text}>{props.text}</div>
		</div>
	)
}