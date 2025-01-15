const diplomas = [
  {
    name: "Information Technology",
    id: "R47",
    modules: [
      {
        name: "C218 | UI/UX Design for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        name: "C346 | Mobile App Development",
        id: "C346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "R18",
    modules: [
      {
        name: "C237 | Software Applications Development",
        id: "C237",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        name: "C372 | Payment Technologies",
        id: "C372",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
];

export function getModule({ moduleId, dipId }) {
  return diplomas
    .find(({ id }) => id === dipId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(dipId) {
  return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
