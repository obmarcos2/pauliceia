<template>
  <div class="meu-fundo">
  
  
  
<!--
<div class="book-list">
  <h2>Livros Disponíveis</h2>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.title }} - {{ book.author }} ({{ book.year }})
    </li>
  </ul>
</div>
-->

  
  
  
  

    <div class="form-container header d-flex justify-content-center">
      <div>
        <p>Entrada de Dados de Emplacamento para o Serviço Web do Geocoding</p>
      </div>
    </div>

    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="field1">Rua</label>
            <input type="text" id="field1" v-model="fields[0].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
          <div class="col-md-3 mb-3">
            <label for="field2">Id Rua</label>
            <input type="text" id="field2" v-model="fields[1].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
          <div class="col-md-4 mb-3">
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="field4">Número Saboya</label>
            <input type="text" id="field4" v-model="fields[2].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="field4">Id Ponto (Imóvel)</label>
            <input type="text" id="field4" v-model="fields[3].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
          <div class="col-md-3 mb-3">
            <label for="field5">Metragem</label>
            <input type="text" id="field5" v-model="fields[4].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="field4">Autor</label>
            <input type="text" id="field4" v-model="fields[5].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
          <div class="col-md-4 mb-3">
            <label for="field5">Fonte</label>
            <input type="text" id="field5" v-model="fields[6].value" class="form-control" placeholder="Digite algo" autocomplete="off">
          </div>
          <div class="col-md-3 mb-3">
            <label for="field6">Data de Submissão</label>
            <input type="text" id="field6" v-model="fields[7].value" class="form-control" @input="formatDate2()" placeholder="DD/MM/YYYY" autocomplete="off">
          </div>
        </div>

        <!-- CAMPOS DINAMICOS -->
        <div style="border: 2px solid #f15a29; padding: 30px; margin: 20px;">
          <div v-for="(valor, index) in var_fields"  class="row">
            <div class="col-md-4 mb-3">
              <label for="field7">Número {{ index + 1 }}</label>
              <input type="text" v-model="valor.numero" class="form-control" placeholder="Digite algo" autocomplete="off">
            </div>

            <div class="col-md-3 mb-3">
              <label for="field8">Data Inicial</label>
              <!--input type="date" v-model="valor.dataInicial" class="form-control" placeholder="Digite algo"-->
              <input type="text" v-model="valor.dataInicial" class="form-control" @input="formatDate(index, 'dataInicial')" placeholder="DD/MM/YYYY" autocomplete="off">
            </div>

            <div class="col-md-3 mb-3">
              <label for="field9">Data Final</label>
              <input type="text" v-model="valor.dataFinal" class="form-control" @input="formatDate(index, 'dataFinal')" placeholder="DD/MM/YYYY" autocomplete="off">
            </div>

            <!--Botão de Remover linha-->
            <div class="col-md-2 mb-3 d-flex justify-content-center align-items-end">
              <button type="button" class="btn btn-circle red" @click="removeField(index)">-</button>
            </div>

          </div>

          <!-- Botão para adicionar mais campos -->
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-circle" @click="addField">+</button>
          </div>
        </div>

        
        <div class="row">

          <div class="col-md-4 mb-3 d-flex justify-content-center">
            <button type="button" class="btn btn-base" @click="resetNumbers">Limpar</button>
          </div>

          <div class="col-md-4 mb-3 d-flex justify-content-center">
            <button type="submit" class="btn btn-base">Salvar</button>
          </div>

          <div class="col-md-4 mb-3 d-flex justify-content-center">
            <button type="button" class="btn btn-base" @click="newPoint">Novo Imóvel</button>
          </div>

        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationBook',
  data() {
    return {
      fields: [
        { value: '' }, // Campo 1
        { value: '' }, // Campo 2
        { value: '' }, // Campo 3
        { value: '' }, // Campo 4
        { value: '' }, // Campo 5
        { value: '' }, // Campo 6
        { value: '' }, // Campo 7
        { value: '' }, // Campo 8
      ],

      var_fields: [
        {numero: '', dataInicial: '', dataFinal: ''}, //Primeira linha variavel
      ],
    
    
      books: [],
      
      
    };
  },
  
  
  
  created() {
    // Fazer a requisição GET para buscar os livros
    fetch('http://localhost:3000/api/books')
      .then(response => response.json())
      .then(data => {
        this.books = data;  // Armazena a lista de livros na variável 'books'
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
      });
  },
  
  
  
  
  methods: {

    addField() {
      this.var_fields.push({ numero: '', dataInicial: '', dataFinal: '' });
    },

    removeField(index) {
      this.var_fields.splice(index, 1); // Remove o campo específico com base no índice
    },

    handleSubmit() {
      console.log("Formulário enviado:", this.fields);
      console.log("Campos dinâmicos enviados:", this.var_fields);

      // Usar condicional para fazer ou não submissão!
      if(this.verifyDates() && !this.verifyEmptyInput()) {
        //alert('submissão prestes a ser feita');
        const csv = this.createCSV();
        const blob = new Blob([csv], {type: 'text/csv; charset=utf-8'}) // Binario em js generico
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        //link.download = 'dados.csv';
        link.setAttribute('download', 'dados.csv');

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        //alert('Submissão feita');
      }
      else {
        //alert('submissão cancelada');
      }
      //this.resetHeader();
      // Aqui você pode enviar os dados para uma API ou realizar outra ação
    },

    resetHeader() {
      this.fields[2].value = '';
      this.fields[3].value = '';
      this.fields[4].value = '';
    },

    resetNumbers() {
      this.var_fields =  [
        {numero: '', dataInicial: '', dataFinal: ''}, //Primeira linha variavel
      ]
    },

    newPoint() { //resetNumbers com resetHeader!
      this.resetNumbers();
      this.resetHeader();
    },

    formatDate(index, fieldDate) {
      let value = this.var_fields[index][fieldDate].replace(/\D+/g, ''); // Remove não dígitos
      
      if (value.length > 8) value = value.slice(0, 8);
      if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
      if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5);

      this.var_fields[index][fieldDate] = value;
    },

    formatDate2() {
      let data = this.fields[7].value.replace(/\D+/g, '');
      
      if (data.length > 8) data = data.slice(0, 8);
      if (data.length > 2) data = data.slice(0, 2) + '/' + data.slice(2);
      if (data.length > 5) data = data.slice(0, 5) + '/' + data.slice(5);

      this.fields[7].value = data;
    },

    verifyDates() {
      for (let i = 0; i < this.var_fields.length; i++) {
        
        let dataInicial = this.var_fields[i].dataInicial;
        let dataFinal = this.var_fields[i].dataFinal;

        if (dataInicial && dataFinal) {
          if (!this.compareDates(dataInicial, dataFinal)) {
            alert(`Erro no número ${i + 1}: A data final deve ser posterior à data inicial.`);
            return false;
          }
        }
      }
      //alert('Todas as datas estão consistentes.');
      return true;
    },

    compareDates(inicial, final) { // Verdadeiro se final mais recente que inicial
      let partesInicial = inicial.split("/");
      let partesFinal = final.split("/");

      let dataInicial = new Date(partesInicial[2], partesInicial[1] - 1, partesInicial[0]);
      let dataFinal = new Date(partesFinal[2], partesFinal[1] - 1, partesFinal[0]);

      return dataFinal >= dataInicial; //para o caso de strings vazias
    },

    verifyEmptyInput() { // Verificar se algum campo do formulário está vazio
      for(let i = 0; i < this.fields.length; i++) {
        if(this.fields[i].value == '') {
          alert('Há campos vazios!');
          return true;
        }
      }
      
      for(let i = 0; i < this.var_fields.length; i++) {
        if(this.var_fields[i].numero == '' || this.var_fields[i].dataInicial == '' || this.var_fields[i].dataFinal == '') {
          alert('Há campos vazios!');  
          return true;
        }
      }

      return false;
    },

    createCSV() {
      let csvRows = [];
      csvRows.push("Rua,Id Rua,Número Saboya,Id Ponto,Metragem,Autor,Fonte,Data,Número,Data Inicial,Data Final");
      // fields: [
      //   { value: '' }, // Campo 1
      //   { value: '' }, // Campo 2
      //   { value: '' }, // Campo 3
      //   { value: '' }, // Campo 4
      //   { value: '' }, // Campo 5
      //   { value: '' }, // Campo 6
      //   { value: '' },
      //   { value: '' }, // Campo 8
      // ], 
      //var_fields: [
      //  {numero: '', dataInicial: '', dataFinal: ''}, //Primeira linha variavel
      //],
      this.var_fields.forEach( (elem) => {
        let row = this.fields.map(f => f.value).join(',') + `,${elem.numero},${elem.dataInicial},${elem.dataFinal}`;
        csvRows.push(row);
      });

      return csvRows.join("\n");
    }
    

  }
}
</script>

<style scoped>
/* Define a posição e o tamanho do formulário */
.form-container {
  position: relative;
  width: 50%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
  border-radius: 10px;
  z-index: 10; /* Garante que o formulário fique sobre a imagem - não precisa! */
  max-height: 80%;
  overflow-y: auto; /* Rolagem vertical!*/
}

.header {
  margin: 20px auto;
  background-color: #c05a29;
  color: #FFF;
  font-family: IrisUPC;
  font-size: 40px;
}

/* Define a imagem de fundo */
.background-image {
  position: relative;
  height:300px;
  background-image: '@/views/assets/images/mapa1_1943.jpg';
  background-position: center;
  filter: blur(5px); 
}

.meu-fundo {
  height: 100%;
  background-image: url('../assets/images/mapa1_1943.jpg');
  padding: 30px;
  background-color: red;
}

/* Ajustes de espaçamento */
.mb-3 {
  margin-bottom: 1rem;
}

/* Exemplo de estilo para o label */
label {
  font-weight: bold;
  margin-bottom: 0.2rem; /* Espaçamento entre o label e a caixa de preenchimento */
  display: block; /* Garante que o label ocupe uma linha inteira */
}

/* Estilo para o botão circular */
.btn-circle {
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  line-height: 1.42857;
  display: inline-block;
  background-color: mediumturquoise;
  color: white; /* Cor do ícone */
  border: none; /* Sem borda */
}

.btn-circle.red {
  background-color: red;
  width: 40px;
  height: 40px;
  padding: 1px;
}

.btn-circle:hover {
  background-color: #0056b3; /* Cor ao passar o mouse */
}

/* MESMO ESTILO BOTAO DO header.vue, login */
.btn-base {
            color: #FFF;
            background: #f15a29;
            font-family: IrisUPC;
            font-size: 30px;
            padding: 0 20px;
            border-radius: 7.5px;
            line-height: 1;
            width: 60%;
}

</style>
