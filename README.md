~ Created By Soumyadeep Sinha

This is a blog website built using Angular and SpringBoot

## FEATURES

1. Create a blog using images, videos (embedded) or text paragraph.
2. See your posted blogs.
3. Delete blogs. 
4. User Account CRUD.

## SYSTEM CONFIGURATION

1. Angular CLI: 16.2.3
2. Node: 16.17.0
3. Package Manager: npm 9.8.0
4. OS: win32 x64

1. java 17.0.3.1 2022-04-22 LTS
2. Java(TM) SE Runtime Environment (build 17.0.3.1+2-LTS-6)
3. Java HotSpot(TM) 64-Bit Server VM (build 17.0.3.1+2-LTS-6, mixed mode, sharing)

## INSTALLATION

1. For Angular frontend part navigate to the "BlogWebsite" folder in terminal.
2. Then write 
```
npm install or npm i
``` 
3. This will install all dependencies.

4. Now for Backend open the "project" folder in any IDE that can run Spring web project.
5. navigate to "\src\main\java\com\blog\project\ProjectApplication.java"
6. Run this app --> ProjectApplication.java .

BUT BEFORE ALL OF THESE CREATE A DATABASE IN MySQL and make the following changes :

1. Go inside --> \project\src\main\resources\application.properties
2. Modify the "application.properties" file.
3. Modification : 
```
spring.datasource.url=jdbc:mysql://localhost:3306/<YOUR-DATABASE-NAME>?useSSL=false
spring.datasource.username=<USERNAME>
spring.datasource.password=<PASSWORD>

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL57Dialect

spring.jpa.hibernate.ddl-auto=update
spring.jpa.hibernate.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

NOW TO RUN THE APP FO BACK TO THE FRONTEND PART IN TERMINAL AND WRITE
```
ng serve
```
or
```
npm start
```

### THANK YOU ...