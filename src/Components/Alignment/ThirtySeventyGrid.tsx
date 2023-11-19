import styles from '../../Styles/ThirtySeventyGrid.module.css'

export default function ThirtySeventyGrid(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}