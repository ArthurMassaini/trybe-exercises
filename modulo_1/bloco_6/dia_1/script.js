function addEstados() {
  let select = document.querySelector('#state');
  let estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    'DF',
  ];

  for (let i in estados) {
    let option = document.createElement('option');
    select.appendChild(option);
    option.innerHTML = estados[i];
  }
}
addEstados();

function verificaData() {
  let dia = '';
  let mes = '';
  let ano = '';
  let data = document.querySelector('#data');
  let re = new RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4}');
  if (data.value.search(re) == 0) {
    for (let i = 0; i < 2; i += 1) {
      dia = dia + data.value[i];
    }
    dia = parseInt(dia);
    for (let i = 3; i < 5; i += 1) {
      mes = mes + data.value[i];
    }
    mes = parseInt(mes);
    for (let i = 6; i < 10; i += 1) {
      ano = ano + data.value[i];
    }
    ano = parseInt(ano);

    if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano < 0) {
      data.value = data.value;
    } else {
      alert('Data inválida!');
      data.value = '';
    }
  }
}

let buttonEnviar = document.querySelector('#button-enviar');
buttonEnviar.addEventListener('click', verificaData);
