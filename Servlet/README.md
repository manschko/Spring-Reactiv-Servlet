# Spring boot API with Reactive stack  implementation
## Build jar with gradle
```bash
gradle build
```
## Docker
this is only necessary if you want to run the app alone without docker-compose

### Docker build
```bash
docker build -t springio/spring-boot-reaktiv . 
```
### Docker run
```bash
docker run -p 8080:8080 springio/spring-boot-reaktiv
```
