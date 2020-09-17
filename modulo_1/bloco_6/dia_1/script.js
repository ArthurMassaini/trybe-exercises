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
