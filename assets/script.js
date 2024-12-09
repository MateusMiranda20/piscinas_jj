const client = [
    {name: "Joao gomes", text: "Depois de tanto procurar, finalmente achei um atendimento de qualidade!", star: "⭐⭐⭐⭐⭐"},
    {name: "Mateus Miranda", text: "Recomendo para todos! Muito dedicado e atencioso.", star: "⭐⭐⭐⭐⭐"},
    {name: "Larrisa Oliveira", text: "Superou minhas expectativas, exclente profissional e um atendimento incrivel!", star: "⭐⭐⭐⭐⭐"},
];

const cardContainer = document.getElementById('cards')



const cardsHTML = client.map(cliente => `
    <div class="card-depoiments">
      <p>"${cliente.text}"</p>       
      <h3> - ${cliente.name}</h3>
      <p>${cliente.star}</p>
    </div>
  `);

  // Inserir os cards no HTML
  cardContainer.innerHTML = cardsHTML.join('');