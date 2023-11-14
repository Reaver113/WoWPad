import styles from '../Styles/Bubble.module.css'

export default function Bubble(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}