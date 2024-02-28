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
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
      {
        id: '4',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
      {
        id: '6',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
    ],
  },
  {
    id: '2',
    title: 'Beneficiary list',
    data: [
      {
        id: '5',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
      {
        id: '7',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
    ],
  },
  {
    id: '8',
    title: 'Beneficiary list',
    data: [
      {
        id: '9',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
      {
        id: '10',
        title: 'CUSTOMER NAME',
        numberBank: '03701056378',
        bankName: 'Canadia Bank',
      },
    ],
  },
];
