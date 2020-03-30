export class EventStruct {
  public title: string;
  public description: string;
  public date: string;
  public tag: string;

  constructor(date: string, title: string, description: string, tag: string) {
    this.date = date;
    this.title = title;
    this.description = description;
    this.tag = tag;
  }
}
