import { EIMCRiskLabel } from "../enums/ERiskLabel.enum";

export const IMC_TABLE = [{
    min: 0,
    max: 16,
    imc: EIMCRiskLabel.VERY_LOW,
  },
  {
    min: 17,
    max: 18.49,
    imc: EIMCRiskLabel.LOW,
  },
  {
    min: 18.5,
    max: 24.99,
    imc: EIMCRiskLabel.NORMAL,
  },
  {
    min: 25,
    max: 29.99,
    imc: EIMCRiskLabel.HIGH,
  },
  {
    min: 30,
    max: 34.99,
    imc: EIMCRiskLabel.OBESITY_1,
  },
  {
    min: 35,
    max: 39.99,
    imc: EIMCRiskLabel.OBESITY_2,
  },
  {
    min: 40,
    max: 1000,
    imc: EIMCRiskLabel.OBESITY_3,
  },
  ]