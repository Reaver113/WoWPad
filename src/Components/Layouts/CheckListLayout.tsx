import styles from '../../Styles/CheckListLayout.module.css'

export default function CheckListLayout(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}