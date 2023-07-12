interface Contact extends Address{
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address {
    line1: string;
    line2: string;
    postcode: string;
}
let primaryContact: Contact = {
    id: 123,
    name: "Conor Hutchins",
    line1: "empty street",
    line2: "empty city",
    postcode: "9999"
}