class todo {
  constructor(title, description, date, priority, check) {
    this._title = title;
    this._descriprion = description;
    this._date = date;
    this._priority = priority;
    this._check = check;
  }

  get title(){
    return this._title;
  }

  get description(){
    return this._tdescription;
  }
 
}
