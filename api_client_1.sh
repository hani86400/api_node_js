#!/bin/sh

export API_SERVER_HOSTNAME='localhost'
export API_SERVER_PORT='5000'
export API_SERVER_ROUTE='api/items'

#
# GET  (all items)
#
echo -e "\e[1;96mGET  (all items)\ncurl -s http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}\e[0m"
curl -s http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}

#
# GET  (one item)
#
THE_ID='2'
echo -e "\n\n\e[1;96mGET  (one item)\nTHE_ID='2'\ncurl -s http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}/\${THE_ID}\e[0m";
curl -s http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}/${THE_ID} 

#
# DELETE (one item)
#
THE_ID='3'
echo -e "\n\n\e[1;96mDELETE (one item)\nTHE_ID='3'\ncurl -s -X DELETE http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}/\${THE_ID}\e[0m"
curl -s -X DELETE http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}/${THE_ID}

#
# DELETE (one item not exist)
#
THE_ID='333'
echo -e "\n\n\e[1;96mDELETE (one item not exist)\nTHE_ID='333'\ncurl -s -X DELETE http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}/\${THE_ID}\e[0m"
curl -s -X DELETE http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}/${THE_ID}


#
# POST (new item inline)
#
echo -e "\n\n\e[1;96mPOST (new item inline)\ncurl -s -X POST http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE} -H \"Content-Type: application/json\" -d '{\"name\": \"user100\", \"password\": \"m&dHye\" , \"email\": \"user100@user100.com\" }'\e[0m"
curl -s -X POST http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE} -H "Content-Type: application/json" -d '{"name": "user100", "password": "m&dHye" , "email": "user100@user100.com" }'

#
# POST (new item variable)
#
THE_DATA='{"name": "user200", "password": "f5sw2e" , "email": "user200@user200.com" }'
echo -e "\n\n\e[1;96mPOST (new item variable)\nTHE_DATA='${THE_DATA}'\ncurl -s -X POST http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE} -H \"Content-Type: application/json\" -d \"\${THE_DATA}\"\e[0m"
curl -s -X POST http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE} -H "Content-Type: application/json" -d "${THE_DATA}"

#
# POST (new item from file)
#
echo -e "\n\n\e[1;96mPOST (new item from file)\ncurl -s -X POST http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE} -H \"Content-Type: application/json\" -d @data.txt\e[0m"
curl -s -X POST http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE} -H "Content-Type: application/json"  -d @data.txt

#
# PUT (one item)
#
THE_ID='1'
echo -e "\n\n\e[1;96m\nPUT (one item)\nTHE_ID='1'\ncurl -s -X PUT http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}/\${THE_ID} -H \"Content-Type: application/json\" -d '{\"name\": \"user700\", \"password\": \"m&dHye\" , \"email\": \"user700@user700.com\" }' \e[0m"
curl -s -X PUT http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}/${THE_ID} -H "Content-Type: application/json" -d '{"name": "user700", "password": "m&dHye" , "email": "user700@user700.com" }' 
 

#
# PUT (one item not exist)
#
THE_ID='1745'
echo -e "\n\n\e[1;96mPUT (one item not exist)\nTHE_ID='1745'\ncurl -s -X PUT http://\${API_SERVER_HOSTNAME}:\${API_SERVER_PORT}/\${API_SERVER_ROUTE}/\${THE_ID} -H \"Content-Type: application/json\" -d '{\"name\":\"userany\", \"password\": \"any\" , \"email\": \"any@any.com\"} \e[0m"
curl -s -X PUT http://${API_SERVER_HOSTNAME}:${API_SERVER_PORT}/${API_SERVER_ROUTE}/${THE_ID} -H "Content-Type: application/json" -d '{"name":"userany","password":"any","email":"any@any.com"}'
echo
