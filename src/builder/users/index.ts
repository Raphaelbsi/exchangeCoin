import { FindByEmail, FindByLogin, Login, Save } from '../../controller/users';
import { LoginBody, Users } from '../../types/user';
import jwt from 'jsonwebtoken';

// deveria ser uma Env de ambiente
const SECRET = 'exchange';

export const SingunResponse = async (body: Users) => {
  if (body) {
    if (!body.firstName) {
      return { status: 400, message: 'Digite um primeiro nome válido' };
    } else if (!body.lastName) {
      return { status: 400, message: 'Digite um sobrenome válido' };
    } else if (!body.age) {
      return { status: 400, message: 'Digite sua idade' };
    } else if (!body.login) {
      return { status: 400, message: 'Digite um login Válido' };
    } else if (!body.email) {
      return { status: 400, message: 'Digite um email válido' };
    } else if (!body.password) {
      return { status: 400, message: 'Digite uma senha válida' };
    } else {
      const ValidateEmail = await FindByEmail(body.email);
      const ValidateLogin = await FindByLogin(body.login);

      if (ValidateEmail || ValidateLogin) {
        if (ValidateEmail) {
          return { status: 400, message: 'Email em uso' };
        } else {
          return { status: 400, message: 'Login em Uso' };
        }
      } else {
        await Save(body);
        return { status: 201, message: 'Usuário criado' };
      }
    }
  } else {
    return { status: 400, message: 'Preencha corretamente todos os campos' };
  }
};

export const SinginResponse = async (body: LoginBody) => {
  if (body) {
    const { login, password } = body;

    if (login && password) {
      const auth = await Login({ login, password });
      if (auth) {
        const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
        return { status: 200, message: 'Usuário autenticado', token: token };
      } else {
        return { status: 401, message: 'Digite um usuário e senha válidos' };
      }
    } else {
      return { status: 400, message: 'bad request' };
    }
  } else {
    return { status: 400, message: 'bad request' };
  }
};
