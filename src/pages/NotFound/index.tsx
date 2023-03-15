import { useTranslation } from "react-i18next";
import styles from './index.module.css'
const NotFound = () => {
  const { t } = useTranslation()
  return (
   <div className={styles['wrapper']}>
      <span className={styles['custom-page']}>
        {t('common.notFoundPage')}
      </span>
    </div>
  );
};

export default NotFound;
