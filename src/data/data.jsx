export const schools = [
  {city: "Worthing", address:"12, Stoke Abbott Road", postcode: "BN11 1HE", telephone: "+44 (0) 1903 231330", email: "registrar@ces-schools.com"},
  {city: "London", address:"Nelson House, 271, Kingston Road", postcode: "SW19 3NW", telephone: "+44 (0) 20 8543 5150", email: "registrar@ces-schools.com"},
  {city: "Oxford", address:"67, High Street", postcode: "OX33 1XT", telephone: "+44 (0) 1865 874786", email: "oxfordregist@ces-schools.com"},
  {city: "Leeds", address:"9, Park Place", postcode: "LS1 2RU", telephone: "+44 (0) 1113 2427171", email: "leedsregistrar@ces-schools.com"},
  {city: "Edinburgh", address:"54, Manor Place", postcode: "EH3 7EH", telephone: "+44 (0) 131 2265004", email: "edinburghregistrar@ces-schools.com"}
]

export const destinations = [
  { value: "Worthing", label: "Worthing" },
  { value: "London", label: "London" },
  { value: "Oxford", label: "Oxford" },
  { value: "Leeds", label: "Leeds" },
  { value: "Edinburgh", label: "Edinburgh" },
];

export const courses = {
  Worthing: [
    {
      value: "SGE",
      label: "Standard General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 245 },
        { minWeeks: 5, maxWeeks: 11, price: 235 },
        { minWeeks: 12, maxWeeks: 23, price: 225 },
        { minWeeks: 24, maxWeeks: 35, price: 220 },
        { minWeeks: 36, maxWeeks: 49, price: 210 },
      ],
    },
    {
      value: "IGE",
      label: "Intensive General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 355 },
        { minWeeks: 5, maxWeeks: 11, price: 335 },
        { minWeeks: 12, maxWeeks: 23, price: 325 },
        { minWeeks: 24, maxWeeks: 35, price: 315 },
        { minWeeks: 36, maxWeeks: 49, price: 305 },
      ],
    },
    {
      value: "combination",
      label: "Combination Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 585 },
        { minWeeks: 5, maxWeeks: 11, price: 575 },
        { minWeeks: 12, maxWeeks: 49, price: 565 },
      ],
    },
    {
      value: "ielts",
      label: "IELTS Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 355 },
        { minWeeks: 5, maxWeeks: 11, price: 335 },
        { minWeeks: 12, maxWeeks: 23, price: 325 },
        { minWeeks: 24, maxWeeks: 35, price: 315 },
        { minWeeks: 36, maxWeeks: 49, price: 305 },
      ],
    },

    {
      value: "cambridge",
      label: "Cambridge Exam Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 585 },
        { minWeeks: 5, maxWeeks: 11, price: 575 },
        { minWeeks: 12, maxWeeks: 49, price: 565 },
      ],
    },
    {
      value: 'junior',
      label: "Junior Programme",
      priceRules: [
        {minWeeks: 1, maxWeeks: 2, price: 561.5},
        {minWeeks: 3, maxWeeks: 3, price: 560.35},
        {minWeeks: 4, maxWeeks: 4, price: 553.5},
        {minWeeks: 5, maxWeeks: 9, price: 550},
      ]
    }
  ],
  London: [
    {
      value: "SGE",
      label: "Standard General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 275 },
        { minWeeks: 5, maxWeeks: 11, price: 265 },
        { minWeeks: 12, maxWeeks: 23, price: 255 },
        { minWeeks: 24, maxWeeks: 35, price: 250 },
        { minWeeks: 36, maxWeeks: 49, price: 240 },
      ],
    },
    {
      value: "IGE",
      label: "Intensive General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "combination",
      label: "Combination Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
    {
      value: "ielts",
      label: "IELTS",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "CAM",
      label: "Cambridge Exam Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
  ],
  Oxford: [
    {
      value: "SGE",
      label: "Standard General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 275 },
        { minWeeks: 5, maxWeeks: 11, price: 265 },
        { minWeeks: 12, maxWeeks: 23, price: 255 },
        { minWeeks: 24, maxWeeks: 35, price: 250 },
        { minWeeks: 36, maxWeeks: 49, price: 240 },
      ],
    },
    {
      value: "IGE",
      label: "Intensive General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "combination",
      label: "Combination Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
    {
      value: "ielts",
      label: "IELTS",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "CAM",
      label: "Cambridge Exam Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
  ],
  Leeds: [
    {
      value: "SGE",
      label: "Standard General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 255 },
        { minWeeks: 5, maxWeeks: 11, price: 250 },
        { minWeeks: 12, maxWeeks: 23, price: 240 },
        { minWeeks: 24, maxWeeks: 35, price: 230 },
        { minWeeks: 36, maxWeeks: 49, price: 225 },
      ],
    },
    {
      value: "IGE",
      label: "Intensive General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 375 },
        { minWeeks: 5, maxWeeks: 11, price: 360 },
        { minWeeks: 12, maxWeeks: 23, price: 355 },
        { minWeeks: 24, maxWeeks: 35, price: 335 },
        { minWeeks: 36, maxWeeks: 49, price: 330 },
      ],
    },
    {
      value: "combination",
      label: "Combination Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 595 },
        { minWeeks: 5, maxWeeks: 11, price: 590 },
        { minWeeks: 12, maxWeeks: 49, price: 580 },
      ],
    },
    {
      value: "ielts",
      label: "IELTS",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 375 },
        { minWeeks: 5, maxWeeks: 11, price: 360 },
        { minWeeks: 12, maxWeeks: 23, price: 355 },
        { minWeeks: 24, maxWeeks: 35, price: 335 },
        { minWeeks: 36, maxWeeks: 49, price: 330 },
      ],
    },
    {
      value: "CAM",
      label: "Cambridge Exam Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 595 },
        { minWeeks: 5, maxWeeks: 11, price: 590 },
        { minWeeks: 12, maxWeeks: 49, price: 580 },
      ],
    },
  ],
  Edinburgh: [
    {
      value: "SGE",
      label: "Standard General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 275 },
        { minWeeks: 5, maxWeeks: 11, price: 265 },
        { minWeeks: 12, maxWeeks: 23, price: 255 },
        { minWeeks: 24, maxWeeks: 35, price: 250 },
        { minWeeks: 36, maxWeeks: 49, price: 240 },
      ],
    },
    {
      value: "IGE",
      label: "Intensive General English",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "combination",
      label: "Combination Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
    {
      value: "ielts",
      label: "IELTS",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 390 },
        { minWeeks: 5, maxWeeks: 11, price: 370 },
        { minWeeks: 12, maxWeeks: 23, price: 365 },
        { minWeeks: 24, maxWeeks: 35, price: 355 },
        { minWeeks: 36, maxWeeks: 49, price: 345 },
      ],
    },
    {
      value: "CAM",
      label: "Cambridge Exam Preparation Course",
      priceRules: [
        { minWeeks: 1, maxWeeks: 4, price: 615 },
        { minWeeks: 5, maxWeeks: 11, price: 605 },
        { minWeeks: 12, maxWeeks: 49, price: 595 },
      ],
    },
  ],
};

export const accommodationOptions = {
  Worthing: [
    { value: "single", label: "Homestay Single Room Half-Board", price: 240 },
    { value: "shared", label: "Homestay Shared Room Half-Board", price: 215 },
  ],
  London: [
    { value: "single", label: "Homestay Single Room Half-Board", price: 280 },
    { value: "shared", label: "Homestay shared room half board", price: 235 },
    {
      value: "pre-single",
      label: "Premium Homestay single room half board",
      price: 335,
    },
    {
      value: "pre-shared",
      label: "Premium Homestay shared room half board",
      price: 275,
    },
  ],
  Oxford: [
    { value: "single", label: "Homestay Single Room Half-Board", price: 280 },
    { value: "shared", label: "Homestay Shared Room Half-Board", price: 235 },
    {
      value: "pre-single",
      label: "Premium Homestay single room half board",
      price: 335,
    },
    {
      value: "pre-shared",
      label: "Premium Homestay shared room half board",
      price: 275,
    },
  ],
  Leeds: [
    { value: "single", label: "Homestay Single Room Half-Board", price: 240 },
    { value: "shared", label: "Homestay Shared Room Half-Board", price: 215 },
  ],
  Edinburgh: [
    { value: "single", label: "Homestay Single Room Half-Board", price: 280 },
    { value: "shared", label: "Homestay Shared Room Half-Board", price: 235 },
  ],
};

export const arrivalTransfers = {
  Worthing: [
    { value: "LGW", label: "from Gatwick", price: 140 },
    { value: "LHR", label: "from Heathrow", price: 170 },
    { value: "STN", label: "from Stansted", price: 250 },
  ],
  London: [
    { value: "LGW", label: "from Gatwick", price: 145 },
    { value: "LHR", label: "from Heathrow", price: 145 },
    { value: "STN", label: "from Stansted", price: 200 },
  ],
  Oxford: [
    { value: "LGW", label: "from Gatwick", price: 205 },
    { value: "LHR", label: "from Heathrow", price: 165 },
    { value: "STN", label: "from Stansted", price: 215 },
  ],
  Leeds: [
    { value: "LBA", label: "from Leeds Bradford", price: 100 },
    { value: "MAN", label: "from Manchester", price: 150 },
    { value: "LPL", label: "from Liverpool", price: 185 },
  ],
  Edinburgh: [
    { value: "EDI", label: "from Edinburgh", price: 80 },
    { value: "GLA", label: "from Glasgow", price: 280 },
  ],
};

export const departureTransfers = {
  Worthing: [
    { value: "LGW", label: "to Gatwick", price: 140 },
    { value: "LHR", label: "to Heathrow", price: 170 },
    { value: "STN", label: "to Stansted", price: 250 },
  ],
  London: [
    { value: "LGW", label: "to Gatwick", price: 145 },
    { value: "LHR", label: "to Heathrow", price: 145 },
    { value: "STN", label: "to Stansted", price: 200 },
  ],
  Oxford: [
    { value: "LGW", label: "to Gatwick", price: 205 },
    { value: "LHR", label: "to Heathrow", price: 165 },
    { value: "STN", label: "to Stansted", price: 215 },
  ],
  Leeds: [
    { value: "LBA", label: "to Leeds Bradford", price: 100 },
    { value: "MAN", label: "to Manchester", price: 150 },
    { value: "LPL", label: "to Liverpool", price: 185 },
  ],
  Edinburgh: [
    { value: "EDI", label: "to Edinburgh", price: 80 },
    { value: "GLA", label: "to Glasgow", price: 280 },
  ],
};
