import bcrypt from 'bcrypt';
import { Users, LoginBody } from '../../types/user';
import { AppDataSource } from '../../data-source';
import { User } from '../../entity/Users';

const AllUser = AppDataSource.manager.getRepository(User);

export async function Save(user: Users) {
  const senha = bcrypt.hashSync(user.password, 10);
  try {
    const NewUser = new User();
    NewUser.firstName = user.firstName;
    NewUser.lastName = user.lastName;
    NewUser.age = user.age;
    NewUser.email = user.email;
    NewUser.password = senha;
    NewUser.login = user.login;

    await AppDataSource.manager.save(NewUser);
  } catch (error) {
    console.log(error);
  }
}

export async function FindByEmail(email: string) {
  try {
    const UserFound = await AllUser.findOneBy({ email: email });
    return UserFound;
  } catch (error) {
    console.log(error);
  }
}

export async function FindByLogin(login: string) {
  try {
    const UserFound = await AllUser.findOneBy({ login: login });
    return UserFound;
  } catch (error) {
    console.log(error);
  }
}

export async function Login(login: LoginBody) {
  try {
    const UserFound = await FindByLogin(login.login);
    if (UserFound) {
      const { password } = UserFound;

      const passwordValid = bcrypt.compareSync(
        login.password,
        password as string
      );

      if (passwordValid) {
        return true;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}
