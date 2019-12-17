import { Record } from "immutable";

export const User = new Record({
    id: null,
    name: null,
    email: null,
    phoneNumber: null,
    isAdmin: null
});

export default class UserRecord extends User {
    static parse(user) {
        return new UserRecord({
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: !!user.is_admin,
            phoneNumber: user.phone_number
        });
    }
}

export const NewUser = new Record({
    name: null,
    email: null,
    phoneNumber: null
});

export class NewUserRecord extends NewUser {
    static parse(user) {
        return new NewUserRecord({
            email: user.email,
            name: user.username,
            phoneNumber: user.phoneNumber
        });
    }
}
