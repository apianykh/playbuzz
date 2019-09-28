# Playbuzz Backend Exercise

Developed under a guide of [Playbuzz backend exercise](https://github.com/ArrDez/playbuzz/blob/master/docs/Playbuzz.pdf)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ArrDez/playbuzz

# Go inside the directory
cd playbuzz

# Install dependencies
yarn (or npm install)

# Create Env file
cp .env.example .env

# To start server
yarn server (or npm run dev)

# To run tests
yarn test (or npm run test)
```

### Docker-compose

The app is serving through Nginx reverse proxy in production enviroment. Or on your host, if you wish 

```shell
docker-compose up -d
```

### Some description
Total time spent on this task approximately 6h. Without frontend it's much quicker :)

Builded from scratch. The only thing I must admit that using maxmind GeoIP database through nodejs is not the way it should be built. The best way here will be to use Nginx GeoIP module and provide already resolved data through headers.

There is an Postman collection if you want to play with it. 
[Here](https://github.com/ArrDez/playbuzz/blob/master/Playbuzz.postman_collection.json)