export class Event {
  public title: string;
  public description: string;
  public date: string;

  constructor(title: string, desc: string, date: string) {
    this.title = title;
    this.description = desc;
    this.date = date;
  }
}
