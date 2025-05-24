import React from 'react';
interface BasicInfoProps {
    name: string;
    gender: string;
    age: number | null;
    setName: (value: string) => void;
    setPhone: (value: string) => void;
    setGender: (value: string) => void;
    setAge: (value: number | null) => void;
}
export declare const BasicInfo: React.FC<BasicInfoProps>;
export {};
//# sourceMappingURL=BasicInfo.d.ts.map