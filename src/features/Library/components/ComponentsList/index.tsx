import React, { useState } from 'react';
import { Skeleton } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import classNames from 'classnames';

import {
  Accordion,
  Button,
  Card,
  Chart,
  Checkbox,
  CloseButton,
  FileUploader,
  Icon,
  Input,
  InputRadio,
  InputSelect,
  InputSelectAsync,
  LabelLink,
  Loader,
  Modal,
  PhoneInput,
  SwitchButton,
  Textarea,
  Tooltip
} from 'components';
import { notifyCommon } from 'components/layout/Toasts';

import { TestApi } from 'src/api';
import { AccordionDataType } from 'src/components/layout/Accordion';
import ErrorBoundary from 'src/components/layout/ErrorBoundary';
import HorizontalScroll from 'src/components/layout/HorizontalScroll';
import ComponentCard from 'features/Library/components/ComponentCard';
import ExampleForm from 'features/Library/components/ExampleForm';
import { dictionary } from 'features/Library/dictionary';

import style from './ComponentsList.module.scss';

type SelectItem = {
  value: string;
  label: string;
};

const accordionData: AccordionDataType[] = [
  {
    id: 1,
    header: 'Accordion header 1',
    text: 'Accordion content 1'
  },
  {
    id: 2,
    header: 'Accordion header 2',
    text: 'Accordion content 2'
  }
];

const ComponentsList = () => {
  const [file, setFile] = useState<File | null>(null);
  const [input, setInput] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [radio, setRadio] = useState<string>('');
  const [textarea, setTextarea] = useState<string>('');
  const [boolean, setBoolean] = useState<boolean>(true);
  const [isButtonOpen, setIsButtonOpen] = useState<boolean>(true);
  const [select, setSelect] = useState<SelectItem | null>(null);
  const [aSelect, setASelect] = useState<SelectItem | null>(null);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const selectOptions = [
    { value: 1, label: 'jeden' },
    { value: 2, label: 'dwa' },
    { value: 3, label: 'trzy' }
  ];

  const chartData: ApexOptions = {
    series: [
      {
        name: 'Radar Series 1',
        data: [45, 52, 38, 24, 33, 10]
      },
      {
        name: 'Radar Series 2',
        data: [26, 21, 20, 6, 8, 15]
      },
      {
        name: 'Radar Series 2',
        data: [26, 6, 9, 12, 44, 2]
      }
    ],
    labels: ['April', 'May', 'June', 'July', 'August', 'September']
  };

  return (
    <div className={style.container}>
      <ComponentCard data={dictionary.button}>
        <Button
          label={'full width'}
          fullWidth
        />
        <Button label={'default'} />
        <Button
          label={'gray'}
          gray
        />
        <Button
          label={'disabled'}
          disabled
        />
        <Button
          label={'loading'}
          isLoading
        />
        <Button
          empty
          label={'empty'}
        />
        <Button
          label={'empty gray'}
          empty
          gray
        />
        <Button
          label={'transparent'}
          transparent
        />
        <Button
          white
          label={'white'}
        />
        <Button icon={'plus'} />
        <Button
          icon={'plus'}
          label={'icon'}
        />
        <Button
          icon={'plus'}
          label={'icon reverse'}
          reverse
        />
        <Button
          icon={'plus'}
          small
        />

        <Button
          icon={'plus'}
          iconSmall
          small
        />
        <Button
          icon={'plus'}
          small
          transparent
        />
        <Button
          icon={'plus'}
          small
          empty
        />
      </ComponentCard>

      <ComponentCard data={dictionary.card}>
        <Card>card content!</Card>
        <Card>
          <Button label={'hello card!'} />
        </Card>
        <Card>
          <h1>h1 - 5.052rem</h1>
          <h2>h2 - 3.79rem</h2>
          <h3>h3 - 2.843rem</h3>
          <h4>h4 - 2.133rem</h4>
          <h5>h5 - 1.6rem</h5>
          <p>p - 1.6rem</p>
        </Card>
      </ComponentCard>

      <ComponentCard data={dictionary.accordion}>
        <Accordion data={accordionData} />
      </ComponentCard>

      <ComponentCard data={dictionary.mui}>
        <h4>Skeleton:</h4>
        <div className={style.skeletonContainer}>
          <Skeleton className={classNames(style.skeleton, style.skeletonIcon)} />
          <div className={style.textWrapper}>
            <Skeleton className={classNames(style.skeleton, style.skeletonText)} />
            <Skeleton className={classNames(style.skeleton, style.skeletonText)} />
            <Skeleton className={classNames(style.skeleton, style.skeletonText)} />
          </div>
        </div>
        <h4>Tooltip:</h4>
        <Tooltip content={'Tooltip content'}>
          <Icon name={'message'} />
        </Tooltip>
      </ComponentCard>

      <ComponentCard data={dictionary.checkbox}>
        <Checkbox
          label={'hello!'}
          id={'check1'}
          checked={boolean}
          onChangeChecked={setBoolean}
        />
        <Checkbox
          label={'hello! with long label'}
          id={'check2'}
          checked={boolean}
          onChangeChecked={setBoolean}
        />
        <Checkbox
          label={'hello! with label reversed'}
          id={'check3'}
          reverse
          checked={boolean}
          onChangeChecked={setBoolean}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.closeButton}>
        <CloseButton
          isOpen={isButtonOpen}
          onClick={() => setIsButtonOpen((prev) => !prev)}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.fileUploader}>
        <FileUploader
          value={file}
          setFile={setFile}
          handleUpload={() => {
            return null;
          }}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.input}>
        <Input
          value={input}
          onChangeText={setInput}
          label={'Testowy input'}
        />
        <Input
          value={input}
          onChangeText={setInput}
          label={'Testowy input password'}
          type={'password'}
        />
        <Input
          value={input}
          onChangeText={setInput}
          label={'Testowy input, ale pole wymagane'}
          rule={'required'}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.radio}>
        <InputRadio
          name={'test-radio'}
          value={'tak'}
          label={'tak'}
          checked={radio === 'tak'}
          onChange={(e) => setRadio(e.target.value)}
          id={'tak'}
        />
        <InputRadio
          name={'test-radio'}
          value={'nie'}
          label={'nie'}
          checked={radio === 'nie'}
          onChange={(e) => setRadio(e.target.value)}
          id={'nie'}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.labelLink}>
        <LabelLink label={'hello label'} />
        <LabelLink
          label={'hello label color'}
          color
        />
        <LabelLink
          label={'hello label light'}
          light
        />
        <LabelLink
          label={'hello label underlined'}
          underlined
        />
        <LabelLink
          label={'hello label color underlined'}
          color
          underlined
        />
      </ComponentCard>

      <ComponentCard data={dictionary.modal}>
        <Button
          label={'Kliknij mnie, aby zobaczyć modal'}
          onClick={() => setIsModalVisible(true)}
        />
        <Modal
          closeModal={() => setIsModalVisible(false)}
          isOpen={isModalVisible}
          title={'Tytuł modalu'}
        >
          <p>Dziecko p</p>
        </Modal>
      </ComponentCard>

      <ComponentCard data={dictionary.loader}>
        <Loader />
      </ComponentCard>

      <ComponentCard data={dictionary.notify}>
        <Button
          label={'Pokaż powiadomienie'}
          onClick={() => notifyCommon(['Testowe powiadomienie!'])}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.phoneInput}>
        <PhoneInput
          value={phone}
          onChange={setPhone}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.textarea}>
        <Textarea
          id={'textarea'}
          value={textarea}
          onChange={setTextarea}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.select}>
        <InputSelect
          value={select}
          onChange={setSelect}
          wrapperStyle={style.select}
          options={selectOptions}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.asyncSelect}>
        <InputSelectAsync
          value={aSelect}
          onChange={setASelect}
          wrapperStyle={style.select}
          valueKey={'name'}
          labelKey={'name'}
          apiCallback={TestApi.getRandomUsers}
          queryParams={{ foo: 'bar' }}
        />
      </ComponentCard>

      <ComponentCard data={dictionary.switchButton}>
        <SwitchButton
          value={boolean}
          setValue={setBoolean}
        />
        <SwitchButton
          value={!boolean}
          setValue={(bool) => setBoolean(!bool)}
          label={'hello label!'}
        />
        <SwitchButton
          value={boolean}
          setValue={setBoolean}
          label={'hello label reverse!'}
          reverse
        />
      </ComponentCard>

      <ComponentCard data={dictionary.form}>
        <ExampleForm />
      </ComponentCard>

      <ComponentCard data={dictionary.chart}>
        <Chart
          options={chartData}
          chartTypeOptions={['bar', 'area', 'radar']}
          fullWidth
        />
      </ComponentCard>
      <ComponentCard data={dictionary.horizontalScroll}>
        <ErrorBoundary>
          <HorizontalScroll withScrollbar>
            {[...Array(20)].map((_, i) => (
              <Button
                key={i}
                label={`Button ${i}`}
                onClick={() => console.log(`Button ${i} clicked!`)}
              />
            ))}
          </HorizontalScroll>
        </ErrorBoundary>
      </ComponentCard>
    </div>
  );
};

export default ComponentsList;
