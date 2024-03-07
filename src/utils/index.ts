import { AMOUNT_MAX } from "../constansts/mockApi";

export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0;
};


export const checkTypeTransfer = (amount: number, chanelRetail: ()=>void, channelLargeValue: ()=>void) => {
  if(amount > AMOUNT_MAX) {
    channelLargeValue()
  }
  else {
    chanelRetail()
  }

}