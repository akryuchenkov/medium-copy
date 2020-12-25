export class PostModel {
  constructor(
    private readonly _title: string,
    private readonly _author: string,
    private readonly _id?: number
  ) {}

  get title(): string {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get id() {
    return this._id;
  }

  get dto(): { title: string; author: string } {
    return {
      title: this.title,
      author: this.author,
    };
  }
}
