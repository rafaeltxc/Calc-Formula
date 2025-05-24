import { EICQRiskLabel } from '../enums/ERiskLabel.enum';

export const ICQ_TABLE = [
  {
    gender: 'male',
    ageMin: 20,
    ageMax: 29,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.82 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.83, max: 0.88 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.89, max: 0.94 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.95 },
    ],
  },
  {
    gender: 'male',
    ageMin: 30,
    ageMax: 39,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.83 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.84, max: 0.91 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.92, max: 0.96 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.97 },
    ],
  },
  {
    gender: 'male',
    ageMin: 40,
    ageMax: 49,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.87 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.88, max: 0.95 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.96, max: 1.0 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 1.01 },
    ],
  },
  {
    gender: 'male',
    ageMin: 50,
    ageMax: 59,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.89 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.9, max: 0.96 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.97, max: 1.02 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 1.03 },
    ],
  },
  {
    gender: 'male',
    ageMin: 60,
    ageMax: 69,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.9 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.91, max: 0.98 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.99, max: 1.03 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 1.04 },
    ],
  },
  {
    gender: 'female',
    ageMin: 20,
    ageMax: 29,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.7 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.71, max: 0.77 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.78, max: 0.82 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.83 },
    ],
  },
  {
    gender: 'female',
    ageMin: 30,
    ageMax: 39,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.71 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.72, max: 0.78 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.79, max: 0.84 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.85 },
    ],
  },
  {
    gender: 'female',
    ageMin: 40,
    ageMax: 49,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.72 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.73, max: 0.79 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.8, max: 0.87 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.88 },
    ],
  },
  {
    gender: 'female',
    ageMin: 50,
    ageMax: 59,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.73 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.74, max: 0.81 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.82, max: 0.88 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.89 },
    ],
  },
  {
    gender: 'female',
    ageMin: 60,
    ageMax: 69,
    risks: [
      { label: EICQRiskLabel.LOW_RISK, min: 0, max: 0.75 },
      { label: EICQRiskLabel.MODERATE_RISK, min: 0.76, max: 0.83 },
      { label: EICQRiskLabel.HIGH_RISK, min: 0.84, max: 0.9 },
      { label: EICQRiskLabel.VERY_HIGH_RISK, min: 0.91 },
    ],
  },
];
