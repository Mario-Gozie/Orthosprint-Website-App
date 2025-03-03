// import AppointmentsView from "./appointmentsView";

// class PaginationView extends AppointmentsView {
//   constructor() {
//     this.data;
//     this.page = 1;
//     this.paginationContainer = document.querySelector(".pagination-container");
//     this.nextButton = this.paginationContainer.querySelector(".appt-next");
//     this.previousButton =
//       this.paginationContainer.querySelector(".appt-previous");
//     this.pageNoElement = this.paginationContainer.querySelector(".page-number");
//     console.log(this.allApointmentsContainer);

//     // Event Listeners for Pagination

//     this.previousButton.addEventListener("click", (e) => this.decreasePageNo());
//     this.nextButton.addEventListener("click", (e) => this.increasePageNo());
//   }

//   test(page) {}

//   pageNoChanging(pageNo, MaxPageNo) {
//     if (pageNo === MaxPageNo) {
//       this.nextButton.style.display = "none";
//     }
//     if (pageNo === 1 && MaxPageNo === 1) {
//       this.previousButton.style.display = "none";
//       this.nextButton.style.display = "none";
//     }
//   }

//   increasePageNo(e) {
//     e.preventDefault();
//     pageNo = pageNo + 1;
//   }

//   decreasePageNo(e) {
//     e.preventDefault();
//     pageNo = pageNo - 1;
//   }
// }
