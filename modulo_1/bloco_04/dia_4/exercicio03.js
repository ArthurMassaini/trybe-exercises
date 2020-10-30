//Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
j = 0;
for (let i in info) {
  if (j == 0) {
    console.log("Chaves:");
  }
  console.log(i);
  j += 1;
}
