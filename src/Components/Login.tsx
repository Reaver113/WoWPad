import { LoginProps } from '@/app/Type'
import styles from '../Styles/Login.module.css'
import Bubble from './Bubble'
import Button from './Button'

export default function Login(props: LoginProps) {

	return (
		<div className={styles.container}>
			<Bubble>
				<div className={styles.text}>To Continue Please Login</div>
				<Button text='Login' link={`https://us.battle.net/oauth/authorize?client_id=${props.bnet_id}&redirect_uri=${props.redirect_uri}&response_type=code&scope=wow.profile&state=id10T`}></Button>
			</Bubble>
		</div>
	)
}