import { User } from './user.model';

export interface AdminUser extends User {
  isAdmin: boolean;
}
