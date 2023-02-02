window.addEventListener("load", async () => {
	await setTimeout(() => {
		const loader = document.querySelector("#loader")
		loader.classList.add("loaded")
	}, 1000)
})
