const tblColegiado = document.querySelector("#tableColegiado .content")

fetch("../composicao.json")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((membro) => {
			const row = `<div class="card">
		${
			membro.imagem
				? `<div class="img">
						<img src="${membro.imagem}"/>
					</div>`
				: ""
		}
		
		<div class="info">
			<span class="cargo">${membro.cargo}</span>
			<span class="name">
				${membro.nome}
				•
				<span>${membro.idade} anos</span>
			</span>
			
			<p>${membro.mensagem}</p>
			${
				membro.instagram
					? `<a href="https://instagram.com/${membro.instagram}" target="__blank">
							<iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
							${membro.instagram}
						</a>`
					: ""
			}
			
		</div>
	</div>`

			tblColegiado.innerHTML += row
		})
	})
