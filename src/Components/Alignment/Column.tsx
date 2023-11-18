import styles from '../Styles/Column.module.css'

export default function Column(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}