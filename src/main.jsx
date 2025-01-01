import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CustomTheme from './theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={CustomTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
