import { LoginUserProps, GetUserDataProps } from "@/app/Type";

export async function LoginUser(props: LoginUserProps) {

const response = await fetch( `https://us.battle.net/oauth/token?grant_type=authorization_code&code=${props.user}&redirect_uri=${props.redirect_uri}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + Buffer.from(props.bnet_id + ':' + props.bnet_secret).toString('base64')
		}
	})
	const formattedResponse = response.json()
	return formattedResponse
}

export async function GetUserData(props: GetUserDataProps) {

	const response = await fetch(`https://us.api.blizzard.com/profile/user/wow/collections/mounts?access_token=${props.access_token}&namespace=profile-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	const formattedResponse = response.json()
	return formattedResponse
}