type ListAccount = {
  id: string;
  title: string;
  data: Array<{
    id: string;
    title: string;
    numberBank: string;
    bankName: string;
  }>;
};

export const mockApiListAccount: Array<ListAccount> = [
  {
    id: '1',
    title: 'Recently transferred accounts',
    data: [
      {
        id: '3',
        title: 'CUSTOMER NAME 1',
        numberBank: '03701056371',
        bankName: 'Canadia Bank 1',
      },
      {
        id: '4',
        title: 'CUSTOMER NAME 2',
        numberBank: '03701056372',
        bankName: 'Canadia Bank 2',
      },
      {
        id: '6',
        title: 'CUSTOMER NAME 3',
        numberBank: '03701056373',
        bankName: 'Canadia Bank 3',
      },
    ],
  },
  {
    id: '2',
    title: 'Beneficiary list 1',
    data: [
      {
        id: '5',
        title: 'CUSTOMER NAME 4',
        numberBank: '03701056374',
        bankName: 'Canadia Bank 4',
      },
      {
        id: '7',
        title: 'CUSTOMER NAME 5',
        numberBank: '03701056375',
        bankName: 'Canadia Bank 5',
      },
    ],
  },
  {
    id: '8',
    title: 'Beneficiary list 2',
    data: [
      {
        id: '9',
        title: 'CUSTOMER NAME 6',
        numberBank: '03701056376',
        bankName: 'Canadia Bank 6',
      },
      {
        id: '10',
        title: 'CUSTOMER NAME 7',
        numberBank: '03701056377',
        bankName: 'Canadia Bank 7',
      },
    ],
  },
];

export const mockApiListAccountNumber: Array<AccountNumber> = [
  {
    id: '1',
    title: 'CUSTOMER NAME 1',
    numberBank: '03701056333',
    bankName: 'Canadia Bank 6',
  },
  {
    id: '2',
    title: 'CUSTOMER NAME 2',
    numberBank: '03701056345',
    bankName: 'Canadia Bank 6',
  },
];
