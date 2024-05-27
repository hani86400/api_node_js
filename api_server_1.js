//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
//| Requirement models 
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
const express = require("express");
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

const app = express();
app.use(express.json());   

//Avoid error: (Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:5055/api/items. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE,DISPATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})



const items = [
  { id: 1, name: "user1", password: "password1" , email: "user1@abc.com" },    
  { id: 2, name: "user2", password: "password2" , email: "user2@abc.com" },    
  { id: 3, name: "user3", password: "password3" , email: "user3@abc.com" }
 ]

var items_counter = items.length;


//     ___     ___     _____               _       _        _    
//    / __|   | __|   |_   _|             /_\     | |      | |   
//   | (_ |   | _|      | |              / _ \    | |__    | |__ 
//    \___|   |___|     |_|      ___    /_/ \_\   |____|   |____|
//                              |___|                            
app.get('/api/items', (req, res) => {
    res.status(200).send(items)
});


//     ___     ___     _____             _ 
//    / __|   | __|   |_   _|           / |
//   | (_ |   | _|      | |             | |
//    \___|   |___|     |_|      ___    |_|
//                              |___|      

app.get('/api/items/:id', (req, res) => {
    // Validate the item Id.
    if (!req.params.id || isNaN(req.params.id)) {
    return res.status(400).send(`{"error": "Invalid Id:  ${req.params.id}"}`);
    }
    
    const item_id = parseInt(req.params.id, 10);
    const item = items.find((inp_item) => {return inp_item.id === item_id;  });
    
    if (!item) {
    return res.status(404).send(`{"error": "The item with the Id of ${req.params.id} was not found."}`);
    }
    res.send(item);
    });


//    ___      ___      ___     _____ 
//   | _ \    / _ \    / __|   |_   _|
//   |  _/   | (_) |   \__ \     | |  
//   |_|      \___/    |___/     |_|  
//                                    
app.post('/api/items', (req, res) => {
 items_counter = items_counter + 1	
 const item = {
 id: items_counter,
 name: req.body.name ,
 password: req.body.password,
 email: req.body.email 
}
items.push(item)
res.status(200).send(item)
});


//    ___     _   _     _____ 
//   | _ \   | | | |   |_   _|
//   |  _/   | |_| |     | |  
//   |_|      \___/      |_|  
//                            
app.put('/api/items/:id', (req, res) => {
    // Validate the item Id.
    if (!req.params.id || isNaN(req.params.id)) {
        return res.status(400).send(`{"error": "Invalid Id:  ${req.params.id}"}`);
    }

    const item_id = parseInt(req.params.id, 10);
    const item = items.find((inp_item) => {return inp_item.id === item_id;  });

    // If not exists, return 400 - Bad Request.
    if (!item) {
        return res.status(404).send(`{"error": "The item with the Id of ${req.params.id} was not found."}`);
    }

    // Update the item.
    item.name = req.body.name;
    item.password = req.body.password;
    item.email = req.body.email;

    // Return the updated item.
    items.forEach((element, index) => {
        if (element.id === item_id) {
            items[index] = item;
        }
    });

    res.send(item);
});


//    ___      ___     _        ___     _____     ___ 
//   |   \    | __|   | |      | __|   |_   _|   | __|
//   | D  |   | _|    | |__    | _|      | |     | _| 
//   |___/    |___|   L____|   |___|     |_|     |___|
//                                                    
app.delete('/api/items/:id', (req, res) => {
    // Validate the item Id.
    if (!req.params.id || isNaN(req.params.id)) {
         return res.status(400).send(`{"error": "Invalid Id:  ${req.params.id}"}`);
    }

    const item_id = parseInt(req.params.id, 10);
    const item = items.find((inp_item) => {return inp_item.id === item_id;  });



    // If not exists, return 400 - Bad Request.
    if (!item) {
        return res.status(404).send(`{"error": "The item with the Id of ${req.params.id} was not found."}`);
    }

    const itemIndex = items.indexOf(item);
    items.splice(itemIndex, 1);
    res.send(item);
});


//    _____    _    _   _   _                                                       
//   |  __ \  | |  | | | \ | |                                                      
//   | |__) | | |  | | |  \| |  ___    ___   _ __  __   __   ___   _ __             
//   |  _  /  | |  | | | . ` | / __|  / _ \ | '__| \ \ / /  / _ \ | '__|            
//   | | \ \  | |__| | | |\  | \__ \ |  __/ | |     \ V /  |  __/ | |     _   _   _ 
//   |_|  \_\  \____/  |_| \_| |___/  \___| |_|      \_/    \___| |_|    (_) (_) (_)
//                                                                                  
//                                                                                  
console.log(`from: \x1b[7m${__filename}\x1b[0m`);
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
//| PORT & HOSTNAME  are  environment variables or set in .env file (PORT=5005)
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
const PORT     = process.env.API_SERVER_PORT     || 5000;
const HOSTNAME = process.env.API_SERVER_HOSTNAME || 'localhost';
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
//| Starting server on port=PORT
//+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
app.listen(PORT,HOSTNAME, () => console.log(`server running on hostname ${HOSTNAME} port ${PORT}`))
  
