import { IAC_TABLE } from "../data/iacTable";

export const getIACLabel = (
    hip: number | null,
    heightCm: number | null,
    gender: string,
    iacTable: typeof IAC_TABLE
  ): string => {
     if(!hip || !heightCm) return 'Por favor, preencha todos os valores com números maiores que zero.'

    const heightMeters = heightCm / 100;
    const iac = (hip / (heightMeters * Math.sqrt(heightMeters))) - 18;
  
    return iacTable.find(item =>
      item.gender === gender &&
      iac >= item.min && (item.max === undefined || iac <= item.max)
    )?.imc ?? 'Desconhecido';
  }
  