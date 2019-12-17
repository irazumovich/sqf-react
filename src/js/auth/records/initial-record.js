import { Record } from "immutable";

export const InitialRecord = new Record({
    isLoading: false,
    isAuthorized: false,
    user: null,
    newUser: null,
    errors: [],
});
