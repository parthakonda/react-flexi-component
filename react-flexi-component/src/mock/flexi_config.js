const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField",
      children: {
        items: [
          {
            name: "awesome",
            label: "Person's Name",
            type: "TextField"
          }
        ]
      }
    },

    {
      name: "states",
      label: "Person's State",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};

const flexiConfig2 = {
  items: [
    {
      name: "person_surname",
      label: "Person's SurName",
      type: "TextField",
      children: flexiConfig
    }
  ]
};

export default flexiConfig2;
