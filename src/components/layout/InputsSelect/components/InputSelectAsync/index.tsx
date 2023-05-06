/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AsyncPaginate } from 'react-select-async-paginate';
import { AxiosResponse } from 'axios';

import InputWrapper, { getWrapperProps, InnerWrapperProps } from 'components/layout/InputWrapper';
import { notifyApiError } from 'components/layout/Toasts';

import { selectStyles } from '../../styles';

type OptionType = {
  label: string;
  value: string;
};

type optionsParameters = {
  page: number;
};

type paramsType = {
  page: number;
  search: string;
  perPage: number;
};

interface InputSelectAsyncProps extends InnerWrapperProps {
  value: OptionType | null;
  onChange: (option: OptionType) => void;
  noOptionsMessage?: string;
  noOptionCallback?: (message: string) => void;
  placeholder?: string;
  perPage?: number;
  valueKey: string;
  labelKey: string;
  apiCallback: (params: paramsType) => Promise<AxiosResponse>;
  labelFormat?: (label: string) => void;
  queryParams?: object;
}

const InputSelectAsync = (props: InputSelectAsyncProps) => {
  const [localLoading, setLocalLoading] = useState(false);
  const { t } = useTranslation();

  const {
    value,
    onChange,
    noOptionsMessage = t('common:message.noResults'),
    noOptionCallback,
    placeholder = `${t('common:action.select')}...`,
    perPage = 30,
    valueKey,
    labelKey,
    apiCallback,
    labelFormat,
    queryParams,
    ...rest
  } = props;

  const wrapperProps = getWrapperProps(props);

  const handleApiCall = async (params: paramsType) => {
    try {
      setLocalLoading(true);
      const response: any = await apiCallback(params);
      return response;
    } catch (error: any) {
      notifyApiError(error);
      return false;
    } finally {
      setLocalLoading(false);
    }
  };

  const handleHasMore = (response: AxiosResponse, options: any) =>
    response.data.total ? options.length + options.length < response.data.total : true;

  const loadOptions: any = async (search: string, prevOptions: OptionType[], optionsParameters: optionsParameters) => {
    const { page } = optionsParameters;
    const params = { ...queryParams, page, search, perPage };

    const response = await handleApiCall(params);

    const options = response?.data.map((item: any) => ({
      value: item[valueKey],
      label: labelFormat ? labelFormat(item) : item[labelKey],
      ...item
    }));

    return {
      options,
      hasMore: handleHasMore(response, options),
      additional: { page: page + 1 }
    };
  };

  const inputWithPrefix = `${t('common:state.isLoading')}...`;

  const handleNoOptionsMessage = ({ inputValue }: { inputValue: string }) => {
    if (noOptionCallback) {
      return localLoading ? inputWithPrefix : noOptionCallback(inputValue);
    } else {
      return localLoading ? inputWithPrefix : noOptionsMessage;
    }
  };

  const loadingMessage = () => inputWithPrefix;

  return (
    <InputWrapper {...wrapperProps}>
      <AsyncPaginate
        value={value}
        loadOptions={loadOptions}
        onChange={onChange as any}
        styles={selectStyles(!!wrapperProps.errorMessage)}
        loadingMessage={loadingMessage}
        noOptionsMessage={handleNoOptionsMessage as any}
        additional={{ page: 1 }}
        cacheUniqs={[queryParams]}
        placeholder={placeholder}
        {...rest}
      />
    </InputWrapper>
  );
};

export default InputSelectAsync;
