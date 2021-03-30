class todo {
  constructor (title, desc, date, priority, check) {
    this._title = title;
    this._desc = desc;
    this._date = date;
    this._priority = priority;
    this._check = check;
  }
  get title (){
    return this._title
  }
  set title (){
    this._title = title
  }
}
