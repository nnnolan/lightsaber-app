import { createPlayer } from '../lib/redis';

export default async function handler(req, res) {
    const id = await createPlayer(req.body);
    res.status(200).json({ id })
}