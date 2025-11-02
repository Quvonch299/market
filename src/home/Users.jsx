import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import UsersModal from "./UsersModal";

export default function UsersList() {
  
  const [All, setAll] = useState([]);
  const[showUser, setShowUser] = useState(false)
   const [select,setSelect] = useState()

  const GetData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setAll(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const Userclose = function(){
    setShowUser(false)
    setSelect(0)
  }


  useEffect(()=>{
        console.log(select);
        
      },[select])

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="p-6">
      <Navbar/>
      <h2 className="text-2xl font-bold mb-4 text-center">Products List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
        All.map((item) => (
          <div
            key={item.id} 
            className="bg-white rounded-2xl shadow p-5 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
  src={`https://i.pravatar.cc/150?u=${item.id}`}
  alt={item.name.firstname}
  className="w-20 h-20 rounded-full mb-3 object-cover"
/>

            <h3 className="font-semibold text-lg text-center">{item.name.firstname}  {item.name.lastname}</h3>

            <button onClick={()=>{setShowUser(true),setSelect(item.id)}}  className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-xl text-sm hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
        {
          showUser&&<UsersModal select={select} Userclose={Userclose} />

        }
      </div>
    </div>
  );
}
