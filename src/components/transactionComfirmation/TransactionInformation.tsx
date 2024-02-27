import React from 'react';
import {
  SpaceComponent,
  TransactionInformationCard,
  TransactionInformationDetailCard,
} from '..';

const TransactionInformation = () => {
  return (
    <>
      <TransactionInformationCard />
      <SpaceComponent height={16} />
      <TransactionInformationDetailCard />
    </>
  );
};

export default TransactionInformation;
