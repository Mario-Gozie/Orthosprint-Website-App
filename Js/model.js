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

// EXPORTING NEWSPAPER UPDATER
export function updateNewsletterList(item) {
  state.newsletter.push(item);
}

// // PORTAL DATA CODE

export class NewClient {
  clientId;
  firstName;
  lastName;
  address;
  phoneNumber;
  username;
  email;
  password;
  gender;
  constructor(
    CustomersArray,
    firstName,
    lastName,
    address,
    phoneNumber,
    username,
    email,
    password,
    gender
  ) {
    this.clientId = this.generateCustomerID(CustomersArray);
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }

  // Reset Password
  resetPassword(newPassword) {
    this.password = newPassword;
  }

  // GETTING CURRRENT DATE YYYYMMDD format
  getDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // The padding is used to make sure the day is in two digits.
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are Zero based.
    const year = today.getFullYear();

    return `${year}${month}${day}`;
  }

  generateCustomerID(CustomersArray) {
    if (!CustomersArray || CustomersArray.length === 0) {
      return `CUST-${this.getDate()}-0001`;
    } else {
      const lastCustomerID = CustomersArray.at(-1).clientId; // getting the number part of the customerID
      const lastNumberPartOfID = parseInt(lastCustomerID.split("-").pop(), 10); // Here, I splited to create an array, popped to take the last part then converted the last part which is a string number to a number to Number in base 10

      return `CUST-${this.getDate()}-${String(lastNumberPartOfID + 1).padStart(
        4,
        "0"
      )}`; // here I said I want to make it a total of 4 numbers and I want to make fill in the spaces in front with zero if it is not up to 4
    }
  }
}

// CURRENT USER

export let ActiveUser = {};

export const getUser = (identifier, password) => {
  console.log("just a check", identifier, password);
  const user = state.clients.find(
    (client) =>
      (client.username === identifier || client.email === identifier) &&
      client.password === password
  );

  ActiveUser = { ...user };
  // return user;
};

//  TAKING CARE OF BOOKINGS

class Booking extends NewClient {
  constructor(date, bookedDate, service, bookedTime) {
    // date, bookedDate, service, bookedTime

    // This function will inherit the get date function in NewClient so that it can be able to generate the bookingID
    super();
    this.date = date;
    this.bookingID = this.generateBookingID();
    this.service = service;
    this.bookedDate = bookedDate;
    this.BookedTime = bookedTime;
  }

  generateBookingID(bookingArray) {
    if (!bookingArray || bookingArray.length === 0) {
      return `APPT-${this.getDate}-0001`;
    } else {
      const lastBookingID = bookingArray.at(-1).clientId; // getting the number part of the customerID
      const lastNumberPartBookID = parseInt(lastBookingID.split("-").pop(), 10); // Here, I splited to create an array, popped to take the last part then converted the last part which is a string number to a number to Number in base 10

      return `APPT-${this.getDate()}-${String(
        lastNumberPartBookID + 1
      ).padStart(4, "0")}`;
    }
  }
}

// Clicked Booking button

export const bookingReg = function (date, bookedDate, bookedTime, service) {
  // Please Make sure that this returns an object YOU CAN PUT IT INTO A FUNCTION.
  const UserNewBooking = function () {
    const newBooking = new Booking(date, bookedDate, service, bookedTime);
    return newBooking;
  };

  //Adding to the
};

// SAVING DATA

class DataModel {
  saveData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`Error saving data for key "${key}":`, error);
    }
  }

  getData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.log(`Error retrieveing the data for key "${key}":`, error);
    }
  }

  removeData(key) {
    localStorage.removeItem(key);
  }
}

export const dataModel = new DataModel();
