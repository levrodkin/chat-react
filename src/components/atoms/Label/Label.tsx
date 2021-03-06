import classNames from 'classnames';
import React, { FC } from 'react';
import './Label.scss';

interface LabelProps {
  className?: string;
  children: React.ReactNode;
  htmlFor: string;
}

const Label: FC<LabelProps> = ({ className = '', children, htmlFor }) => {
  const classProps = classNames('label', className);

  return (
    <label className={classProps} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
