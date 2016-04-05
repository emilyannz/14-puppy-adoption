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
    this.newcard = document.createElement('div');
    this.newcard.classList.add('puppy-card')
    this.row = document.querySelector('.row');
    this.row.appendChild(this.newcard);
    this.newcard.innerHTML = `
    <div class="puppy-card__image">
      <img src="${this.photoUrl}" alt="" class="puppy-card__pic"/>
    </div>
    <div class="puppy-card__form">
      <ul class="puppy-card__form-inputs">
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Name</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${this.name}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Age</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${this.age}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Photo URL</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${this.photoUrl}">
        </li>
        <li class="puppy-card__form-inputs-item">
          <h6 class="inputs-item__label">Profile</h6>
          <input type="text" class="puppy-card__inputs-item__input" value="${this.profile}">
        </li>
      </ul>
      <div class ="button-row">
      <button class ="puppy-card__button delete-button">Delete</button>
      <button class ="puppy-card__button update-button">Update</button>
      </div>
    </div>`;
      }

}
