export class LoginResponse {
    jwToken: string;

    constructor(jwToken: string){
        this.jwToken= jwToken;
    }
}