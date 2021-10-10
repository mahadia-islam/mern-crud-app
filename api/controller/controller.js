const User = require('./../models/User');

const getUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json({
            users
        })
    } catch (err) {
        res.status(500).json({
            error: {
                common: {
                    msg: err.message
                }
            }
        });
    }
}

const getById = async (req,res,next) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ _id: id });
        res.json({
            user
        })
    } catch (error) {
        res.status(500).json({
            errors: {
                common: {
                    msg:"user not founded"
                }
            }
        })
    }
}

const addUser = async (req,res,next) => {
    let newUser;
    try {
        newUser = new User({
            ...req.body
        });
        await newUser.save();
        res.json({
            success: {
                msg: "user added successfully"
            }
        });
    } catch (err) {
        res.status(500).json({
            error: {
                common: {
                    msg:"server side problem occurd with adding user"
                }
            }
        })
    }
}

const updateUser = async (req,res,next) => {
    const { id } = req.params;
    try {
        await User.updateOne({ _id: id }, { $set: { ...req.body } });
        res.json({
            success: "user updated successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: {
                common: {
                    msg:"there was an server side error with updating user"
                }
            }
        });
    }
}

const deleteUser = async (req,res,next) => {
    const {id} = req.params;
    try {
        await User.deleteOne({ _id: id });
        res.json({
            success: "user deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: {
                common: {
                    msg: "there was an server error with deleting user"
                }
            }
        });
    }
}

module.exports = {
    getUser,
    getById,
    addUser,
    updateUser,
    deleteUser
}