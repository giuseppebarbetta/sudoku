<body>
  <h1>Basic Sudoku</h1>
  <p>Um dos mais famosos jogos do mundo, desenvolvido em React + Vite e estilizado com styled components trazendo uma performace eficiênte com fácil manuteção. Por enquanto a aplicação conta com números fixos, criando um desafio limitado.</p><br>
  <p>Deploy:  <a href='https://sudoku-basic-app.netlify.app/'>Clique aqui</a></p>

  <h2>Funcionalidades</h2>
  <ul>
      <li><strong>Checar:</strong> Verifica se o jogo finalizou, se falta preencher algum espaço ou algum espaço está preenchido incorretamente.</li>
      <li><strong>Resolver:</strong> Mostra a resposta do Sudoku.</li>
      <li><strong>Reiniciar:</strong> Reinicia do zero a aplicação.</li>
      <li><strong>Lógica:</strong> Inputs ativos (deve inserir números para completar o Sudoku) e inativos (Números que fazem parte da lógica do Sudoku para que seja mais possível uma resolução).</li>
  </ul><br>

  <h2>Previa:</h2>

  <div>
  <img src='https://github.com/giuseppebarbetta/sudoku/assets/148505073/7812372c-d11c-4ce9-83df-425d6002d31b' alt='preview interface insta album' />


  </div>

  <h2>Tecnologias Utilizadas</h2>
  <div display: flex>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="98px" height="26px" alt='React logo'> 
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" width="98px" height="26px" alt='CSS logo'>
  </div><br>

  <h2>Estrutura do Projeto</h2>
  <p>Principais pastas e arquivos</p>

  <pre>
  sudoku/
  │
  └── scr/ (Pasta principal onde a maior parte dos conteúdos da aplicação se encontram)
    ├── components (Contém os componentes React utilizados na criação da aplicação)
    ├── container (Compilação dos components além das configurações da página principal)
    ├── styles (Arquivo CSS com as principais estilizações)
    ├── utils (Arquivo com função que é utilizadas por muitas vezes)
   └── index.html (Conté a estrutura básica do site)
  </pre>

  <h2>Como Utilizar</h2>
  <ol>
      <li>Clone este repositório: <code>git clone https://github.com/giuseppebarbetta/sudoku</code></li>
      <li>Instale as dependências com <code>yarn</code>.</li>
      <li>Inicie ambos os projetos com <code>yarn dev</code> pelo terminal.</li>
  </ol><br>

  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de pull.</p><br>

  <h2>Autor</h2>

  <p>Este projeto foi desenvolvido por Giuseppe Barbetta. ©</p>
</body>

</html>
