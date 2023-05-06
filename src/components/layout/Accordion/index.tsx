import React from 'react';
import { useRef, useState } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';

import style from './Accordion.module.scss';

type IndexType = number | null;

export type AccordionDataType = {
  id: number;
  header: React.ReactNode;
  text: React.ReactNode;
};

type AccordionItemProps = {
  data: AccordionDataType;
  active: IndexType;
  handleToggle: (id: IndexType) => void;
};

type AccordionProps = {
  data: AccordionDataType[];
};

const AccordionItem = (props: AccordionItemProps) => {
  const { data, active, handleToggle } = props;
  const { header, id, text } = data;

  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <div
      className={classNames(style.card, style.toggle, {
        [style.active]: active === id
      })}
      onClick={() => handleToggle(id)}
    >
      <div className={style.header}>
        <h4 className={style.title}>{header}</h4>
        <Icon
          name={'arrowBadge'}
          className={classNames(style.icon, {
            [style.active]: active === id
          })}
        />
      </div>
      <div
        ref={contentEl}
        className={classNames(style.collapse, {
          [style.active]: active === id
        })}
        style={{
          height: active === id ? contentEl.current?.scrollHeight : '0px'
        }}
      >
        <div className={style.body}>
          <p className={style.description}>{text}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ data }: AccordionProps) => {
  const [active, setActive] = useState<IndexType>(null);

  const handleToggle = (index: IndexType) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className={style.container}>
      {data.map((item) => {
        return (
          <AccordionItem
            key={item.id}
            active={active}
            data={item}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
