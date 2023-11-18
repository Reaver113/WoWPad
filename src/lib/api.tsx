import { LoginUserProps, RequestProps } from "@/app/Type";

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

export async function GetUserData(props: RequestProps) {

	const response = await fetch(`https://us.api.blizzard.com/profile/user/wow?access_token=${props.access_token}&namespace=profile-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	const formattedResponse = response.json()
	return formattedResponse
}

export async function GetClassicData(props: RequestProps) {

	const Classic = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/68?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return Classic.json()
}

export async function GetBurningCrusadeData(props: RequestProps) {

	const BurningCrusade = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/70?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return BurningCrusade.json()
}

export async function GetWrathOfTheLichKingData(props: RequestProps) {

	const WrathOfTheLichKing = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/72?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return WrathOfTheLichKing.json()
}

export async function GetCataclysmData(props: RequestProps) {

	const Cataclysm = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/73?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return Cataclysm.json()
}


export async function GetMistsOfPandariaData(props: RequestProps) {

	const MistsOfPandaria = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/74?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return MistsOfPandaria.json()
}

export async function GetWarlordsOfDraenorData(props: RequestProps) {

	const WarlordsOfDraenor = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/124?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return WarlordsOfDraenor.json()
}

export async function GetLegionData(props: RequestProps) {

	const Legion = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/395?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return Legion.json()
}

export async function GetBattleForAzerothData(props: RequestProps) {

	const BattleForAzeroth = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/396?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return BattleForAzeroth.json()
}

export async function GetShadowlandsData(props: RequestProps) {

	const Shadowlands = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/499?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return Shadowlands.json()
}

export async function GetDragonflightData(props: RequestProps) {

	const Dragonflight = await fetch(`https://us.api.blizzard.com/data/wow/journal-expansion/503?access_token=${props.access_token}&namespace=static-us&locale=en_US`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
	}
})
	return Dragonflight.json()
}