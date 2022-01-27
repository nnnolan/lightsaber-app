import { Client, Entity, Schema, Repositroy } from "redis-om";

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

export async function createPlayer(data) {
    await connect();
  
    const repository = new Repository(schema, client);
  
    const player = repository.createEntity(data);
  
    const id = await repository.save(player);
    return id;
}