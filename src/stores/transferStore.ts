import {action, makeObservable, observable} from 'mobx';
import {appColors} from '../constansts/appColors';

export class TransferStore {
  _bgColorCard: string = appColors.orange;
  indexBottomSheet: number = -1;

  constructor() {
    makeObservable(this, {
      _bgColorCard: observable,
      indexBottomSheet: observable,
      setBgColorCard: action,
      setIndexBottomSheet: action,
    });
  }

  setBgColorCard = (bgColorCard: string) => {
    this._bgColorCard = bgColorCard;
  };

  setIndexBottomSheet = (index: number) => {
    this.indexBottomSheet = index;
  };
}

const transferStore = new TransferStore();
export default transferStore;
