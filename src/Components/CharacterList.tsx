import styles from '../Styles/CharacterList.module.css'
import Bubble from './Bubble'
import Text from './Text'
import Image from 'next/image'
import Row from './Alignment/Row'
import { ClassIcons } from '../app/Helpers'
import { CharacterListProps } from '../app/Type'
import Column from './Alignment/Column'

export default function CharacterList(props: CharacterListProps) {
console.log(props.characters)

	return (
		<div className={styles.container}>
			<Bubble>
				<Text text='Select characters to track' />
				<div className={styles.alignSizing}>
				{props.characters.length > 0 &&
					props.characters.map((character: any, index: number) => {
						return (
						<Bubble align='left' key={`character${index}`}>
							<Row>
								<Image className={styles.classIcon} alt={`${character.playable_class.name} Icon`} src={ClassIcons(character.playable_class.name)} />
								<Column>
							<Row>
							<Text text={`Lvl: ${character.level}`} /> &nbsp; &nbsp;
								<Text text={character.name} /> 
							</Row>
							<Row>
								<Text text={character.playable_race.name} /> &nbsp; &nbsp; 
								<Text text={character.playable_class.name} />
							</Row>
							</Column>
							</Row>
						</Bubble>
						)
					})}
					</div>
			</Bubble>
		</div>
	)
}