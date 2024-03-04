import {action, makeObservable, observable} from 'mobx';
import {appColors} from '../constansts/appColors';

export class TransferStore {
  _bgColorCard: string = appColors.orange;
  indexBottomSheet: number = -1;
  bankInfoBeneficiary: AccountInfoBeneficiary = {
    title: '',
    id: '',
    numberBank: undefined,
    bankName: '',
    description: '',
  };
  accountInfoBeneficiary: AccountInfoBeneficiary = {
    title: '',
    id: '',
    numberBank: undefined,
    bankName: '',
  };
  accountNumberBeneficiary: string | undefined = undefined;
  accountInfoMoneyTransfer: AccountInfoMoneyTransfer = {
    typeMoney: '',
    id: '',
    amount: '',
    numberBank: '',
    userName: '',
  };

  constructor() {
    makeObservable(this, {
      _bgColorCard: observable,
      indexBottomSheet: observable,
      bankInfoBeneficiary: observable,
      accountInfoBeneficiary: observable,
      accountNumberBeneficiary: observable,
      accountInfoMoneyTransfer: observable,
      setBgColorCard: action,
      setIndexBottomSheet: action,
      setBankInfoBeneficiary: action,
      setAccountInfoBeneficiary: action,
      setAccountNumberBeneficiary: action,
      setAccountInfoMoneyTransfer: action,
    });
  }

  setBgColorCard = (bgColorCard: string) => {
    this._bgColorCard = bgColorCard;
  };

  setIndexBottomSheet = (index: number) => {
    this.indexBottomSheet = index;
  };

  setBankInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    this.bankInfoBeneficiary = info;
  };

  setAccountInfoBeneficiary = (info: AccountInfoBeneficiary) => {
    this.accountInfoBeneficiary = info;
  };
  setAccountNumberBeneficiary = (number: string) => {
    this.accountNumberBeneficiary = number;
  };

  setAccountInfoMoneyTransfer = (info: AccountInfoMoneyTransfer) => {
    this.accountInfoMoneyTransfer = info;
  };
}

const transferStore = new TransferStore();
export default transferStore;
