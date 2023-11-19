import { DropdownProps } from '@/app/Type'
import styles from '../Styles/Dropdown.module.css'
import { useEffect } from 'react';

export default function AccountDropdown(props: DropdownProps) {

	
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		props.setState(selectedOption)
	}

	useEffect(() => {
		if (props.options && props.options.length > 0) {
			props.setState(props.options[0].id);
		}
	}, [props.options]);


	return (
		<div className={styles.container}>
			<select className={styles.dropdown} onChange={handleChange}>
				{props.options &&
					props.options.map((option: any, index: number) => (
						<option className={styles.option} key={index} value={option.id}>WoW {index +1}</option>
					))}
			</select>
		</div>
	)
}