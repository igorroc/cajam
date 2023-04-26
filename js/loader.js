const body = document.querySelector("body")
body.style.overflow = "hidden"

window.addEventListener("load", async () => {
	await setTimeout(() => {
		const loader = document.querySelector("#loader")
		loader.classList.add("loaded")
		body.style.overflow = ""
	}, 1000)
})
