import {User} from "./types";

const myUser= {};
(myUser as User).age = 35;
(myUser as User).name = 'Cody';

(<User>myUser).age = 35;