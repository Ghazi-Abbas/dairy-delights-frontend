import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Rolling from './Rolling';
import Banner from './Banner';
import Login from './Login';
import SignupComponent from './SignUp';
import Footer from './Footer';
import axios from 'axios';
import Categories from './Categories';
import { createContext, useEffect, useState } from 'react';
import Main from './Main';
import Signup from './SignUp';
import { BrowserRouter } from 'react-router-dom';
import NevBar from './NevBar';
import Email from './Email';
import Payment from './Payment';
import { PayPalButtons } from "@paypal/react-paypal-js";
export const DataContext=createContext();



function App() {
  const [image,setImage]=useState();
  const[name,setName]=useState();
  const[role,setRole]=useState();
  const[stdId,setStdId]=useState();
  const[amoutToPay,setAmoutToPay]=useState();
  
  const[item,setitem]=useState(0);
  const[isLoadind,SetLoading]=useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const[isLoggedIn,setIsLoggIn]=useState(false);
  
  let url="http://localhost:3004/products";
  const[masterData,setMasterData]=useState([]);
  const[displayData,setDisplayData]=useState([]);
  
  useEffect(function(){
    axios.get(url)
    .then(resp=>{
      setMasterData(resp.data);
      setDisplayData(resp.data);
      SetLoading(false);

    })
    .catch(err=>{
      SetLoading(false);
      alert("JSON SERVER IS NOT CONNECTED");
    })
    
  },[])

  const input=(e)=>{
    const value=e.target.value;
    console.log(value);
    const filtered =masterData.filter(d=> d.productName.toLowerCase().includes(value.toLowerCase()));
    setDisplayData(filtered);
  }

  const onChange=(e)=>{
    const change=e.target.value;
    let sorted=[...displayData];
    if(change==="price-low") sorted.sort((a,b)=>parseInt(a.price)-parseInt(b.price));
     else if (change === "price-high") sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      else if (change === "newest") 
    // Assuming  an 'id' field that increments for newer products
    sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id));

    else if (change === "popular") {
       sorted.sort((a, b) => {
        if (a.rating !== undefined && b.rating !== undefined) {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }
       })
    }
   setDisplayData(sorted);

    }

    const handleCategorySelect=(category)=>{
       setSelectedCategory(category);
      if(category==="All"){
        setDisplayData(masterData);
      }
      else{
        const filterdC =displayData.filter(
       d=> d.category.toLowerCase().includes(category.toLowerCase())
      );
      console.log(category);
      setDisplayData(filterdC);
      }
 
      
      
    }
  

  return (
    <div >
    <h1>PayPal Sandbox Test Payment</h1>

      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "5.00"
                }
              }
            ]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Payment Successful 🎉 " + details.payer.name.given_name);
            console.log(details);
          });
        }}
      />
    {/* <Rolling/>
      <Header/>
      <Main products={displayData} />
      <Login/>
      <Signup/>
      <Footer/> */}
      
      <DataContext.Provider value={{isLoggedIn,setIsLoggIn,image,setImage,name,setName, role,setRole,stdId,setStdId ,item,setitem ,amoutToPay,setAmoutToPay}}>
      <BrowserRouter>
       <NevBar OnSerchEvent={input } onChange={onChange}/>
     
      {
        isLoadind &&  <span>Loading .....</span>
      }
      

      <Main products={displayData} onCategorySelect={handleCategorySelect}  selectedCategories={selectedCategory}/>
      

      </BrowserRouter>
      </DataContext.Provider>
      <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
