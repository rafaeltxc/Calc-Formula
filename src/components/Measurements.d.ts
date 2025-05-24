import React from 'react';
interface MeasurementsProps {
    weight: number | null;
    height: number | null;
    waist: number | null;
    hip: number | null;
    setWeight: (v: number | null) => void;
    setHeight: (v: number | null) => void;
    setWaist: (v: number | null) => void;
    setHip: (v: number | null) => void;
}
export declare const Measurements: React.FC<MeasurementsProps>;
export {};
//# sourceMappingURL=Measurements.d.ts.map