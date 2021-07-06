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
        92893, 92410, 92920, 92811, 92630,

        92120,

        92380, 93400, 92760, 93001, 93250, 93459,
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
  { field: "id", headerName: "ID", width: 80 },
  { field: "Echeance", headerName: "Echeance", width: 190 },
  { field: "Montant", headerName: "Montant", width: 140 },
  { field: "Nombre", headerName: "Nombre Retraité", width: 180 },
  { field: "TP", headerName: "Trop percu", width: 170 },
  { field: "Recouvert", headerName: "Recouvert", width: 170 },
];

export const echeanceRows = [
  {
    id: 1,
    Echeance: "01/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 50
  },
  {
    id: 2,
    Echeance: "02/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 43,
  },
  {
    id: 3,
    Echeance: "03/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 73,
  },
  {
    id: 4,
    Echeance: "04/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 66,
  },
  {
    id: 5,
    Echeance: "05/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 65,
  },
  {
    id: 6,
    Echeance: "06/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 69,
  },
  {
    id: 7,
    Echeance: "07/2021",
    Montant: 2987214321.2,
    Nombre: 921023,
    TP: 2154123001.29,
    Recouvert: 71.2,
  },
];
