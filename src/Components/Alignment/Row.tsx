import styles from '../../Styles/Row.module.css'

export default function Row(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}