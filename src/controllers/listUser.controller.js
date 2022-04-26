import listUserService from "../services/listUser.service";

const listUserController = async (request, response) => {
  try {
    const users = await listUserService();

    return response.status(200).json(users);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listUserController;
