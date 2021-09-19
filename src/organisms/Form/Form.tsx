import React, { FC, useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { FormProps } from './models.d';

const Form: FC<FormProps> = ({
  button, placeholder, onSubmit,
}) => {
  const [value, setValue] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form
      onSubmit={(e) => onFormSubmit(e)}
      className="field has-addons"
    >
      <div className="control">
        <Input
          value={value}
          onChange={onInputChange}
          placeholder={placeholder}
          customClass="is-rounded"
        />
      </div>
      <div className="control">
        <Button
          type="submit"
        >
          {button}
        </Button>
      </div>
    </form>
  );
};

export default Form;
