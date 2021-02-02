export class User {
    constructor(public username:string, public password:string ,
        public firstName:string,public followers:Array<object>,public followings:Array<object> ){}
}
