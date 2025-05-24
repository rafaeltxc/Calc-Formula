type Result = {icq: string, imc: string, iac: string}

export const generateWhatsAppLink = (name: string, phone: string, result: Result) => {
const message = `Oi ${name}, segue o resultado da nossa avaliação física de hoje. Espero que tenha gostado!

Resultado:
ICQ: ${result.icq}
IMC: ${result.imc}
IAC: ${result.iac}

`;

  const encodedMessage = encodeURIComponent(message);

  return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
}