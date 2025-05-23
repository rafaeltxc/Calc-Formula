import { EIACRiskLabel } from '../enums/ERiskLabel.enum';

export const IAC_TABLE = [
  {
    gender: 'male',
    min: 6,
    max: 10,
    imc: EIACRiskLabel.VERY_LOW,
  },
  {
    gender: 'male',
    min: 11,
    max: 14,
    imc: 'Baixa',
  },
  {
    gender: 'male',
    min: 15,
    max: 18,
    imc: 'Ideal',
  },
  {
    gender: 'male',
    min: 19,
    max: 24,
    imc: 'Moderada',
  },
  {
    gender: 'male',
    min: 25,
    max: 1000,
    imc: 'Excesso de gordura',
  },
  {
    gender: 'female',
    min: 10,
    max: 15,
    imc: EIACRiskLabel.VERY_LOW,
  },
  {
    gender: 'female',
    min: 16,
    max: 19,
    imc: EIACRiskLabel.LOW,
  },
  {
    gender: 'female',
    min: 20,
    max: 25,
    imc: EIACRiskLabel.NORMAL,
  },
  {
    gender: 'female',
    min: 26,
    max: 29,
    imc: EIACRiskLabel.MODERATE,
  },
  {
    gender: 'female',
    min: 30,
    max: 1000,
    imc: EIACRiskLabel.HIGH,
  },
];
