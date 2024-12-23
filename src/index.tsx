import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './config/i18n';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18n from './config/i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App aria-label={i18n.t('app-title')}/>
        </I18nextProvider>
    </React.StrictMode>
);
