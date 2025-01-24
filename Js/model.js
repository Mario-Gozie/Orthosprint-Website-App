const state = {
  clients: [],
  newsletter: [],
};

// MAIN DATA WEBSITE CODE

// exporting the newsletter updater
export function updateList(item) {
  state.newsletter.push(item);
}

// PORTAL DATA CODE

class Client {
  constructor(
    id,
    firstName,
    lastName,
    address,
    phoneNumber,
    username,
    email,
    password,
    gender
  ) {
    this.id = id;
    this.firstname = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone_Number = phoneNumber;
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}

// exporting client Data
export const client = new Client(
  id,
  firstName,
  lastName,
  address,
  phoneNumber,
  username,
  email,
  password,
  gender
);

export const RegisterNewCustomer = function (newCustomer) {
  state.customers.push(newCustomer);
};
