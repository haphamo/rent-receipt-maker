const landlords = [
  {
    id: 123,
    name: 'Andrew Ly',
    address: ['9 Spadina Avenue', '188 Bremnar Road']
  },
  {
    id: 456,
    name: 'Ha Pham',
    address: ['300 Harvie Road', '200 Highway 7']
  },
];


// list of all tenants is a collection {} of tenants, a list of tenants belonging to a landlord
const tenantsBelongingToALandlord = {
  'Andrew Ly': [
    {
      id: 111,
      tenantName: 'Dimitri Gustavo',
    },
    {
      id: 222,
      tenantName: 'Katerina',
    }
  ],
  'Ha Pham': [
    {
      id: 333,
      tenantName: 'Rob Long',
    },
    {
      id: 444,
      tenantName: 'Senorita',
    }
  ]
};

const allTenants = {
  'Dimitri Gustavo': {
      id: 111,
      rentAmount: 240000,
      address: '9 Spadina Avenue',
      payment_method: 'e-transfer'
  },
  'Katerina': {
      id: 222,
      rentAmount: 200000,
      address: '188 Bremnar Avenue',
      payment_method: 'cash '
  },
  'Rob Long': {
      id: 333,
      rentAmount: 50000,
      address: '300 Harvie Road',
      payment_method: 'e-transfer'
  },
  'Senorita': {
      id: 444,
      rentAmount: 210000,
      address: '200 Highway 7',
      payment_method: 'e-transfer'
  }
}

export {
  allTenants,
  landlords,
  tenantsBelongingToALandlord
}