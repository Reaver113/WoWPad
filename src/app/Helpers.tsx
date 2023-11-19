import DeathKnightImg from '../Images/Classes/Death_Knight.png';
import DemonHunterImg from '../Images/Classes/Demon_Hunter.png';
import DruidImg from '../Images/Classes/Druid.png';
import EvokerImg from '../Images/Classes/Evoker.png';
import HunterImg from '../Images/Classes/Hunter.png';
import MageImg from '../Images/Classes/Mage.png';
import MonkImg from '../Images/Classes/Monk.png';
import PaladinImg from '../Images/Classes/Paladin.png';
import RogueImg from '../Images/Classes/Rogue.png';
import ShamanImg from '../Images/Classes/Shaman.png';
import WarlockImg from '../Images/Classes/Warlock.png';
import WarriorImg from '../Images/Classes/Warrior.png';
import PriestImg from '../Images/Classes/Priest.png'


export function ClassIcons(className: string) {
	switch (className) {
			case 'Death Knight':
					return DeathKnightImg;
			case 'Demon Hunter':
					return DemonHunterImg;
			case 'Druid':
					return DruidImg;
			case 'Evoker':
					return EvokerImg;
			case 'Hunter':
					return HunterImg;
			case 'Mage':
					return MageImg;
			case 'Monk':
					return MonkImg;
			case 'Paladin':
					return PaladinImg;
			case 'Priest':
					return PriestImg;
			case 'Rogue':
					return RogueImg;
			case 'Shaman':
					return ShamanImg;
			case 'Warlock':
					return WarlockImg;
			case 'Warrior':
					return WarriorImg;
			default:
					return WarriorImg;
	}
}


export function GrabCode() {
	const queryString = window.location.search
	const code = queryString.substring(queryString.indexOf("=") + 1, queryString.lastIndexOf("&"))
	return code
}