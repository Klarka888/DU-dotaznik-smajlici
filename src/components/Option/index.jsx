import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onClickType}) => { //3. přidala jsem props onClickType, který vezme data a bude to měnit na událost onClick
  return (
    <div className="option" onClick={() => onClickType(type)}> 
      <Icon type={type}  />
      <div>{text}</div>
    </div>
  );
};
