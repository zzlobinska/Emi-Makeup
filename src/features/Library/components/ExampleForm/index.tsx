import React, { FormEvent, useState } from 'react';

import { Button, Input, useValidator } from 'components';

const ExampleForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const validator = useValidator();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validator.allValid()) {
      validator.showMessages();
    }
  };

  return (
    <form
      style={{ display: 'flex', gap: '2.4rem', alignItems: 'flex-end ' }}
      onSubmit={handleSubmit}
    >
      <Input
        label={'Imię i nazwisko'}
        value={name}
        onChangeText={setName}
        validator={validator}
        rule={'required'}
      />
      <Input
        label={'E-mail'}
        value={email}
        onChangeText={setEmail}
        validator={validator}
        rule={'required|email'}
      />
      <Button label={'wyślij'} />
    </form>
  );
};

export default ExampleForm;
