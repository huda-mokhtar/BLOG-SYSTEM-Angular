export class User {
    constructor(public username:string, public password:string ,
        public firstName:string ,public lastName:string , public email:string,
        public job:string, public age:string,
        public followers:Array<object>,public followings:Array<object>,public _id?:string  ){}
}
