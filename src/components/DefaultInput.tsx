import React, { useState } from 'react';
import { Input } from 'antd';
import { StyleEnum } from '../types/enums/StyleEnum';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

interface DefaultInputProps {
  fontSize: number;
  width: number;
  height: number;
  type: StyleEnum;
  placeholder: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  fontSize,
  width,
  height,
  type,
  placeholder,
}) => {
  const [value, setValue] = useState('');

  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <>
      {type === StyleEnum.String ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          style={{ width, height, fontSize }}
        />
      ) : (
        <Input.OTP
          length={4}
          formatter={(str) => str.replace(/\D/g, '')}
          separator={(index) => (index === 1 ? <span>.</span> : null)}
          {...sharedProps}
        />
      )}
    </>
  );
};

export default DefaultInput;

