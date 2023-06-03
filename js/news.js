const newsWrapper = document.querySelector("#news-wrapper")

fetch("../noticias.json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data)

		const newsHTML = data.map((newsItem) => {
			return `
        <div class="news-item">
		<div class="item-image">
		<img src="${newsItem.image}" />
		</div>
		<div class="item-content">
                <span>${newsItem.date}</span>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.content}</p>
				${newsItem.url && `<a href=${newsItem.url}>Saiba mais</a>`}
				</div>
				</div>
				`
		})

		newsWrapper.innerHTML = newsHTML.join("")
	})
