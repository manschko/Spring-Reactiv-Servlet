FROM openjdk:18-jdk-alpine


EXPOSE 8849
ARG JAR_FILE=build/libs/\*.jar
COPY ${JAR_FILE} app.jar


ENTRYPOINT ["java", "-jar", "-Xmx3G", "-Xms3G", "/app.jar"]
