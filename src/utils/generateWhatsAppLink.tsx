type Result = {icq: string, imc: string, iac: string}

export const generateWhatsAppLink = (name: string, phone: string, result: Result) => {
const message = `Oi ${name}, 
Foi um prazer te conhecer e realizar sua avaliação física hoje. Obrigada pelo tempo!

Como vimos, esse foram seus resultados:
ICQ: ${result.icq}
IMC: ${result.imc}
IAC: ${result.iac}

Essas informações mostram um excelente ponto de partida para construirmos juntas, um plano de treino totalmente direcionado às suas necessidades e respeitando seu ritmo.

Tenho experiência em trabalhar com mulheres na faixa dos 40 anos, fase de vida que conheço de perto, já que tenho 60 anos e sei na prática os desafios e transformações que vivenciamos. 
Por isso, ofereço um acompanhamento cuidadoso, humano e focado em resultados sustentáveis.

Se tiver interesse, posso te apresentar uma proposta de acompanhamento como personal trainer. Será um prazer te acompanhar nessa jornada!
Fico à disposição para esclarecer dúvidas ou conversar sobre como podemos seguir com esse trabalho.

Com carinho,

Angela
Personal Trainer`;

  const encodedMessage = encodeURIComponent(message);

  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}