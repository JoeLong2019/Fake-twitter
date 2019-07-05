import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Login(){
    useEffect(() => {
        fetchItems();
    },[]);
    
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('');
    
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);

    
    
};




  return(
  
    
<div>
{/* <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style> */}

{/* //       <div class="col">
//         <a href="#" class="fb btn">
//           <i class="fa fa-facebook fa-fw"></i> Login with Facebook
//          </a>
//         <a href="#" class="twitter btn">
//           <i class="fa fa-twitter fa-fw"></i> Login with Twitter
//         </a>
//         <a href="#" class="google btn"><i class="fa fa-google fa-fw">
//           </i> Login with Google+
//         </a>
//       </div>


        // <input type="text" name="username" placeholder="Username" required>
        // <input type="password" name="password" placeholder="Password" required>
        // <input type="submit" value="Login">
         */}
        </div>
  )
}

export default Login;