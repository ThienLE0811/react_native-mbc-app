import {action, makeObservable, observable} from 'mobx';
import {appColors} from '../constansts/appColors';

export class TransferStore {
  _bgColorCard: string = appColors.orange;

  constructor() {
    makeObservable(this, {
      _bgColorCard: observable,
      setBgColorCard: action,
    });
  }

  setBgColorCard = (bgColorCard: string) => {
    this._bgColorCard = bgColorCard;
  };
}

const transferStore = new TransferStore();
export default transferStore;
