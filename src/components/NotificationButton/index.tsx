import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  id: number;
}

function handleClick(saleId:number) {
    axios(`${BASE_URL}/sales/${saleId}/notification`)
      .then(response => {
         toast.info("SMS enviado com sucesso(teoricamente)")
      })
}
 
function NotificationButton( {id} : Props ) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(id)}>
          <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton