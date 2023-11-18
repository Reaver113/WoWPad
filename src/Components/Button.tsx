import { ButtonProps } from '@/app/Type'
import styles from '../Styles/Button.module.css'
import Link from 'next/link'

export default function Button(props: ButtonProps) {
	return (
		<div className={styles.container}>
			{props.link ?
				<Link className={styles.button} onClick={props.action} href={props.link}>{props.text}</Link>
				:
				<div className={styles.button}>{props.text}</div>
			}
		</div>
	)
}