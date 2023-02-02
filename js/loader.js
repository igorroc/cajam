window.addEventListener("load", async () => {
	await setTimeout(() => {
		console.log("loaded")
		const loader = document.querySelector("#loader")
		console.log(loader)
		loader.classList.add("loaded")
	}, 1000)
})
