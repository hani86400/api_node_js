# Quick API
Sample API server and sample CLI tests using curl tool (on linux).


### STEP_01 (Clone repository and install pakages)
```
git clone https://github.com/hani86400/quick_api.git

cd quick_api #change to project folder

npm install
```

### STEP_02 (Run server)
```
cd quick_api #change to project folder
node api_server_1.js
```

## STEP_03 (Testing)


### METHOD_1 (run command by command)
open new terminal (one way is by press CRTL+ALT+T)

TEST GET_ALL
```
curl -s http://localhost:5000/api/items
```
output
```
[{"id":1,"name":"user1","password":"password1","email":"user1@abc.com"},{"id":2,"name":"user2","password":"password2","email":"user2@abc.com"},{"id":3,"name":"user3","password":"password3","email":"user3@abc.com"}]
```
To formating the output you can use (json_pp) tool.
```
curl -s http://localhost:5000/api/items | json_pp
```
output
```
[
   {
      "email" : "user1@abc.com",
      "id" : 1,
      "name" : "user1",
      "password" : "password1"
   },
   {
      "email" : "user2@abc.com",
      "id" : 2,
      "name" : "user2",
      "password" : "password2"
   },
   {
      "email" : "user3@abc.com",
      "id" : 3,
      "name" : "user3",
      "password" : "password3"
   }
]

```


TEST GET_1 (item id=3)
```
curl -s http://localhost:5000/api/items/3
```
output
```
{"id":3,"name":"user3","password":"password3","email":"user3@abc.com"}
```


TEST DELETE (item id=3)
```
curl -s -X DELETE http://localhost:5000/api/items/1
```
output
```
{"id":1,"name":"user1","password":"password1","email":"user1@abc.com"}
```

TEST POST
```
curl -s -X POST http://localhost:5000/api/items -H 'Content-Type: application/json' -d '{"name": "user100", "password": "m&dHye" , "email": "user100@user100.com" }'

```
output
```
{"id":4,"name":"user100","password":"m&dHye","email":"user100@user100.com"}
```


TEST PUT
```
curl -s -X PUT http://localhost:5000/api/items/4 -H 'Content-Type: application/json' -d '{"name": "user100", "password": "newpassword" , "email": "user100@aaaaa.aaa" }'

```
output
```
{"id":4,"name":"user100","password":"newpassword","email":"user100@aaaaa.aaa"}
```


### METHOD_2 (run script with all test commands )

Content of file data.txt
```
{"name": "user300", "password": "p6aq3l" , "email": "user300@user300.com" }
```

open new terminal (one way is by press CRTL+ALT+T)
```
#Add execute permission
chmod +x api_client_1.sh 

#Run script
./api_client_1.sh
```

output
![api_client_output.png](https://github.com/hani86400/quick_api/blob/main/api_client_output.png)



### Todo

- [ ] Work on (api_client_1.bat ) for windows.
- [ ] Work on (api_server_mongodb.js )
- [ ] Work on (api_server_mysql.js )



### ✓ Done 

- [X] api_server_1.js 
- [X] api_client_1.sh for linux




