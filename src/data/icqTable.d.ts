import { EICQRiskLabel } from "../enums/ERiskLabel.enum";
export declare const ICQ_TABLE: {
    gender: string;
    ageMin: number;
    ageMax: number;
    risks: ({
        label: EICQRiskLabel;
        min: number;
        max: number;
    } | {
        label: EICQRiskLabel;
        min: number;
        max?: undefined;
    })[];
}[];
//# sourceMappingURL=icqTable.d.ts.map