import styles from '../Styles/Login.module.css'
import Bubble from './Bubble'
import Button from './Button'

const BNET_ID = process.env.NEXT_PUBLIC_BNET_ID
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI

export default function Login() {
	return (
		<div className={styles.container}>
			<Bubble>
				<div className={styles.text}>To Continue Please Login</div>
				<Button text='Login' link={`https://us.battle.net/oauth/authorize?client_id=${BNET_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=wow.profile&state=waggle`}></Button>
			</Bubble>
		</div>
	)
}