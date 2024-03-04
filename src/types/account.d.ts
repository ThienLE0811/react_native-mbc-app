interface AccountInfoBeneficiary {
  id: string;
  title: string;
  numberBank?: string;
  bankName: string;
  description?: string
}

interface AccountNumber {
  title: string;
  id: string;
  numberBank?: string;
  bankName: string;
}

interface AccountInfoMoneyTransfer {
  id: string;
  userName: string;
  numberBank: string;
  amount: string;
  typeMoney: string;
}
