
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    this.puppyinfo = [];
  fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then(response => response.json())
    .then(data => {
      this.data = data;
      this.renderapp();
      })
