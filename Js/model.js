const state = {
  // This will contain all client details including password.
  clientsDetail: [],

  // This will contain basic detail of registered clients as an object. which are their id, first name and last name,  gender and address.
  client: [],

  // This will contain email of all the people that subscribed for news letter
  newsletter: [],

  // this will contain objects which is booking id and booking date and time.
  bookingDetail: [],
  //This array will have dates as key and booked times as array. I will use it to access if a particular time is booked. as well as is a date is booked.
  bookings: [],
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
  state.clientsDetail.push(newCustomer);
};
