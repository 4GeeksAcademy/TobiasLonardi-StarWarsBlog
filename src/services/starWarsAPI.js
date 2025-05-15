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
						console.log("detail.result: ",detail.result)
						return detail.result;
					})
				)
				return charactersArray
			}
		} catch (error) {
			console.log(error)
		}

	}