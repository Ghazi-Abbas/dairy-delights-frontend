import Categories from "./Categories";
import Banner from "./Banner";
import List from "./List";
import Home from "./Home";
import{Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "./Login";
import Signup from "./SignUp";
import Cart from "./Cart";
import Detail from "./Detail";
import UserHome from "./UserHome";
import AdminHome from "./AdminHome.js";
import { useContext } from "react";
import { DataContext } from "./App.js";
import Account from "./Account.js";
import Payment from "./Payment.js";
import Success from "./Succecc.jsx";
import Email from "./Email.js";
import CheckOrder from "./CheckOrder.js";

export default function Main({products ,onCategorySelect,selectedCategories}){
    const {isLoggedIn}=useContext(DataContext);
    const ProtectedRoute=()=>{
        console.log("ProtectionCheck");
        return isLoggedIn===true?<Outlet/> :<Navigate to="/login"/>

    }
    return(
        <div style={{height:"100%", padding:"6px"}}>
         {/* <Categories/>
         <Banner/>
         <List products={products}/> */}
         <Routes>
         <Route path="/detail/:uid" element={<Detail/>}/>
         <Route path="/" element={<Home data={products} onCategorySelect={onCategorySelect} selectedCategories={selectedCategories}/>} />
         <Route path="/*" element={<Home data={products} onCategorySelect={onCategorySelect} selectedCategories={selectedCategories}/>} />
         <Route path="/login"  element={<Login/>}/>
         <Route path="/signup"  element={<Signup/>}/>
        
         <Route element={<ProtectedRoute/>}>
         <Route path="/userhome/:uid" element={<UserHome/>}/>
         <Route path="/adminhome/:uid" element={<AdminHome/>}/>
         <Route path="/cart"     element={<Cart/>}/>
         <Route path="/account" element={<Account/>}/>
         <Route path="/payment"  element={<Payment/>}/>
         <Route path="/success"  element={<Success/>}/>
         <Route path="/email"  element={<Email/>}/>
         <Route path="/checkOrder"  element={<CheckOrder/>}/>
         
         </Route>
          

         

         </Routes>



        </div>
    )

}