import { useEffect, useState } from 'react'
import styles from '../../Styles/CharacterSelect.module.css'
import { CharacterProps } from '../../app/Type'
import Bubble from '../Bubble'
import DropdownAccount from '../DropdownAccount'
import DropdownRealm from '../DropdownRealm'
import Restart from '../Restart'
import Text from '../Text'
import Row from '../Alignment/Row'

export default function CharacterSelect(props: CharacterProps) {

	const [selectedAccountId, setSelectedAccountId] = useState('')
	const [selectedAccount, setSelectedAccount] = useState({})
	const [selectedRealm, setSelectedRealm] = useState({})

	useEffect(() => {
		selectedAccountId && props.accountData.wow_accounts &&
			MatchAccount()
	},[selectedAccountId])

	function MatchAccount() {
		const matchedAccount = props.accountData.wow_accounts.find((account: any ) => account.id == selectedAccountId)
		console.log(matchedAccount)
		setSelectedAccount(matchedAccount)
	}



	return (
		<div className={styles.container}>
			<Restart />
			<Row>
				<Bubble>
					<Text text='Select your WoW Account' />
					<DropdownAccount options={props.accountData.wow_accounts} setState={setSelectedAccountId} />
				</Bubble>
				<Bubble>
					<Text text='Select your Realm' />
					<DropdownRealm options={props.accountData.wow_accounts} setState={setSelectedAccountId} />
				</Bubble>
			</Row>
		</div>
	)
}