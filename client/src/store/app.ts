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
  }
} as App);

export default app;
