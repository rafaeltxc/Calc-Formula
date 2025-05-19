import React from 'react';
import DefaultInput from './components/DefaultInput';
import { StyleEnum } from './types/enums/StyleEnum';
import "./css/App.css"

const App: React.FC = () => {
  return (
    <>
      <div className="central">
        <DefaultInput
          fontSize={16}
          width={300}
          height={60}
          type={StyleEnum.String}
          placeholder="12345"
        />

                aaaaa

        <DefaultInput
          fontSize={16}
          width={300}
          height={60}
          type={StyleEnum.Number}
          placeholder="12345"
        />
      </div>
    </>
  );
};

export default App;
