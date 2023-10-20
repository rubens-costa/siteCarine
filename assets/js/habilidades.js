const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('#divDescricao');
const sobreSkill = [

    '<p>Palestra 06/05/2021</p> <br> <p>PubMed: Busca avançada de evidências científicas – Para Grupo de Estudo e Pesquisa em Fisiologia e Envelhecimento (GEPEFE) da Universidade Federal do Vale do São Francisco (UNIVASF).</p> <br>',
    '<p>Palestra 11/05/2023</p> <br> <p>Instrumentos para Avaliação Multidimensional do Adulto Idoso – Semana Acadêmica UNIP.</p> <br>',
    '<p>Curso 14/07/2023</p> <br> <p>Pesquisa em bases de dados em saúde (Em parceria com Iara Leal – Organização LABIAFH UPE).</p> <br>',
    '<p>Curso 21/07/2023</p> <br> <p>Pesquisa em bases de dados em saúde (Em parceria com Iara Leal – Organização LABIAFH UPE).</p> <br>',
]
const dataInicio = [
    (new Date(2021, 10, 1)).getTime(), // 0
    (new Date(2021, 10, 1)).getTime(), // 1
    (new Date(2022, 0, 1)).getTime(), // 2
    (new Date(2022, 3, 1)).getTime(), // 3
    (new Date(2022, 3, 1)).getTime(), // 4
    (new Date(2022, 1, 1)).getTime(), // 5
    (new Date(2021, 11, 1)).getTime(), // 6
    (new Date(2021, 11, 1)).getTime(), // 7
]
const dataHoje = (new Date()).getTime();

skills.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
    })
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '<p class="texto-descricao">Passe o mouse por cima de algum destaque para ler a descrição</p>';
    })
});



