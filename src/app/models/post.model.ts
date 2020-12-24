export class PostModel {
    constructor(
        private readonly _title:string,
        private readonly _author:string,
        private readonly _id:number,

        ) {}
        get titel():string{
            return this._title;
        }

        get author(){
            return this._author;
        }

        get id(){
            return this._id;
        }

        get dto():{titile: string, author: string}{
            return{
                     titile:this.titel,
                     author:this.author,
                };
        }

    }