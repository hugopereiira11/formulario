const list = document.querySelector(".list")

fetch("tabela.json").then((response) => {
  response.json().then((dados) => {
    dados.usuarios.map((usuario) => {
      list.innerHTML += `
      <tr>
      <td>${usuario.nome}</td>
      <td>${usuario.idade} anos</td>
      <td>${usuario.func}</td>
      </tr>
      `
    })
  })
})
