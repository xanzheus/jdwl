const jadwal = [
  {
    hari: "Senin",
    mapel: ["Sunda", "B.Indonesia", "PPKN", "B.Inggris"],
  },
  {
    hari: "Selasa",
    mapel: [
      "PKK",
      "PJOK",
      "PPKT",
      "",
    ],
  },
  {
    hari: "Rabu",
    mapel: ["MTK", "EKFT", "", ""],
  },
  {
    hari: "Kamis",
    mapel: [
      "PAZW",
      "BK",
      "",
      "",
    ],
  },
  {
    hari: "Jum'at",
    mapel: ["PKK", "PABD/PABP", "", ""],
  },
];

const longest = jadwal
  .map(({ mapel }) => mapel.length)
  .sort((a, b) => b - a)[0];
const newArray = Array.from(new Array(longest));

export default jadwal;
export const columnRemap = newArray.map((_, idx) =>
  jadwal.map((data) => ({
    mapel: data.mapel[idx],
    index: jadwal.findIndex((x) => x.hari === data.hari) + 1,
  }))
);
