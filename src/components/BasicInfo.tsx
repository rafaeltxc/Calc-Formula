import React, { useEffect, useState } from 'react';
import { Input, Typography, Select, Space, InputNumber } from 'antd';
import { BasicComponentLayout } from './BasicComponentLayout';
import { whatsappContacts } from '../data/whatsappContacts';

interface BasicInfoProps {
  name: string;
  gender: string;
  age: number | null;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  setGender: (value: string) => void;
  setAge: (value: number | null) => void;
}

export const BasicInfo: React.FC<BasicInfoProps> = ({
  name,
  gender,
  age,
  setName,
  setPhone,
  setGender,
  setAge,
}) => {
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const contactNames = whatsappContacts.map((contact) => ({
    label: contact.name,
    value: contact.name,
  }));

  useEffect(() => {
    const fullPhone = `+55${phoneCode}${phoneNumber.replace(/\D/g, '')}`;
    setPhone(fullPhone);
  }, [phoneCode, phoneNumber, setPhone]);

  const handleSelectName = (selectedName: string) => {
    setName(selectedName);
    const selectedContact = whatsappContacts.find(
      (c) => c.name === selectedName
    );
    if (selectedContact) {
      const { code, number } = selectedContact.phone;
      setPhoneCode(code);
      setPhoneNumber(number);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '80%' }}>
      <BasicComponentLayout title="Nome">
        <Select
          options={contactNames}
          value={name}
          onChange={handleSelectName}
          placeholder="Selecione um contato"
          size="large"
          style={{ width: '100%' }}
        />
      </BasicComponentLayout>
      <BasicComponentLayout title="Celular (Whatsapp)">
        <Input
          addonBefore={
            <Select
              style={{ width: 70 }}
              size="large"
              value={phoneCode}
              onChange={setPhoneCode}
            >
              <Select.Option value="11">11</Select.Option>
              <Select.Option value="14">14</Select.Option>
              <Select.Option value="19">19</Select.Option>
              <Select.Option value="21">21</Select.Option>
            </Select>
          }
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          size="large"
        />
      </BasicComponentLayout>
      <BasicComponentLayout title="Gênero">
        <Select
          value={gender}
          onChange={setGender}
          style={{ width: '100%' }}
          size="large"
        >
          <Select.Option value="male">Masculino</Select.Option>
          <Select.Option value="female">Feminino</Select.Option>
        </Select>
      </BasicComponentLayout>
      <BasicComponentLayout title="Idade">
        <InputNumber
          size="large"
          value={age}
          onChange={setAge}
          min={0}
          style={{ width: '100%' }}
          controls={false}
          stringMode
          suffix={
            <Typography.Text style={{ fontSize: '18px' }}>anos</Typography.Text>
          }
        />
      </BasicComponentLayout>
    </Space>
  );
};
