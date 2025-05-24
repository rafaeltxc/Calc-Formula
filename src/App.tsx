import React, { useState } from 'react';
import { Typography, Space, Button, message, Card, Col, Row, Flex } from 'antd';
import { getICQLabel } from './utils/getICQLabel';
import { getIMCLabel } from './utils/getIMCLabel';
import { getIACLabel } from './utils/getIACLabel';
import { ICQ_TABLE } from './data/icqTable';
import { IMC_TABLE } from './data/imcTable';
import { IAC_TABLE } from './data/iacTable';
import { BasicInfo } from './components/BasicInfo';
import { Measurements } from './components/Measurements';
import { CalculatorOutlined, DeleteOutlined, SendOutlined } from '@ant-design/icons';
import { generateWhatsAppLink } from './utils/generateWhatsAppLink';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [waist, setWaist] = useState<number | null>(null);
  const [hip, setHip] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('')

  const [icq, setIcq] = useState('-');
  const [imc, setImc] = useState('-');
  const [iac, setIac] = useState('-');

  const handleCalc = () => {
    const values = [waist, hip, weight, height];
    const hasInvalid = values.some(v => v === null || v <= 0);
    if (hasInvalid) {
      setErrorMessage('Erro: preencha todas as medidas comporais com números maiores que zero.');
      return;
    }

    setIcq(getICQLabel(waist, hip, gender, age, ICQ_TABLE));
    setImc(getIMCLabel(weight, height, IMC_TABLE));
    setIac(getIACLabel(hip, height, gender, IAC_TABLE));
  };

  const handleWhatsAppButtonClick = () => {
    if(!name || !phoneNumber) {
      setErrorMessage('Erro: preencha os campos de nome e celular.')
      return
    }


    if(!icq || !imc || !iac) {
      setErrorMessage('Erro: preencha todas as medidas comporais com números maiores que zero.')
      return
    }

    const link = generateWhatsAppLink(name, phoneNumber, {icq, imc, iac});
    window.electronAPI.openWhatsApp(link)
  };

  const resetFields = () => {
    setName('')
    setPhoneNumber('')
    setAge(null)
    setWeight(null)
    setHeight(null)
    setWaist(null)
    setHip(null)
    setIcq('-')
    setImc('-')
    setIac('-')
    setErrorMessage('')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '20px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography.Title level={1} style={{ textAlign: 'center', margin: '0 0 40px' }}>
        Calculadora Física
      </Typography.Title>

<div style={{border: '1px solid black', padding: '40px'}}>

      <Row
        style={{ flex: 1, marginBottom: '40px' }}
        gutter={32}
        justify="space-between"
        align="top"
      >
        <Col span={12}>
          <Typography.Title level={2} style={{margin: '0 0 20px'}}>Informações Básicas</Typography.Title>
          <BasicInfo
            name={name}
            gender={gender}
            age={age}
            setName={setName}
            setPhone={setPhoneNumber}
            setGender={setGender}
            setAge={setAge}
          />
        </Col>
        <Col span={12}>
          <Typography.Title level={2} style={{margin: '0 0 20px'}}>Medidas Corporais</Typography.Title>
          <Measurements
            weight={weight}
            height={height}
            waist={waist}
            hip={hip}
            setWeight={setWeight}
            setHeight={setHeight}
            setWaist={setWaist}
            setHip={setHip}
          />
        </Col>
      </Row>
      <Typography.Text type="danger" style={{ visibility: errorMessage ? 'visible' : 'hidden', fontSize: '24px' }}>{errorMessage || 'texto'}</Typography.Text>
      <Row style={{marginTop: '40px'}}>
        <Col span={24}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Card title={
              <Flex justify='space-between'>
                <Typography.Title level={2}>Resultado</Typography.Title>
                <Space>
                  <Button type="primary" onClick={handleCalc}  size='large' style={{fontSize: '24px'}} icon={<CalculatorOutlined />}>
                    Calcular
                  </Button>
                  <Button onClick={handleWhatsAppButtonClick}  size='large' style={{fontSize: '24px' , margin: '20px'}} icon={<SendOutlined />}>
                    Enviar
                  </Button>
                  <Button onClick={resetFields} color="danger" variant="outlined"  size='large' style={{fontSize: '24px'}} icon={<DeleteOutlined />}>
                    Resetar
                  </Button>
                </Space>
              </Flex>
              }>
            <Space direction='vertical'>
              <Typography.Text style={{fontSize: '24px'}}><strong>ICQ: </strong> {icq}</Typography.Text>
              <Typography.Text style={{fontSize: '24px', margin: '20px 0'}}><strong>IMC: </strong> {imc}</Typography.Text>
              <Typography.Text style={{fontSize: '24px'}}><strong>IAC: </strong> {iac}</Typography.Text>
            </Space>
            </Card>
            
          </div>
        </Col>
      </Row>
</div>
    </div>
  );
};

export default App;