//Create `puppy-view` module that exports a `PuppyView` class

export default class PuppyView {}
  constructor(id, name, age, photoUrl, about) {
    this.name = name;
    this.age = age;
    this.photoUrl = photoUrl;
    this.about = about;
    this.renderpuppy();
  }
  renderpuppy() {
    this.newform = document.createElement('div');
    this.newform.classList.add('puppy-profile')
    this.row = document.querySelector('.row');
    this.row.appendChild(this.newform);
    this.newform.innerHTML = `
    <div class="puppy-profile__image">
      <img src="${this.photoUrl}" alt="" class="puppy-form__image"/>
    </div>

    <div class="puppy-profile__form">
      <ul class="puppy-profile__form-inputs">
        <li class="puppy-profile__form-inputs-item">
          <h6 class="inputs-item__label">Name</h6>
          <input type="text" class="puppy-profile__inputs-item__input" value="${this.name}">
        </li>
        <li class="puppy-profile__form-inputs-item">
          <h6 class="inputs-item__label">Age</h6>
          <input type="text" class="puppy-profile__inputs-item__input" value="${this.age}">
        </li>
        <li class="puppy-profile__form-inputs-item">
          <h6 class="inputs-item__label">Photo URL</h6>
          <input type="text" class="puppy-profile__inputs-item__input" value="${this.photoUrl}">
        </li>
        <li class="puppy-profile__form-inputs-item">
          <h6 class="inputs-item__label">Profile</h6>
          <input type="text" class="puppy-profile__inputs-item__input" value="${this.profile}">
        </li>
      </ul>
      <div class ="button-row">
      <button class ="puppy-profile__button delete-button">Delete</button>
      <button class ="puppy-profile__button update-button">Update</button>
      </div>
    </div>`;
      }

}
