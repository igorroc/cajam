const newsWrapper = document.querySelector("#news-wrapper")

const news = [
	{
		title: "Eleições para o Centro Acadêmico",
		image: "https://drive.google.com/u/0/uc?id=1rEn5yMmjil-JMyWPIq9H0eNEyA21vole&export=download",
		date: "05/05/2023",
		content:
			"Conheça os integrantes e propostas da chapa 02, ainda não há uma data para a eleição, leve a sua identidade com foto e vote certo na urna.",
	},
	{
		title: "dicas_salobrinho",
		image: "https://drive.google.com/u/0/uc?id=1mBhXHVNLypL3WtW1y6ewZpn_dWytFCsl&export=download",
		url: "https://instagram.com/dicas_salobrinho?igshid=YmMyMTA2M2Y=",
		date: "05/05/2023",
		content:
			"O dicas salobrinho é composto por cinco estudantes da UESC, mas você sabia que dois estudantes do curso de direito são administradores e fundadores da página dicas_salobrinho? Inclusive, esses dois alunos estão na nossa chapa.",
	},
]

const newsHTML = news.map((newsItem) => {
	if (!newsItem.url)
		return `
        <div class="news-item">
			<div class="item-image">
                <img src="${newsItem.image}" />
			</div>
            <div class="item-content">
                <span>${newsItem.date}</span>
                <h2>${newsItem.title}</h2>
                <p>${newsItem.content}</p>
            </div>
        </div>
    `
	return `
        <div class="news-item">
			<div class="item-image">
				<img src="${newsItem.image}" />
			</div>
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
