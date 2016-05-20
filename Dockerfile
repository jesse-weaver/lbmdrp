# DOCKER-VERSION 1.5-10

FROM    centos:centos6

RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN yum install -y nodejs npm git

COPY . /opt/apps/lbmdrp
WORKDIR /opt/apps/lbmdrp

RUN  ls -al /opt/apps/lbmdrp/package.json

RUN npm install

EXPOSE  8004

CMD ["node", "app.js"]