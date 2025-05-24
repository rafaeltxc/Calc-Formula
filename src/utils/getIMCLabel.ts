import { IMC_TABLE } from '../data/imcTable';

export const getIMCLabel = (
  weight: number | null,
  heightCm: number | null,
  imcTable: typeof IMC_TABLE
): string => {
  if (!weight || !heightCm)
    return 'Por favor, preencha todos os valores com números maiores que zero.';

  const heightMeters = heightCm / 100;
  const imc = weight / (heightMeters * heightMeters);

  return (
    imcTable.find(
      (item) => imc >= item.min && (item.max === undefined || imc <= item.max)
    )?.imc ?? 'Desconhecido'
  );
};
