FROM openjdk:18-jdk-alpine

RUN wget https://download.ej-technologies.com/jprofiler/jprofiler_linux_11_1_4.tar.gz -P /tmp/ &&\
 tar -xzf /tmp/jprofiler_linux_11_1_4.tar.gz -C /usr/local &&\
 rm /tmp/jprofiler_linux_11_1_4.tar.gz

ENV JPAGENT_PATH="-agentpath:/usr/local/jprofiler11.1.4/bin/linux-x64/libjprofilerti.so=port=8849,nowait"
EXPOSE 8849
ARG JAR_FILE=build/libs/\*.jar
COPY ${JAR_FILE} app.jar


ENTRYPOINT ["java", "-jar", "/app.jar"]
