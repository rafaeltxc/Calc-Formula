import { ICQ_TABLE } from "../data/icqTable";

export const getICQLabel = (
    waist: number | null,
    hip: number | null,
    gender: string,
    age: number | null,
    icqTable: typeof ICQ_TABLE
  ): string => {
    if(!waist || !hip || !age) return 'Por favor, preencha todos os valores com números maiores que zero.'

    const icq = waist / hip;
  
    return icqTable.find(item =>
      item.gender === gender &&
      age >= item.ageMin &&
      age <= item.ageMax
    )?.risks.find(risk =>
      icq >= risk.min && (risk.max === undefined || icq <= risk.max)
    )?.label ?? 'Desconhecido';
  }
  