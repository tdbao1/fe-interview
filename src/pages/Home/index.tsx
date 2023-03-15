import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router'
import {
  HOME_PATH,
  CLIENT_PATH,
  DASHBOARD_PATH
} from '../../constants/routes'
import './index.css'

const Application: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className="items">
        <div className="items-head">
          <p>{t('home.info')}</p>
          <hr/>
        </div>
        
        <div className="items-body">
          <div className="items-body-content" onClick={() => {
            navigate(HOME_PATH+ CLIENT_PATH)
          }}>
            <span>{t('home.clientPage')}</span>
            <i className="fa fa-angle-right"></i>
          </div>
          
          <div className="items-body-content" onClick={() => {
            navigate(HOME_PATH+ DASHBOARD_PATH)
          }}>
            <span>{t('home.dashboardPage')}</span>
            <i className="fa fa-angle-right"></i>
          </div>
          
        </div>
      </div>
    </div> 
  );
};

export default Application;