'use strict';
import toggleNav from 'toggle-nav';

export default class FormView {
  constructor(form, app) {
    this.form = document.querySelector(`form.nav-form`);
    this.app = app;

    toggleNav();

    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();

      const getValues = {
        name: this.form.querySelector(`[name=name]`).value,
        age: this.form.querySelector(`[name=age]`).value,
        photoUrl: this.form.querySelector(`[name=photo-url]`).value,
        profile: this.form.querySelector(`[name=profile]`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/ez-puppy`, {
          method: `POST`,
          headers: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
          },
          body: JSON.stringify(getValues),
        }).then((res) => res.json())
        .then((data) => {
          this.form.reset();

          this.app.add(data);
          document.querySelector(`.main`).classList.toggle(`slide`);
        });
    });
  }
}
