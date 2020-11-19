import redis from 'redis';

const client = redis.createClient(6379, 'redis');

client.on('error', (error) => {
  console.error(error);
});

client.set('key', 'value', redis.print);
client.get('key', redis.print);
