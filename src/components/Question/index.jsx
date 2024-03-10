import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [iconType, setIconType] = useState('symbolQuestion') // 1. iconType se bude měnit, takže nastavím stav. 
  const handleOnClickType = (type) => {     //4. Vytvořila jsem si funkci, která nastaví iconType
    setIconType(type)
  }
  return (
    <div className="question">
      <QuestionBody 
        iconType={iconType} //2. tady jsem to jsem přepsala -> musím k jinému sourozenci, k Option
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" onClickType={handleOnClickType}/>  
        <Option type="smileyYes" text="Spíše souhlasím" onClickType={handleOnClickType}/>
        <Option type="smileyNeutral" text="Nevím" onClickType={handleOnClickType}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" onClickType={handleOnClickType}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" onClickType={handleOnClickType}/>
      </div>
    </div>
  );
};
