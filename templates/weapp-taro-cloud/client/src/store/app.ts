import { observable } from "mobx";
import { User } from "@/common/vos";

export interface PageResult {
  type: "avatar" | "edit-single";
  path?: string;
}

export interface App {
  user?: User;
  readonly userId?: string;
  readonly isAuthed: boolean;

  onAuthed(user: User): void;
}

const app: App = observable({
  user: void 0,

  get userId() {
    if (this.user) {
      return this.user._id;
    }
  },

  get isAuthed(): boolean {
    return !!this.userId;
  },

  onAuthed(user: User): void {
    this.user = user;
  }
} as App);

export default app;
