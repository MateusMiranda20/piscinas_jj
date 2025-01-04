const client = [
    {name: "Joao gomes", text: "Depois de tanto procurar, finalmente achei um atendimento de qualidade!", star: "⭐⭐⭐⭐⭐"},
    {name: "Lara Gonçalves", text: "Recomendo para todos! Muito dedicado e atencioso.", star: "⭐⭐⭐⭐⭐"},
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
  

  const form = document.getElementById('my-form');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o redirecionamento padrão

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/xannykaa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        responseMessage.style.display = 'block';
        form.reset(); // Limpa o formulário
      } else {
        alert('Ocorreu um erro. Tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão. Verifique sua internet.');
    }
  });