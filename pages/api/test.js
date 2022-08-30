import mongodbConnect from "../../utils/mongodbConnect";

mongodbConnect();

export default async (req, res) => {
    res.json({ test: 'test' });
}