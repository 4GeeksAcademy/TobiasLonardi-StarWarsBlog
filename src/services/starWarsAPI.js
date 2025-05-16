	const baseAPI = "https://www.swapi.tech/api"

    export async function loadAllCharacters() {
		try {
			const respond = await fetch(`${baseAPI}/people`)
			const data = await respond.json()
			if (respond.ok) {
				const charactersArray = await Promise.all(
					data.results.map(async (item) => {
						const res = await fetch(item.url)
						const detail = await res.json()
						return detail.result;
					})
				)
				return charactersArray
			}
		} catch (error) {
			console.log(error)
		}

	}

	export async function loadAllPlanets() {
		try {
			const respond = await fetch(`${baseAPI}/planets`)
			const data = await respond.json()
			if (respond.ok) {
				const planetsArray = await Promise.all(
					data.results.map(async (item) => {
						const res = await fetch(item.url)
						const detail = await res.json()
						return detail.result;
					})
				)
				return planetsArray
			}
		} catch (error) {
			console.log(error)
		}

	}

	