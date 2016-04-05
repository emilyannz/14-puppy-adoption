// import PuppyView from 'puppy-view';

//Create `application` module that exports an `ApplicationView` class
// // [ ] Declare a contstructor that:
//         * [ ] Makes `fetch` request to `tiny-tn` and set view data when request is complete and calls `render`
//         * [ ] Creates and attaches a new `CreateFormView` to the top navigation
export default class ApplicationView {
  constructor() {
    this.savebutton = document.querySelector('#POST-submit');
    this.savebutton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.formname = document.querySelector('#POST-name').value;
      this.formage = document.querySelector('#POST-age').value;
      this.formphotoUrl = document.querySelector('#POST-photoUrl').value;
      this.formabout = document.querySelector('#POST-about').value;
      this.puppyinfo = {
        name: this.formname,
        age: this.formage,
        photoUrl: this.formphotoUrl,
        about: this.formabout,
      };

      // fetch(`http://tiny-tn.herokuapp.com/collections/ez-puppies`, { method : `POST` })
      .then(r => r.json())
      .then((data) => {
        Object.assign(this.puppyinfo, data);
      })

    })
    this.puppyinfo = [];
    fetch(`http://tiny-tn.herokuapp.com/collections/jf-puppies`)
    .then((r) => r.json())
    .then((data) => {
      this.data = data;
      this.renderapp();
    });
  }


  // - [ ] Declare `render` method that:
  //      * [ ] Clears the puppy list HTML
  //      * [ ] Creates `PuppyView`s for every item in `data`
  //      * [ ] Appends `PuppyView` element to the puppy list
  renderapp() {
    const puppylist = document.querySelector(`.row`);
    puppylist.innerHTML = ``;
    this.data.forEach((puppy) => {
      new PuppyView(puppy._id, puppy.name, puppy.age, puppy.photoUrl, puppy.about);
    });
  }
}
