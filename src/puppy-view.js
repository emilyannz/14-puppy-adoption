//Create `puppy-view` module that exports a `PuppyView` class

'use strict';

export default class PuppyView {
  constructor(puppy, app) {
    this.puppy = puppy;
    this.app = app;
    this.el = document.createElement(`div`);
    this.setupTemplate();

    this.el.querySelector(`#card-remove`).addEventListener(`click`, () => {
      this.removePuppy();
    });

    this.el.querySelector(`#card-update`).addEventListener(`click`, () => {
      this.updatePuppy();
    });

    this.render();
  }

  updatePuppy() {
    const getValues = {
      name: this.el.querySelector(`#card-form-name`).value,
      age: this.el.querySelector(`#card-form-age`).value,
      photoUrl: this.el.querySelector(`#card-form-url`).value,
      profile: this.el.querySelector(`#card-form-profile`).value,
    };

    fetch(`http://tiny-tn.herokuapp.com/collections/ez-puppy/${this.puppy._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },

        body: JSON.stringify(getValues),
      }).then((res) => res.json())
      .then((data) => {
        Object.assign(data, getValues);

        this.status = document.createElement(`h4`);
        this.status.classList.add(`puppy-status`);
        this.status.innerHTML = `${this.puppy.name} is up to date!`;
        this.el.querySelector(`.card-image`).appendChild(this.status);

        this.render();
      });
  }

  removePuppy() {
    if (window.confirm(`Are you sure you want to delete ${this.puppy.name}?`)) {
      fetch(`http://tiny-tn.herokuapp.com/collections/ez-puppy/${this.puppy._id}`, {
          method: `DELETE`,
        }).then((res) => res.json())
        .then(() => {
          this.app.remove(this.puppy);
          alert(`${this.puppy.name} has been removed!`);
        });
    }
  }

  setupTemplate() {
    this.el.classList.add(`card`);
    this.el.innerHTML = `
    <div class="card-image">
      <div class="card-image__container">
        <img class="card-image__pic" src="">
      </div>
    </div>

    <div class="card-form">
      <div class="card-form__list">
        <h4 class="card-form__label">Name</h4>
        <input class="card-form__input" id="card-form-name" type="input" name="card-name"></input>
        <h4 class="card-form__label">Age</h4>
        <input class="card-form__input" id="card-form-age" type="input" name="card-age"></input>
        <h4 class="card-form__label">Photo URL</h4>
        <input class="card-form__input" id="card-form-url" type="input" name="card-url"></input>
        <h4 class="card-form__label">Profile</h4>
        <input class="card-form__input" id="card-form-profile" type="input" name="card-profile"></input>
        <div class="card-form__action">
          <input class="card-form__button" id="card-remove" type="button" name="delete" value="Delete">
          <input class="card-form__button" id="card-update" type="button" name="update" value="Update">
        </div>
      </div>
    </div>
    `;
  }

  render() {
    this.el.querySelector(`.card-image__pic`).setAttribute(`src`, this.puppy.photoUrl);
    this.el.querySelector(`#card-form-name`).setAttribute(`value`, this.puppy.name);
    this.el.querySelector(`#card-form-age`).setAttribute(`value`, this.puppy.age);
    this.el.querySelector(`#card-form-url`).setAttribute(`value`, this.puppy.photoUrl);
    this.el.querySelector(`#card-form-profile`).setAttribute(`value`, this.puppy.profile);
  }
}
