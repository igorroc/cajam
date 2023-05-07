const newsWrapper = document.querySelector("#news-wrapper")

const news = [
	{
		title: "Segundo Seminário IBADPP",
		image: "https://dl1.instavideosave.com/?url=https%3A%2F%2Fscontent-cdg4-1.cdninstagram.com%2Fv%2Ft51.36329-15%2F337336366_750535916457163_4693296022168756848_n.jpg%3Fstp%3Ddst-jpg_s640x640%26_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D8ae9d6%26_nc_ohc%3DODKlN0o8X3MAX_3ypyx%26_nc_ht%3Dscontent-cdg4-1.cdninstagram.com%26oh%3D00_AfDyRkeGVk93OG4W2Lt-dqr28cWza_MXHxEsefV3MSjWkg%26oe%3D644DD9C4&type=mp4&dlheader=image/jpeg&title=62600680960",
		url: "https://instagram.com/ibadpp?igshid=YmMyMTA2M2Y=",
		date: "25/05/2023",
		content:
			"O Instituto Baiano de Direito Processual Penal (IBADPP) realizará o segundo seminário regional na UESC nos dias 25 e 26 de maio, realizando a sua inscrição para garantir a sua vaga.",
	},
	{
		title: "Eleições para o Centro Acadêmico",
		image: "https://drive.google.com/u/0/uc?id=1rEn5yMmjil-JMyWPIq9H0eNEyA21vole&export=download",
		date: "05/05/2023",
		content:
			"Conheça os integrantes e propostas da chapa 02, as eleições irão acontecer no dia 05 de Maio, leve a sua identidade com foto e vote certo na urna.",
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
