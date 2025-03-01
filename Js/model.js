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
  AllBookingDateTime: {},
};

// MAIN DATA WEBSITE CODE

// EXPORTING NEWSPAPER UPDATER
export function updateNewsletterList(item) {
  state.newsletter.push(item);
}

// GETDATE CLASS.

class GetDateClass {
  getDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // The padding is used to make sure the day is in two digits.
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are Zero based.
    const year = today.getFullYear();

    return `${year}${month}${day}`;
  }
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
    this.bookings = [];
  }

  // Reset Password
  resetPassword(newPassword) {
    this.password = newPassword;
  }

  generateCustomerID(CustomersArray) {
    const dateInstance = new GetDateClass();
    if (!CustomersArray || CustomersArray.length === 0) {
      return `CUST-${dateInstance.getDate()}-0001`;
    } else {
      const lastCustomerID = CustomersArray.at(-1).clientId; // getting the number part of the customerID
      const lastNumberPartOfID = parseInt(lastCustomerID.split("-").pop(), 10); // Here, I splited to create an array, popped to take the last part then converted the last part which is a string number to a number to Number in base 10

      return `CUST-${dateInstance.getDate()}-${String(
        lastNumberPartOfID + 1
      ).padStart(4, "0")}`; // here I said I want to make it a total of 4 numbers and I want to make fill in the spaces in front with zero if it is not up to 4
    }
  }
}

// CURRENT USER

let ActiveUser = {};

export const getUser = (identifier, password) => {
  console.log("just a check", identifier, password);
  const user = state.clients.find(
    (client) =>
      (client.username === identifier || client.email === identifier) &&
      client.password === password
  );

  if (user) {
    ActiveUser = { ...user };
  }

  return user;
};

export const ActiveUserUsername = () => {
  return ActiveUser.username;
};

export const getActiveUserOrderArray = () => {
  return ActiveUser.bookings;
};

//  TAKING CARE OF BOOKINGS

export class Booking {
  constructor(bookingDate, bookedDate, service, bookedTime) {
    // date, bookedDate, service, bookedTime
    this.bookingDate = bookingDate; // Use lowercase to match
    this.service = service;
    this.bookedDate = bookedDate;
    this.bookedTime = bookedTime;
    this.status = "pending";
    this.bookingID = this.generateBookingID(state.bookingDetail);
  }

  generateBookingID(bookingArray) {
    const dateInstance = new GetDateClass();
    if (!bookingArray || bookingArray.length === 0) {
      return `APPT-${dateInstance.getDate()}-0001`;
    } else {
      const lastBookingID = bookingArray.at(-1).bookingID; // getting the number part of the customerID
      const lastNumberPartBookID = parseInt(lastBookingID.split("-").pop(), 10); // Here, I splited to create an array, popped to take the last part then converted the last part which is a string number to a number to Number in base 10

      return `APPT-${dateInstance.getDate()}-${String(
        lastNumberPartBookID + 1
      ).padStart(4, "0")}`;
    }
  }
}

// Clicked Booking button

export const availableTimeChecker = (date) => {
  const booking = state.AllBookingDateTime[date];
  return booking ? booking : [];
};

export class ManageBookingApointments {
  constructor(newBooking, state) {
    this.newBooking = newBooking;
    this.state = state;

    this.AddingToUserOrder(this.newBooking);
    this.addToAllOrders(this.newBooking, this.state);
    this.AddToOrderDetail(this.newBooking, this.state);
  }

  AddingToUserOrder(newBooking) {
    ActiveUser["bookings"].push(newBooking);
  }

  addToAllOrders(newBooking) {
    if (state.AllBookingDateTime[newBooking.bookedDate]) {
      state.AllBookingDateTime[newBooking.bookedDate].push(
        newBooking.bookedTime
      );
    } else {
      state.AllBookingDateTime[newBooking.bookedDate] = [newBooking.bookedTime];
    }
  }

  AddToOrderDetail(newBooking) {
    state.bookingDetail.push({
      bookingDate: newBooking.bookingDate,
      bookingID: newBooking.bookingID,
      clientID: ActiveUser.clientId,
      firstName: ActiveUser.firstName,
      lastName: ActiveUser.lastName,
      bookedDate: newBooking.bookedDate,
      bookedTime: newBooking.bookedTime,
      service: newBooking.service,
      status: newBooking.status,
    });
  }
}

export const cancelAppointment = () => {
  // Remove Change the status of the client for both Appointmentdetail status needs to be changed.
  // This can be achieved by setting the Data Attribute of all rendered Data to the order ID. with this Unique
  // use the date value to search for the bookings array, and remove the time
  // go to the Users array and change the status to cancelled.
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
