import styles from '../Styles/Bubble.module.css'

export default function Bubble(props: any) {
	return (
		<div className={`${styles.container} ${props.align === 'left' ? styles.left : styles.center}`}>
			{props.children}
		</div>
	)
}