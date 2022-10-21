import {makeAutoObservable} from "mobx";

class AuthStore {
    auth = false;
    constructor() {
        makeAutoObservable(this);
    }
}

export default new AuthStore();