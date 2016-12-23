/**
 * Created by miketran on 12/22/16.
 */
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}
