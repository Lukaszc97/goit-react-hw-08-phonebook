import React from 'react';
import {RegistrationForm} from '../../components/Form/RegistrationForm';
import { Helmet } from 'react-helmet';

export default function Registration() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm/>
    </div>
  );
}
