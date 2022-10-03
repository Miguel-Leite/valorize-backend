import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IAuthenticateRequest } from "../@types/IAuthenticateRequest";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User.entity";


class AuthenticateUserService {

   async execute ({ email, password }:IAuthenticateRequest) {
       const usersRepository = AppDataSource.getRepository(User)

       const user = await usersRepository.findOneBy({
           email
       })

       if (!user) {
           throw new Error("E-mail/Password incorrect");
       }

       const passwordMatch = await compare(password, user.password)

       if (!passwordMatch) {
            throw new Error("E-mail/Password incorrect");
       }

       const token = sign({
           email: user.email
       },
       '5b6e32db33c13e3d773c7718aed2f2d9', 
       {
           subject: user.id,
           expiresIn: '1d'
       })

       return token;
   }

}

export { AuthenticateUserService }