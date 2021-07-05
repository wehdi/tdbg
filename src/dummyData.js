/*export const dataEcheance = [
  {
    name: "Echeance 01/2021",
    Nombre: 3011256,
    Montant: 12623547896,
    TP: 25562456598,
  },
  {
    name: "Echeance 02/2021",
    Nombre: 3211256,
    Montant: 12836589745,
    TP: 25562456598,
  },
  {
    name: "Echeance 03/2021",
    Nombre: 3211256,
    Montant: 13569874123,
    TP: 25446556598,
  },
  {
    name: "Echeance 04/2021",
    Nombre: 3211256,
    Montant: 1401299999,
    TP: 254462456598,
  },
  {
    name: "Echeance 05/2021",
    Nombre: 3211256,
    Montant: 1401299999,
    TP: 254462456598,
  },
  {
    name: "Echeance 06/2021",
    Nombre: 3011256,
    Montant: 128362456598,
    TP: 254462456598,
  },
  {
    name: "Echeance 07/2021",
    Nombre: 3011256,
    Montant: 128362456598,
    TP: 254462456598,
  },
];*/

export const dataEcheance = {
  labels: [
    "01/2021",
    "02/2021",
    "03/2021",
    "04/2021",
    "05/2021",
    "06/2021",
    "07/2021",
    "08/2021",
    "09/2021",
    "10/2021",
    "11/2021",
    "12/2021",
  ],
  datasets: [
    {
      label: "Nombre de retraité",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [
        3392365, 3392658, 3397412, 3392369, 3396321,

        3393201,

        3397123, 3398999, 3396745, 3394523, 3396745, 3394523,
      ],
      backgroundColor: ["rgba(250,200,132,0.6)"],
      backgroundColor: ["rgba(200,99,132,0.6)"],
    },
  ],
};

export const dataTp = {
  labels: ["Trop percu Constaté", "Rest à constaté"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [3256987452, 1256895472],
      backgroundColor: ["rgba(255,99,132,0.6)", "rgba(75,192,192,0.6)"],
    },
  ],
}; /*
export const dataTp = [
  { name: "Trop percu Constaté", value: 3256987452 },
  { name: "Rest à constaté", value: 1256895472 },
];*/
export const echeanceColumns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "Caisse", headerName: "Caisse", width: 130 },
  { field: "Echeance", headerName: "Montant Echeance", width: 180 },
  { field: "NRetraite", headerName: "Nombre Retraité", width: 180 },
  { field: "MontantTp", headerName: "Trop percu", width: 170 },
  {
    field: "TauxConstatation",
    headerName: "Constatation",
    width: 180,
    description: "Constation du TP",
  },
];

export const echeanceRows = [
  {
    id: 1,
    Caisse: "Alger-Est",
    Echeance: 3160078912.95,
    NRetraite: 91443,
    MontantTp: 1505478912,
    TauxConstatation: 69,
  },
  {
    id: 2,
    Caisse: "Annaba",
    Echeance: 236547891.412,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 80,
  },
  {
    id: 3,
    Caisse: "Skikda",
    Echeance: 2365478912.03,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 75,
  },
  {
    id: 4,
    Caisse: "Bejaia",
    Echeance: 30654458962.35,
    NRetraite: 92423,
    MontantTp: 1505478912,
    TauxConstatation: 73,
  },
  {
    id: 5,
    Caisse: "Ouergla",
    Echeance: 2365478912.2,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 50,
  },
  {
    id: 5,
    Caisse: "Ouergla",
    Echeance: 2365478912.2,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 50,
  },
  {
    id: 5,
    Caisse: "Ouergla",
    Echeance: 2365478912.2,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 50,
  },
  {
    id: 5,
    Caisse: "Ouergla",
    Echeance: 2365478912.2,
    NRetraite: 87423,
    MontantTp: 1505478912,
    TauxConstatation: 50,
  },
];
