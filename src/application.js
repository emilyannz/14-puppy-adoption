// import PuppyView from 'puppy-view';

//Create `application` module that exports an `ApplicationView` class
// // [ ] Declare a contstructor that:
//         * [ ] Makes `fetch` request to `tiny-tn` and set view data when request is complete and calls `render`
//         * [ ] Creates and attaches a new `CreateFormView` to the top navigation
'use strict';
import PuppyView from 'puppy-view';
import FormView from 'form-view';

export default class AppView {
  constructor(element) {
    this.el = element;
    this.puppyList = this.el.querySelector(`.puppy-list`);

    fetch(`http://tiny-tn.herokuapp.com/collections/ez-puppy`)
      .then((results) => results.json())
      .then((json) => {
        this.data = json;
        this.renderList();
      });
    this.renderFormView();
  }

  renderFormView() {
    this.formView = new FormView(this.el, this);
  }

  add(puppy) {
    this.data = [puppy, ...this.data];
    this.renderList(this);
  }

  remove(puppy) {
    this.data = this.data.filter((item) => {
      return item._id !== puppy._id;
    });

    this.renderList(this);
  }

  renderList() {
    this.puppyList.innerHTML = ``;
    this.data.forEach((puppy) => {
      this.puppyItem = new PuppyView(puppy, this);
      this.puppyList.appendChild(this.puppyItem.el);
    });
  }
}
