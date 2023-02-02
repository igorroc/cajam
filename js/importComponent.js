const elements = document.querySelectorAll("import")

async function fetchComponent(relative, path) {
	const response = await fetch(relative + "components/" + path)
	const text = await response.text()
	return text
}

async function main() {
	for (let element of elements) {
		const path = element.getAttribute("path")
		const relative = element.getAttribute("relative-path")
		const importedElement = await fetchComponent(relative, path)
		const props = element.getAttribute("props")

		if (props) {
			console.log(props)
			const propsObj = JSON.parse(props)
			console.log(propsObj)
			// for (let key in propsObj) {
			// 	const value = propsObj[key]

			// 	console.log(value, regex)
			// }
		}

		element.insertAdjacentHTML("afterend", importedElement)
	}
}

main()
