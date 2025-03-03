class PaginationView {
 
  }

  test(page) {}

  pageNoChanging(pageNo, MaxPageNo) {
    if (pageNo === MaxPageNo) {
      this.nextButton.style.display = "none";
    }
    if (pageNo === 1 && MaxPageNo === 1) {
      this.previousButton.style.display = "none";
      this.nextButton.style.display = "none";
    }
  }

  increasePageNo(e) {
    e.preventDefault();
    pageNo = pageNo + 1;
  }

  decreasePageNo(e) {
    e.preventDefault();
    pageNo = pageNo - 1;
  }
}
