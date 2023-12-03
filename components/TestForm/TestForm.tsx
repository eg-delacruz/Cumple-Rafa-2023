import React, { HTMLInputTypeAttribute } from 'react';

//Styles
import styles from './Styles.module.scss';

//Hooks
import useRandomMessage from '@hooks/useRandomMessage';

//Types
type Props = {
  theme: 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';
  inputValue: string | number | readonly string[] | undefined;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  randomErrorMessage: string;
  buttonMessage?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  title?: string;
};

const TestForm = ({
  theme,
  inputValue,
  inputChange,
  handleSubmit,
  randomErrorMessage,
  buttonMessage = 'Continuar',
  inputType = 'text',
  title = 'Respuesta:',
}: Props & { inputType?: HTMLInputTypeAttribute }) => {
  return (
    <form
      className={styles.form}
      method='POST'
      action=''
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <h4>{title} </h4>
      <br />
      <input
        id='answer'
        autoCapitalize='off'
        required
        value={inputValue}
        onChange={inputChange}
        type={inputType}
      />
      <br />
      <br />
      <button className={`btn btn__${theme}`}>{buttonMessage}</button>
      <br />
      <p>{randomErrorMessage}</p>
    </form>
  );
};

export default TestForm;
