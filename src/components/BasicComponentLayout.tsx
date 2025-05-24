import React from 'react';
import { Typography } from "antd"

interface BasicComponentLayoutProps {
   title: string;
   children: React.ReactNode;
  }

export const BasicComponentLayout: React.FC<BasicComponentLayoutProps>  = ({title, children}) => (
    <div style={{ marginBottom: '20px' }}>
        <Typography.Title level={3} style={{fontWeight: 'bold', marginBottom: 0}}>{title}</Typography.Title><br />
            {children}
    </div>
)