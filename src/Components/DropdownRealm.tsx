import { DropdownProps } from '@/app/Type'
import styles from '../Styles/Dropdown.module.css'

export default function RealmDropdown(props: DropdownProps) {

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		props.setState(selectedOption)
		console.log(selectedOption);
	}


	return (
		<div className={styles.container}>
			<select className={styles.dropdown} onChange={handleChange}>
				{props.options &&
					props.options.map((option: any, index: number) => (
						<option className={styles.option} key={index} value={option.id}>{option.name}</option>
					))}
			</select>
		</div>
	)
}