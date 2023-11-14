import styles from '../../Styles/DungeonListLayout.module.css'

export default function DungeonListLayout(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}