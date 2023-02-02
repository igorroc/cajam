const elements = document.querySelectorAll("import")

async function fetchComponent(path) {
	const response = await fetch("/components/" + path)
	const text = await response.text()
	return text
}

async function main() {
	for (let element of elements) {
		const path = element.getAttribute("path")
		const importedElement = await fetchComponent(path)
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

		element.innerHTML = importedElement
	}
}

main()
