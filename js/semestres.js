const semestres = [
	{
		title: "1º Semestre",
		lista: [
			{
				name: "Introdução ao Direito",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1introducao_direito.pdf",
			},
			{
				name: "Elementos de Sociologia e Antropologia Jurídicas",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1elementos_sociologia_antropologia_juridicas.pdf",
			},
			{
				name: "Teoria do Estado e Ciência Política",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1teoria_estado_ciencia_politica.pdf",
			},
			{
				name: "Redação Jurídica",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1redacao_juridica.pdf",
			},
			{
				name: "Metodologia da Pesquisa",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1metodologia_pesquisa.pdf",
			},
			{
				name: "Filosofia do Direito",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/1filosofia_direito.pdf",
			},
		],
	},
	{
		title: "2º Semestre",
		lista: [
			{
				name: "Direito Civil I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2direito_civil1.pdf",
			},
			{
				name: "Hermenêutica Jurídica",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2hermeneutica_juridica.pdf",
			},
			{
				name: "Economia Política",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2economia_politica.pdf",
			},
			{
				name: "Ética Geral e Profissional",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2etica_geral_profissional.pdf",
			},
			{
				name: "Psicologia Aplicada ao Direito",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2psicologia_aplicada_direito.pdf",
			},
			{
				name: "História e Direito",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/2historia_direito.pdf",
			},
		],
	},
	{
		title: "3º Semestre",
		lista: [
			{
				name: "Direito Constitucional I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/3direito_constitucional_1.pdf",
			},
			{
				name: "Direito Empresarial I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/3direito_empresarial_1.pdf",
			},
			{
				name: "Teoria Geral do Processo",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/3teoria_geral_processo.pdf",
			},
			{
				name: "Direito Civil II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/3direito_civil_2.pdf",
			},
			{
				name: "Direito Penal I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/3direito_penal_1.pdf",
			},
			{
				name: "Lógica Digital II",
				link: "../files/ementas/3/Logica_digital_II.pdf",
			},
		],
	},
	{
		title: "4º Semestre",
		lista: [
			{
				name: "Direito Empresarial II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/4direito_empresarial_2.pdf",
			},
			{
				name: "Direito Constitucional II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/4direito_constitucional_2.pdf",
			},
			{
				name: "Direito Civil III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/4direito_civil_3.pdf",
			},
			{
				name: "Direito Processual Civil I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/4direito_processual_civil_1.pdf",
			},
			{
				name: "Direito Penal II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/4direito_penal_2.pdf",
			},
		],
	},
	{
		title: "5º Semestre",
		lista: [
			{
				name: "Direito Processual Civil II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_processual_civil_2.pdf",
			},
			{
				name: "Direito Administrativo I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_administrativo_1.pdf",
			},
			{
				name: "Direito Civil IV",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_civil_4.pdf",
			},
			{
				name: "Direito Empresarial III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_empresarial_3.pdf",
			},
			{
				name: "Direito do Trabalho I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_trabalho_1.pdf",
			},
			{
				name: "Direito Penal III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/5direito_penal_3.pdf",
			},
		],
	},
	{
		title: "6º Semestre",
		lista: [
			{
				name: "Direito Processual Civil III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_processual_civil_3.pdf",
			},
			{
				name: "Direito Processual Penal I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_processual_penal_1.pdf",
			},
			{
				name: "Direito Civil V",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_civil_5.pdf",
			},
			{
				name: "Direito Penal IV",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_penal_4.pdf",
			},
			{
				name: "Direito Administrativo II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_administrativo_2.pdf",
			},
			{
				name: "Direito do Trabalho II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/6direito_trabalho_2.pdf",
			},
		],
	},
	{
		title: "7º Semestre",
		lista: [
			{
				name: "Direito Financeiro",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/7direito_financeiro.pdf",
			},
			{
				name: "Direito Processual Penal II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/7direito_processual_penal_2.pdf",
			},
			{
				name: "Direito Tributário I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/7direito_tributario_1.pdf",
			},
			{
				name: "Direito Civil VI",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/7direito_civil_6.pdf",
			},
			{
				name: "Medicina Legal",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/7medicina_legal.pdf",
			},
		],
	},
	{
		title: "8º Semestre",
		lista: [
			{
				name: "Direito Processual Penal III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8direito_processual_penal_3.pdf",
			},
			{
				name: "Direito Municipal",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8direito_municipal.pdf",
			},
			{
				name: "Direito Ambiental",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8direito_ambiental.pdf",
			},
			{
				name: "Direito Tributário II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8direito_tributario_2.pdf",
			},
			{
				name: "Prática Jurídica I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8pratica_juridica_1.pdf",
			},
			{
				name: "Prática de Estágio Supervisionado - ESAD I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/8esad_1.pdf",
			},
		],
	},
	{
		title: "9º Semestre",
		lista: [
			{
				name: "Prática Jurídica II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9pratica_juridica_2.pdf",
			},
			{
				name: "Prática de Estágio Supervisionado - ESAD II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9esad_2.pdf",
			},
			{
				name: "Orientação do Trabalho Monográfico I",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9orientacao_trabalho_monografico_1.pdf",
			},
			{
				name: "Direito Internacional Publico e Privado",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9direito_internacional_publico_privado.pdf",
			},
			{
				name: "Direito Processual do Trabalho",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9direito_processual_trabalho.pdf",
			},
			{
				name: "Direito Agrário",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/9direito_agrario.pdf",
			},
		],
	},
	{
		title: "10º Semestre",
		lista: [
			{
				name: "Prática Jurídica III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/10pratica_juridica_3.pdf",
			},
			{
				name: "Prática de Estágio Supervisionado - ESAD III",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/10esad_3.pdf",
			},
			{
				name: "Orientação do Trabalho Monográfico II",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/10orientacao_trabalho_monografico_2.pdf",
			},
			{
				name: "Direito da Criança e do Adolescente",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/10direito_crianca_adolescente.pdf",
			},
		],
	},
	{
		title: "Optativas",
		lista: [
			{
				name: "Direito Coletivo do Trabalho",
			},
			{
				name: "Direito Econômico",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_economico.pdf",
			},
			{
				name: "Direito Bancário e Mercado de Capitais",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_bancario_mercado_capitais.pdf",
			},
			{
				name: "Seguridade Social",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_seguridade_social.pdf",
			},
			{
				name: "Temas Especiais de Direito Civil",
			},
			{
				name: "Língua Brasileira de Sinais - LIBRAS",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_lingua_brasileira_sinais.pdf",
			},
			{
				name: "Direito do Consumidor",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_consumidor.pdf",
			},
			{
				name: "Temas Especiais de Direito Penal",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_temas_especiais_direito_penal.pdf",
			},
			{
				name: "Direito Urbanístico",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_urbanistico.pdf",
			},
			{
				name: "Temas Especiais de Direito do Trabalho",
			},
			{
				name: "Criminologia",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_criminologia.pdf",
			},
			{
				name: "Direito e Inclusão",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_inclusao.pdf",
			},
			{
				name: "Teoria dos Direitos Difusos e Coletivos",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_teoria_direitos_difusos_coletivos.pdf",
			},
			{
				name: "Soluções Alternativas de Conflitos",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_solucoes_alternativas_conflitos.pdf",
			},
			{
				name: "Temas Especiais de Direito Constitucional",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_temas_especiais_direito_constitucional.pdf",
			},
			{
				name: "Direito Eleitoral",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_direito_eleitoral.pdf",
			},
			{
				name: "Direitos Humanos",
			},
			{
				name: "Leitura e Produção de Textos Jurídicos",
				link: "http://www.uesc.br/cursos/graduacao/bacharelado/direito/arquivos/op_leitura_producao_textos_juridicos.pdf",
			},
		],
	},
]

const lista = document.querySelector("#listaSemestres")

semestres.forEach((semestre, index) => {
	const card = document.createElement("div")
	card.classList.add("card", "scrollAnimation")
	card.style.transitionDelay = `${index * 100}ms`
	card.innerHTML = `<h2>${semestre.title}</h2>`

	const ul = document.createElement("ul")
	semestre.lista.forEach((disciplina) => {
		const link = document.createElement("a")
		const span = document.createElement("span")

		span.innerHTML = disciplina.name
		link.appendChild(span)

		if (disciplina.link !== undefined) {
			const icon = document.createElement("iconify-icon")
			icon.setAttribute("icon", "akar-icons:download")
			link.appendChild(icon)
			link.href = disciplina.link
			link.target = "_blank"
		}

		ul.appendChild(link)
	})

	if (semestre.title === "Optativas") {
		const divBreak = document.createElement("div")
		divBreak.classList.add("break")
		lista.appendChild(divBreak)
	}

	card.appendChild(ul)
	lista.appendChild(card)
})
