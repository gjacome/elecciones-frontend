#BUILD APLICATION

# base image
FROM node:10.16.3 as builder
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@11.0.2
# add app
COPY . /usr/src/app

#generate build
RUN ng build --prod -- --output-path=./dist/Elecciones 

# ADD NGINX SERVER
FROM nginx:1.17.1-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /usr/src/app/dist/Elecciones /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose port 443
EXPOSE 443

# run nginx
CMD ["nginx", "-g", "daemon off;"]