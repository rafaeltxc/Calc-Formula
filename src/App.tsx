import { Button, Input, InputNumber, message, Select, Space, Typography } from 'antd';
import React, { useState } from 'react';
import "./css/App.css";

interface RenderInputNumberProps {
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
  unit: string;
  min?: number;
  max?: number;
  step?: number;
}

const App: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('female')
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [waist, setWaist] = useState<number | null>(null);
  const [hip, setHip] = useState<number | null>(null);
  const [icq, setIcq] = useState<number | null>(null);
  const [imc, setImc] = useState<number | null>(null);
  const [iac, setIac] = useState<number | null>(null);

  const handleCalc = () => {
  const values = [waist, hip, weight, height];
  const hasInvalidValue = values.some(v => v === null || v <= 0);

  if (hasInvalidValue) {
    message.error('Por favor, preencha todos os valores com números maiores que zero.');
    return;
  }

  const w = waist as number;
  const h = hip as number;
  const wt = weight as number;
  const ht = height as number;

  const heightMeters = ht / 100;

  const icqCalc = w / h;
  const imcCalc = wt / (heightMeters * heightMeters);
  const iacCalc = (h / (heightMeters * Math.sqrt(heightMeters))) - 18;

  setIcq(icqCalc)
  setImc(imcCalc)
  setIac(iacCalc)
  };

  const sendEmail = () => {}

  const renderInputNumber = ({
    label,
    value,
    onChange,
    unit,
    min = 0,
    max,
    step = 1,
  }: RenderInputNumberProps) => (
    <div style={{ marginBottom: 16 }}>
      <Typography.Text strong>{label}</Typography.Text>
      <InputNumber
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        style={{ width: '100%' }}
        suffix={unit}
        stringMode
        controls={false}
      />
    </div>
  );

  return (
    <Space direction="vertical" size="large">
      <Typography.Title level={4}>Calculadora Física</Typography.Title>
      <div>
        <Typography.Text strong>Nome</Typography.Text><br />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Typography.Text strong>E-mail</Typography.Text><br />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Typography.Text strong>Gênero</Typography.Text><br />
        <Select defaultValue={gender}
          onChange={setGender}
        >
          <Select.Option value="male">Masculino</Select.Option>
          <Select.Option value="female">Feminino</Select.Option>
        </Select>
      </div>
      {renderInputNumber({ label: 'Peso', value: weight, onChange: setWeight, unit: 'kg', min: 0 })}
      {renderInputNumber({ label: 'Altura', value: height, onChange: setHeight, unit: 'cm', min: 0 })}
      {renderInputNumber({ label: 'Cintura', value: waist, onChange: setWaist, unit: 'cm', min: 0 })}
      {renderInputNumber({ label: 'Quadril', value: hip, onChange: setHip, unit: 'cm', min: 0 })}

      <Button type="primary" onClick={handleCalc}>
        Calcular
      </Button>
      <Button type="primary" onClick={sendEmail}>
        Enviar Resultado
      </Button>
    </Space>
  );
};

export default App;



