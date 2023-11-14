import styles from '../../Styles/InputLayout.module.css'

export default function InputLayout(props: any) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	)
}