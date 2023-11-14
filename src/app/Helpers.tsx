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




export function ClassIcons() {
	const DeathKnight = {
		name: "Death Knight",
		src: DeathKnightImg
	}
	const DemonHunter = {
		name: "Deamon Hunter",
		src: DemonHunterImg
	}
	const Druid = {
		name: "Druid",
		src: DruidImg
	}
	const Evoker = {
		name: "Evoker",
		src: EvokerImg
	}
	const Hunter = {
		name: "Hunter",
		src: HunterImg
	}
	const Mage = {
		name: "Mage",
		src: MageImg
	}
	const Monk = {
		name: "Monk",
		src: MonkImg
	}
	const Paladin = {
		name: "Paladin",
		src: PaladinImg
	}
	const Rogue = {
		name: "Rogue",
		src: RogueImg
	}
	const Shaman = {
		name: "Shaman",
		src: ShamanImg
	}
	const Warlock = {
		name: "Warlock",
		src: WarlockImg
	}
	const Warrior = {
		name: "Warrior",
		src: WarriorImg
	}
	const classList: any = [DeathKnight, DemonHunter, Druid, Evoker, Hunter, Mage, Monk, Paladin, Rogue, Shaman, Warlock, Warrior]
	return classList
}