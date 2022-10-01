interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}

class CreateUserServices {

    async execute({ name, email, admin }: IUserRequest) {
        const UserRepository = new UserRepositories
    }

}