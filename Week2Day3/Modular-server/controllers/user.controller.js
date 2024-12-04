import users from "../modules/user.module.js";


const userController = {
    ReadAll: (req, res) => {
        res.json(users)
    },
    create: (req, res) => {
        // req.body will contain the form data from Postman or from React later
        console.log(req.body);
        // we can push it into the users array for now...
        // later on this will be inserted into a database using a database method
        users.push(req.body);
        // the updated users array
        res.json(users);
    },
    ReadOne: (req, res) => {
        // We can use the find method to get the first element that has the matching id
        const getUserById = users.find(user => user.id == req.params.id);
        // always add in a console.log to see what is happening
        console.log(getUserById);
        res.json(getUserById);
    },
    update: (req, res) => {
        users.forEach((user, idx) => {
            if (user.id == req.params.id) {
                user = { ...user, ...req.body };
                users[idx] = user;
            }
        });
        const updatedUser = users.find(user => user.id == req.params.id);
        res.json(updatedUser);
    },
    delete: (req, res) => {
        const userId = req.params.id;
        const index = users.findIndex(user => user.id == userId);
        users.splice(index, 1);
        res.json(users);
    }



}


export default userController




