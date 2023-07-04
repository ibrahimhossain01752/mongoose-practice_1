import { IUser } from "./user.interface";
import User from "./user.model"

export const createUserToDB = async(payload: IUser): Promise<IUser> => {
    const user =new User(payload)
    await user.save();

    user.fullName(); //custom instance method
return user;
}

export const getUsersFromDB=async():Promise<IUser[]> => {
  const user = await User.find();
  return user;
}

export const getUserByIdFromDB=async(payload:string):Promise<IUser | null> => {
  const user = await User.findOne({id:payload},{name:1, contactNo:1});
  return user;
}
export const getAdminUsersFromDB=async():Promise<IUser[]> => {
  const admin = await User.getAdminUsers();
  return admin;
}



    