export {User} from "../database/models/user.model.js"

export const findOneUserById = async (id) => {
    const user = await User.findOne({where: {id}});

    return user;
}

export const createUserRepository = async (name) => {
    await User.create({name});
}

export const updateUserRepository = async(id, name) => {
    await User.update({name}, {where: {id}});

    return await User.findOne({ where: {id}});
}

export const deleteUserRepository = async (id) => {
    await User.destroy({where: {id}});
}

export const findAllUsersRepository = async() => {
    return await User.findAll;
}