const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField",
      children: [
        {
          name: "awesome",
          label: "Person's Name",
          type: "TextField",
          children: [
            {
              name: "innerstates",
              label: "Person's State",
              type: "DropDown",
              values: ["Maharashtra", "Kerala", "Tamil Nadu"]
            }
          ]
        }
      ]
    },
    {
      name: "person_surname",
      label: "Person's SurName",
      type: "TextField"
    },
    {
      name: "states",
      label: "Person's State",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};

export default flexiConfig;
