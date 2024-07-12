import { FC, ChangeEvent } from 'react';
import './inputs.css';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const InputSearch: FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <input onChange={ onChange } 
      value={ value }
      className="input-search" 
      type='text' 
      placeholder={ placeholder ? placeholder:'buscar' } />
  );
};