const data = {
  landlords: {
    '123': {
      name: 'Sam',
      properties: ["9 Spadina Avenue", "188 Bremnar Road"]
    },
    '456': {
      name: 'Robin',
      properties: ["300 Harvie Road", "200 Highway 7"]
    }
  },
  propertyAddresses: [
    {
      id: '101',
      address: "9 Spadina Avenue",
      landlord: "Andrew Ly",
    },
    {
      id: '202',
      address: "188 Bremnar Road",
      landlord: "Andrew Ly",
    },
    {
      id: '303',
      address: "300 Harvie Road",
      landlord: "Ha Pham",
    },
    {
      id: '404',
      address: "200 Highway 7",
      landlord: "Ha Pham",
    },
    {
      id: '505',
      address: "1234 Bathurst St",
      landlord: "Ha Pham",
    },
  ],
  tenants: {
    "Dimitri Gustavo": {
      id: '111',
      rentAmount: 240000,
      address: "9 Spadina Avenue",
      landlord: "Sam",
      paymentMethod: "e-transfer",
    },
    Katerina: {
      id: '222',
      rentAmount: 200000,
      address: "188 Bremnar Avenue",
      landlord: "Sam",
      paymentMethod: "cash ",
    },
    "Rob Long": {
      id: '333',
      rentAmount: 50000,
      address: "300 Harvie Road",
      landlord: "Robin",
      paymentMethod: "e-transfer",
    },
    Senorita: {
      id: '444',
      rentAmount: 210000,
      address: "200 Highway 7",
      landlord: "Robin",
      paymentMethod: "e-transfer",
    },
  },
  receipts: {},
};

export default data;
