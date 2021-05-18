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


  //   Eu preciso somar as entradas
  //   Depois eu preciso somar as saidas
  //   Remover dasentradas o valor das saídas 
  const transactions = [{
          id: 1,
          description: 'luz',
          amount: -40000,
          date: '23/01/2021',
      },
      {
          id: 2,
          description: 'website',
          amount: -500000,
          date: '23/01/2021',
      },
      {
          id: 3,
          description: 'Internet',
          amount: -40000,
          date: '23/01/2021',
      }
  ]


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
      innerHTMLTransaction() {
          const HTML = `
         <tr>
        <td class="description">Uber Eats</td>
        <td class="expanse">R$ 500</td>
        <td class="date">30/01/2021</td>
        <td class="date">
            <img src="assets/minus.svg" alt="remover transação">
        </td>
        </tr>
        `
      }
  }