export interface Profile {
  id?: any;
  userId?: any;
  username: string;
  firstName: string,
  middleName: string,
  lastName: string,
  mobile: string,
  email: any,
  department: any,
  position: string,
  bio: string;
  gravatar?: any;
  following?: boolean;
  followers?: any;
  status?: boolean;
  groups?: any;
  posts?: any;
}
