import React from 'react';
import {
  SpaceComponent,
  TransactionInformationCard,
  TransactionInformationDetailCard,
} from '..';

interface Props {
  accountTranferFromInfo: any;
  accountTranferToInfo: any;
}

const TransactionInformation = (props: Props) => {
  const {accountTranferInfo} = props;

  return (
    <>
      <TransactionInformationCard />
      <SpaceComponent height={16} />
      <TransactionInformationDetailCard />
    </>
  );
};

export default TransactionInformation;
