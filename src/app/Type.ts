export interface TextProps {
	text: string
}

export interface TitleProps {
	image: any
	title: string
}

export interface InputProps {
	default?: number
	isInteger: boolean
	buttonText: string
	action: Function
}

export interface PickerProps {
	icons: any
}

export interface ButtonProps {
	text: string
	link?: string
	action?: any
}

export interface LoginProps {
	bnet_id: any
	redirect_uri: any
}

export interface LoginUserProps {
	user: string
	bnet_id: any
	redirect_uri: any
	bnet_secret: any
}

export interface RequestProps {
	access_token: string
}

export interface CharacterProps {
	accountData: any
}
export interface InstanceProps {
	instanceData: Object
}

export interface DropdownProps {
	setState: Function
	options: any
}