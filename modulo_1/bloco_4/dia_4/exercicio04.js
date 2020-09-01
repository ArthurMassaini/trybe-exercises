//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

j = 0;

for (let i in info) {
  if (j == 0) {
    console.log("Valores:");
  }
  console.log(info[i]);
  j += 1;
}
