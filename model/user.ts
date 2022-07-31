export default class User{
    email: string;
    userName: string;
    pass: string;
    firstName: string;
    lastName: string;
    age: string;
    zipCode: string;
    uf: string;
    city: string;
    street: string;
    streetNumb: string;
    district: string;
    complement: string;

    constructor(e: string, uN: string, p: string, fN: string, lN: string,
        a: string, zC: string, u: string, cT: string, s: string,
        sN: string, d: string, c: string) {

        this.email = e;
        this.userName = uN;
        this.pass = p;
        this.firstName = fN;
        this.lastName = lN;
        this.age = a;
        this.zipCode = zC;
        this.uf = u;
        this.city = cT;
        this.street = s;
        this.streetNumb = sN;
        this.district = d;
        this.complement = c;
    }
}