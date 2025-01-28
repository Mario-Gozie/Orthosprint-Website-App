export const state = {
  // This will contain all client details including password.
  clientsDetail: [],

  // This will contain basic detail of registered clients as an object. which are their id, first name and last name,  gender and address.
  clients: [],

  // This will contain email of all the people that subscribed for news letter
  newsletter: [],

  // this will contain objects which is booking id and booking date and time.
  bookingDetail: [],
  //This array will have dates as key and booked times as array. I will use it to access if a particular time is booked. as well as is a date is booked.
  bookings: [],
};

// MAIN DATA WEBSITE CODE

// exporting the newsletter updater
export function updateNewsletterList(item) {
  state.newsletter.push(item);
}

// // PORTAL DATA CODE

class newClient {
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
    this.orders = [];
  }
}

// exporting client Data
export const newclient = new newClient(
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

export const getLastID = function () {
  if (state.clients === "") {
    return 100;
  } else {
    return state.clients.at(-1).id;
  }
};

export const RegisterNewCustomer = function (newCustomer) {
  state.clients.push(newCustomer);
};
