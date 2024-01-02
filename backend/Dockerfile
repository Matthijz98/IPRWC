FROM openjdk:23-slim
RUN mkdir /app
COPY build/libs /app
RUN find /app -type f ! -name '*plain*' -name '*.jar' -exec mv {} /app/app.jar \;
ENTRYPOINT ["java","-jar","/app/app.jar"]