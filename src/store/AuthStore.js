import {makeAutoObservable} from "mobx";

class AuthStore {
    auth = true;
    constructor() {
        makeAutoObservable(this);
    }
}

export default new AuthStore();