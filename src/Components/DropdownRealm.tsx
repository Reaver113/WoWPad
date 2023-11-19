import { DropdownProps } from '@/app/Type'
import styles from '../Styles/Dropdown.module.css'
import { useEffect, useState } from 'react';

export default function RealmDropdown(props: DropdownProps) {

	const [cachedOptions, setCachedOptions] = useState()
	const [intOptionsSet, setIniOptionsSet] = useState(false)

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		props.setState(selectedOption)
	}

	useEffect(() => {
		if (props.options && props.options.length > 0) {
			if (!intOptionsSet) {
				props.setState(props.options[0]);
				setIniOptionsSet(true)
			}
		}
	}, [props.options, props.state]);


	return (
		<div className={styles.container}>
			<select className={styles.dropdown} onChange={handleChange}>
				{props.options && props.options.length > 0 &&
					props.options.map((option: any, index: number) => (
						<option className={styles.option} key={index} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
					))}
			</select>
		</div>
	)
}