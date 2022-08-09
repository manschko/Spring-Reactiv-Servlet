# Spring boot API with Reactive stack  implementation

To run the application the environment variables need to be set for the DB connection.

| Env Variable | Usage in Spring application.properties | Example                                    |
|:------------:|----------------------------------------|--------------------------------------------|
|  R2DBC_URL   | spring.r2dbc.url                       | r2dbc:postgresql://localhost:5432/postgres |
|   PROFILE    | spring.profiles.active                 | possible options: ``postgres``             |

## Build jar with gradle

```bash
gradle build
```

## Docker

this is only necessary if you want to run the app alone without docker-compose

### Docker build

```bash
docker build -t springio/spring-boot-reactiv . 
```

### Docker run

```bash
docker run -p 8080:8080 springio/spring-boot-reactiv
```
