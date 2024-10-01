FROM tomcat:9-jre9
COPY ./testfreshers.war  /usr/local/tomcat/webapps
