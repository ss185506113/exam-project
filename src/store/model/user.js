import { observable, action, makeObservable } from "mobx";

class UserStore {
  constructor() {
    makeObservable(this);
  }

  @observable namespace = "user";
  @observable token = "";

  @action getToken = (token) => {
    this.token = token;
    localStorage.setItem("token", token);
  };
}

export default new UserStore();
