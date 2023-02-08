const newsWrapper = document.querySelector("#news-wrapper")

const news = [
	{
		title: "Saber programar é um Super Poder?",
		image: "https://picsum.photos/400/350",
		url: "https://ilrocha.com",
		date: "07/04/2001",
		content:
			"Reprehenderit excepteur minim et Lorem qui deserunt aliquip duis adipisicing ea. Aute incididunt excepteur non consequat mollit reprehenderit eu aute nulla incididunt.",
	},
	{
		title: "Para entender um pouco mais sobre BITCOIN!",
		image: "https://picsum.photos/300/300",
		date: "12/07/2022",
		content:
			"Aute incididunt excepteur non consequat mollit reprehenderit eu aute nulla incididunt. Esse nostrud nisi exercitation qui laboris anim qui adipisicing id aute.",
	},
	{
		title: "Como não cair na sindrome do LABIRINTO?",
		image: "https://picsum.photos/400/300",
		url: "https://google.com",
		date: "01/02/2023",
		content:
			"Anim amet officia aliqua proident laboris deserunt aliqua sint pariatur anim.",
	},
]

const newsHTML = news.map((newsItem) => {
	if (!newsItem.url)
		return `
        <div class="news-item">
            <img src="${newsItem.image}" />
            <div class="item-content">
                <span>${newsItem.date}</span>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.content}</p>
            </div>
        </div>
    `
	return `
        <div class="news-item">
            <img src="${newsItem.image}" />
            <div class="item-content">
                <span>${newsItem.date}</span>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.content}</p>
                <a href=${newsItem.url}>Saiba mais</a>
            </div>
        </div>
    `
})

newsWrapper.innerHTML = newsHTML.join("")
