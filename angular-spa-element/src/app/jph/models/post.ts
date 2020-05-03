export class Post {
    constructor() {

    }
    public userId: number;
    public id: number;
    public title: string;
    
    private _body : string;
    public get body() : string {
        return this._body;
    }
    public set body(v : string) {
        this._body = v;
    }
    

}
