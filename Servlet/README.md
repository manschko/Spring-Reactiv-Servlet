# Spring boot API with Reactive stack  implementation
To run the Spring boot application the environment variables need to be set for the DB connection.

| Env Variable | Usage in Spring application.properties | Example                                   |
|:------------:|----------------------------------------|-------------------------------------------|
|    DSURL     | spring.datasource.url                  | jdbc:postgresql://localhost:5432/postgres |
|   DSCLASS    | spring.datasource.driverClassName      | org.postgresql.Driver                     |
## Build jar with gradle
```bash
gradle jar
```
## Docker
this is only necessary if you want to run the app alone without docker-compose

### Docker build
```bash
docker build -t springio/spring-boot-servlet . 
```
### Docker run
```bash
docker run -p 8080:8080 springio/spring-boot-servlet
```
