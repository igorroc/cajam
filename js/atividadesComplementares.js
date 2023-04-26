const atividades = [
	{
		type: "Participação",
		title: "Projeto de Pesquisa",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "Projeto de Extensão",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "Projeto de Iniciação à Docência",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "Eventos da área de Direito e afins",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "como aluno aprovado em disciplina de qualquer Departamento e não obrigatória no Curso de Direito",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "Trabalho voluntário",
		description: "até 60 horas",
	},
	{
		type: "Publicação",
		title: "Artigo em periódico indexado ou evento científico",
		description: "até 60 horas (5h por unidade)",
	},
	{
		type: "Participação",
		title: "Mini-cursos organizados pelo DCJUR e por outros Departamentos ou Entidades",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "como aluno ouvinte em disciplinas de cursos Lato Sensu",
		description: "até 60 horas",
	},
	{
		type: "Estágio",
		title: "Supervisionado não-obrigatório, na forma da Resolução CONSEPE nº 33/2009",
		description: "até 60 horas",
	},
	{
		type: "Participação",
		title: "atividades típicas da área",
		description:
			"(Júris, audiências, diligências, sessões de julgamento, processos administrativos, etc.), desde que não computados para horas de Estágio Supervisionado e atestados pela Coordenação de Estágio. Até 60 horas",
	},
]

const lista = document.querySelector("#listaAtividades")

atividades.forEach((atv) => {
	const card = document.createElement("div")
	card.classList.add("card")
	card.innerHTML += `<img src="../assets/lab/pc.png"/>`
	card.innerHTML += `<h2>${atv.type}</h2>`
	card.innerHTML += `<p>${atv.title}</p>`
	card.innerHTML += `<div class="description"><p>${atv.description}</p></div>`

	lista.appendChild(card)
})
