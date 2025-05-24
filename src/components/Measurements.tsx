import React from 'react';
import { InputNumber, Space, Typography } from 'antd';
import { BasicComponentLayout } from './BasicComponentLayout';

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

export const Measurements: React.FC<MeasurementsProps> = ({
  weight,
  height,
  waist,
  hip,
  setWeight,
  setHeight,
  setWaist,
  setHip,
}) => (
  <Space direction="vertical" style={{ width: '80%' }}>
    <BasicComponentLayout title="Peso">
      <InputNumber
        size="large"
        value={weight}
        onChange={setWeight}
        min={0}
        style={{ width: '100%' }}
        controls={false}
        stringMode
        suffix={
          <Typography.Text style={{ fontSize: '18px' }}>kg</Typography.Text>
        }
      />
    </BasicComponentLayout>
    <BasicComponentLayout title="Altura">
      <InputNumber
        size="large"
        value={height}
        onChange={setHeight}
        min={0}
        style={{ width: '100%' }}
        controls={false}
        stringMode
        suffix={
          <Typography.Text style={{ fontSize: '18px' }}>cm</Typography.Text>
        }
      />
    </BasicComponentLayout>
    <BasicComponentLayout title="Cintura">
      <InputNumber
        size="large"
        value={waist}
        onChange={setWaist}
        min={0}
        style={{ width: '100%' }}
        controls={false}
        stringMode
        suffix={
          <Typography.Text style={{ fontSize: '18px' }}>cm</Typography.Text>
        }
      />
    </BasicComponentLayout>
    <BasicComponentLayout title="Quadril">
      <InputNumber
        size="large"
        value={hip}
        onChange={setHip}
        min={0}
        style={{ width: '100%' }}
        controls={false}
        stringMode
        suffix={
          <Typography.Text style={{ fontSize: '18px' }}>cm</Typography.Text>
        }
      />
    </BasicComponentLayout>
  </Space>
);
