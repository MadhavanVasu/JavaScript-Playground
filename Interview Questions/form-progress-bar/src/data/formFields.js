export const formFields = {
  fields: [
    {
      name: "firstName",
      placeholder: "First Name",
      id: "firstName",
      type: "text",
    },

    {
      name: "lastName",
      placeholder: "Last Name",
      id: "lastName",
      type: "text",
    },

    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      id: "phoneNumber",
      type: "text",
    },

    {
      name: "address",
      placeholder: "Address",
      id: "address",
      type: "text",
    },

    {
      name: "country",
      placeholder: "Country",
      id: "country",
      type: "text",
    },
  ],
};

export const formState = formFields.fields.reduce((acc, { name }) => {
  acc = { ...acc, [name]: "" };
  return acc;
}, {});
