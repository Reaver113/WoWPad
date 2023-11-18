import Bubble from "./Bubble"
import Button from "./Button"
import styles from '../Styles/Restart.module.css'

export default function Restart() {
	return (
		<div className={styles.container}>
			<Bubble>
				<Button text="Restart" link='/' action={() => location.reload()} />
			</Bubble>
		</div>
	)
}