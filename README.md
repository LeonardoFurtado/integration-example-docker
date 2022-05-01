Works with [dotenv-vault](https://github.com/dotenv-org/dotenv-vault). Learn more at [dotenv.org](https://dotenv.org).

# integration-example-docker

<img src="https://raw.githubusercontent.com/dotenv-org/integration-example-docker/master/docker.png" alt="docker" /><img src="https://raw.githubusercontent.com/dotenv-org/integration-example-docker/master/dotenv.png" alt="dotenv" />

Example Docker + Dotenv integration.

## Development

Quick use - build & run

```
$ docker build -t dotenv-org/integration-example-docker . && docker run -e $(cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker

# fish shell
$ docker build -t dotenv-org/integration-example-docker . && docker run -e (cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker
```

Building image

```
$ docker build -t dotenv-org/integration-example-docker .
```

Accessing console

```
$ docker run -e $(cat .env.me) --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker sh

# echo $DOTENV_ME
# exit
```

## Production

Running in production

```
docker run -e DOTENV_ME=place-your-it-token-here --rm -it -p 8080:8080 --init dotenv-org/integration-example-docker
```
