export default function handler(req, res) {
    const data = require('../animals.json');
    res.status(200).json(data);
}