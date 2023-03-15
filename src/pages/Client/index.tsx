import {useContext} from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router';
import styles from './index.module.css'
import Button from '../../common/Button/Button'
import SocketContext from '../../contexts/socket.context';
import {
  BLUE_CLICK_EVENT,
  ORANGE_CLICK_EVENT
} from '../../constants/socket.constant'
import {
  HOME_PATH
} from '../../constants/routes'
const Client = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { socket } = useContext(SocketContext).SocketState;
  
  const handleClickOrange = () => {
    socket?.emit(ORANGE_CLICK_EVENT, {socketId: socket.id})
  }

  const handleClickBlue = () => {
    socket?.emit(BLUE_CLICK_EVENT, {socketId: socket.id})
  }

  return (
    <>
     <div className={styles['custom-link']} onClick={() => {
      navigate(HOME_PATH)
    }}> 
      {t('client.home')}
    </div>
    <div className={styles['wrapper']}>
      <Button 
        className={styles['btn-custom-orange']}
        onClick={handleClickOrange}
      >
        {t('client.orange')}
      </Button>
      <Button 
        className={styles['btn-custom-blue']}
        onClick= {handleClickBlue}
      >
        {t('client.blue')}
      </Button>
      
    </div>
   
    </>
  );
};

export default Client;
