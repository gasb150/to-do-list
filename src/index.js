class ToDo {
  constructor(title, desc, date, priority, check) {
    this._title = title;
    this._desc= desc;
    this._date = date;
    this._priority = priority;
    this._check = check;
  }

  // Getters 
  get title(){
    return this._title;
  }

  get desc(){
    return this._desc;
  }

  get date(){
    return this._date;
  }
 
  get priority(){
    return this._priority;
  }

  get check(){
    return this._check;
  }

  //Setters
  set title() {
    this._title = title;
  }

  set desc() {
    this._desc= desc;
  }

  set date() {
    this._date = date;
  }

  set priority() {
    this._priority = priority;
  }

  set check() {
    this._check = check;
  }
}
