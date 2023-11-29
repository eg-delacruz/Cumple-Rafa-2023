import { useState } from 'react';

type Props = string | number | readonly string[] | undefined;

// Hook para manejar/controlar la info de los inputs
import { ChangeEvent } from 'react';

export const useInputValue = (initialValue: Props) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return { value, onChange, setValue };
};
