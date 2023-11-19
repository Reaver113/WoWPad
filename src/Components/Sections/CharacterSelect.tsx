import { useEffect, useState } from 'react'
import styles from '../../Styles/CharacterSelect.module.css'
import { CharacterProps } from '../../app/Type'
import Bubble from '../Bubble'
import DropdownAccount from '../DropdownAccount'
import DropdownRealm from '../DropdownRealm'
import Restart from '../Restart'
import Text from '../Text'
import Row from '../Alignment/Row'
import CharacterList from '../CharacterList'

export default function CharacterSelect(props: CharacterProps) {

	const [selectedAccountId, setSelectedAccountId] = useState('')
	const [selectedAccount, setSelectedAccount] = useState<any>({})
	const [filteredRealms, setFilteredRealms] = useState({})
	const [selectedRealm, setSelectedRealm] = useState({})
	const [characterList, setCharacterList] = useState({})

	useEffect(() => {
		selectedAccountId && props.accountData.wow_accounts &&
			MatchAccount()
		selectedAccount && selectedAccount.characters &&
			RealmsWithCharracters()
		selectedAccount && selectedAccount.characters && selectedRealm &&
			CharactersOnRealm()
	},[selectedAccountId, selectedAccount, selectedRealm])

	function MatchAccount() {
		const matchedAccount = props.accountData.wow_accounts.find((account: any ) => account.id == selectedAccountId)
		setSelectedAccount(matchedAccount)
	}

	function RealmsWithCharracters() {
		const realms = Array.from(new Set(selectedAccount.characters.map((character: any) => character.realm.slug)));
		setFilteredRealms(realms)
	}

	function CharactersOnRealm() {
		const characters = selectedAccount.characters.filter((character: any) => character.realm.slug === selectedRealm);
		setCharacterList(characters)
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
					<DropdownRealm options={filteredRealms} setState={setSelectedRealm} state={selectedAccount}/>
				</Bubble>
			</Row>
			<CharacterList characters={characterList}/>
		</div>
	)
}