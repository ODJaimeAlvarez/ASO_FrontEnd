export class LoginResponse {
    jwToken: string;
    email: string;
    authorities: string[];

    constructor(jwToken: string, email: string, authorities: string[]) {
        this.jwToken = jwToken;
        this.email = email;
        this.authorities = authorities;
    }
}