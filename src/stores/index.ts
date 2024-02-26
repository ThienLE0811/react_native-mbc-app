import transferStore, {TransferStore} from './transferStore';

export type RootStore = {
  transferStore: TransferStore;
};

const rootStore: RootStore = {
  transferStore,
};

export default rootStore;
