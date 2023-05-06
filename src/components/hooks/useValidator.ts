/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SimpleReactValidator from 'simple-react-validator';

import { checkLink, checkNip, correctBankNumber, correctPesel } from 'src/utils/helpers';

const useValidator = (
  options = {
    messages: {},
    validators: {}
  }
) => {
  const { t } = useTranslation();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState(<any | null>{}), []);

  const validator = useRef(
    new SimpleReactValidator({
      ...options,
      messages: {
        email: t('validator:email'),
        integer: t('validator:integer'),
        max: `${t('validator:max')} :max}`,
        min: `${t('validator:min')} :min}`,
        numeric: t('validator:numeric'),
        accepted: t('validator:accepted'),
        required: t('validator:required'),
        phone: t('validator:phone'),
        url: t('validator:url'),
        in: t('validator:in'),
        ...options.messages
      },
      validators: {
        minPassword: {
          message: t('validator:minPassword'),
          rule: (value: string | any[]) => !!value && value.length >= 8
        },
        registerPassword: {
          message: '',
          rule: (value: string | any) =>
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!"#$%&'()*+;?@[\]^_`{}~£€-]).{8,}$/.test(value)
        },
        bankNumber: {
          message: t('validator:bankNumber'),
          rule: correctBankNumber
        },
        pesel: {
          message: t('validator:pesel'),
          rule: correctPesel
        },
        brokerNumber: {
          message: 'Numer rachunku maklerskiego jest za długi.',
          rule: (value: string | any[]) => !!value && value.length <= 60
        },
        acceptOneOfTwo: {
          message: 'You must select one of the following conditions',
          rule: (value: string | null) => !!value
        },
        facebook: {
          message: t('validator:facebook'),
          rule: checkLink('facebook')
        },
        linkedin: {
          message: t('validator:linkedin'),
          rule: checkLink('linkedin')
        },
        twitter: {
          message: t('validator:twitter'),
          rule: checkLink('twitter')
        },
        zipCode: {
          message: t('validator:zipCode'),
          rule: (value: string | any[]) => !!(value && value.length >= 4 && value.length <= 20)
        },
        nip: {
          message: t('validator:nip'),
          rule: checkNip
        },
        true: {
          message: t('validator:true'),
          rule: (value: string) => value === 'true'
        },
        someValueSelected: {
          message: t('validator:someValueSelected'),
          rule: (value: string) => !!value
        },
        ...options.validators
      },
      autoForceUpdate: { forceUpdate }
    })
  );

  return validator.current;
};

export default useValidator;
