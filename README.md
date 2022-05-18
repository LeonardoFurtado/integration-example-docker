[![using dotenv-vault](https://img.shields.io/static/v1?label=using&message=dotenv-vault&color=FFF100)](https://vault.dotenv.org/project/prj_79a09d07f242e4d71cdc43624e90f66d9f55c6378fa8cfebcb1fb84b38600bb1/example)

# integration-example-docker

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-docker/master/docker.png" alt="docker" /><img src="https://raw.githubusercontent.com/dotenv-org/integration-example-docker/master/dotenv.png" alt="dotenv" />

Example Docker + Dotenv integration.

## Development

#### Quick use - build & run

```
$ docker build -t dotenv-org/integration-example-docker . && docker run -e $(cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker

# fish shell
$ docker build -t dotenv-org/integration-example-docker . && docker run -e (cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker
```

Visit [http://localhost:8080](http://localhost:8080)

#### Building image

```
$ docker build -t dotenv-org/integration-example-docker .
```

#### Accessing console

```
$ docker run -e $(cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker sh

# echo $DOTENV_ME
# exit
```

## Production

Running in production

```
docker run -e DOTENV_ME=PLACE_YOUR_IT_TOKEN_HERE --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker
```

In production replace the value of DOTENV_ME with your DOTENV_IT token for the particular environment.

Example running in production [https://dotenvintegrationexampledocker.herokuapp.com/](https://dotenvintegrationexampledocker.herokuapp.com/)
