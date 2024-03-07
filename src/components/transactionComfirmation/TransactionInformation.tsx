import React from 'react';
import {
  SpaceComponent,
  TransactionInformationCard,
  TransactionInformationDetailCard,
} from '..';

interface Props {
  accountTranferFromInfo: AccountInfoMoneyTransfer;
  accountTransferToInfo: AccountTransferToInfo;
  transactionInfoDetail: TransactionInfoDetail 
}

const TransactionInformation = (props: Props) => {
  const {accountTranferFromInfo, accountTransferToInfo, transactionInfoDetail} = props;

  console.log("account transfer to info:: ", accountTransferToInfo)

  return (
    <>
      <TransactionInformationCard accountTranferFromInfo={accountTranferFromInfo} accountTransferToInfo={accountTransferToInfo}/>
      <SpaceComponent height={16} />
      <TransactionInformationDetailCard transactionInfoDetail={transactionInfoDetail}/>
    </>
  );
};

export default TransactionInformation;
