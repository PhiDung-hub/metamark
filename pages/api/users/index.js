import  mongodbConnect from '../../../utils/mongodbConnect';
import Users from '../../../models/users';

mongodbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await Users.find({});
                res.status(200).json({ success: true, data: users })
            } catch (error) {
                res.status(400).json({ success: false, data: 1 })
            }
            break;
        case 'POST':
            try {
                const users = await Users.create(req.body);
                res.status(201).json({ success: true, data: users })
            } catch (error) {
                res.status(400).json({ success: false, data: 2 })
            }
            break;
        default:
            res.status(400).json({ success: false, data:3 })
            break;
    }
}
