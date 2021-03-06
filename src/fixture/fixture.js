const data = {
  landlords: {
    '123': {
      name: "Andrew Ly",
      properties: ["9 Spadina Avenue", "188 Bremnar Road"],
      tenants: [
        {
          name: "Dimitri Gustavo",
          address: "9 Spadina Avenue"
        },
        {
          name: "Katerina",
          address: "188 Bremnar Road"
        },
    ]
    },
    '456': {
      name: 'Ha Pham',
      properties: ["300 Harvie Road", "200 Highway 7"],
      tenants: [
        {
          name: "Rob",
          address: "300 Harvie Road"
        },
        {
          name: "Senorita",
          address: "200 Highway 7"
        },
      ]
    }
  },
  propertyAddresses: [
    {
      id: "101",
      address: "9 Spadina Avenue",
      landlord: "Andrew Ly",
    },
    {
      id: "202",
      address: "188 Bremnar Road",
      landlord: "Andrew Ly",
    },
    {
      id: "303",
      address: "300 Harvie Road",
      landlord: "Ha Pham",
    },
    {
      id: "404",
      address: "200 Highway 7",
      landlord: "Ha Pham",
    },
    {
      id: "505",
      address: "1234 Bathurst St",
      landlord: "Ha Pham",
    },
  ],
  tenants: {
    "Dimitri Gustavo": {
      id: "111",
      rentAmount: 240000,
      address: "9 Spadina Avenue",
      landlord: "Andrew Ly",
      paymentMethod: "e-transfer",
    },
    "Katerina": {
      id: "222",
      rentAmount: 200000,
      address: "188 Bremnar Avenue",
      landlord: "Andrew Ly",
      paymentMethod: "cash ",
    },
    "Rob Long": {
      id: "333",
      rentAmount: 50000,
      address: "300 Harvie Road",
      landlord: "Ha Pham",
      paymentMethod: "e-transfer",
    },
    "Senorita": {
      id: "444",
      rentAmount: 210000,
      address: "200 Highway 7",
      landlord: "Ha Pham",
      paymentMethod: "e-transfer",
    },
  },
  receipts: {
    '343': {
      id: '343',
      landlord: 'Andrew Ly',
      tenant: 'Katerina',
      address: '9 Spadina Avenue',
      rentAmount: 200000,
      dateReceived: 'Sept 01 2020',
      memo: "Sept rent"
    }
  },
};

export default data;
