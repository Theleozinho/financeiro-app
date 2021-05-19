  // Modal com objeto

  // assim, eu terei o ttoal 

  //   Modal para abrir e fechar o pop up da transação
  const modal = {
      open() {
          document.querySelector(".modal-overlay").classList.add("active");
      },
      close() {
          document
              .querySelector(".modal-overlay").classList.remove("active");


      }
  }


  const transactions = [{
          id: 1,
          description: 'luz',
          amount: -40000,
          date: '23/01/2021',
      },
      {
          id: 2,
          description: 'website',
          amount: 500000,
          date: '23/01/2021',
      },
      {
          id: 3,
          description: 'Internet',
          amount: -40000,
          date: '23/01/2021',
      }
  ]



  //   Eu preciso somar as entradas
  //   Depois eu preciso somar as saidas
  //   Remover dasentradas o valor das saídas 

  //   funcionalides do sistema
  const Transaction = {
      incomes() {
          // somar as entradas 
      },
      expanses() {
          // somar as saidas 
      },
      total() {
          //   entradas - saidas 
      }
  }



  //   Substituir os dados do html com o dados do JS

  const DOM = {
      transactionsContainer: document.querySelector('#data-table tbody'),
      addTransaction(transaction, index) {
          console.log(transaction)
          const tr = document.createElement('tr')
          tr.innerHTML = DOM.innerHTMLTransaction(transaction);
          DOM.transactionsContainer.appendChild(tr)
      },
      innerHTMLTransaction(transaction) {
          const CSSlass = transaction.amount > 0 ? "income" : "expanse"
          const HTML = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSlass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td class="date">
            <img src="assets/minus.svg" alt="remover transação">
        </td>
        `
          return HTML;
      }
  }

  // Podemos usar o for ou o for each
  //   for (let i = 0; i < 3; i++) {
  //       DOM.addTransaction(transactions[i])
  //   }

  transactions.forEach(function(transaction) {
      DOM.addTransaction(transaction)

  });