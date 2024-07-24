import React, { useEffect, useState } from "react";
import { RiContactsBook2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { GrView } from "react-icons/gr";

import axios from "axios";

function HomeScreen() {
  const Data = [
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
    {
      name: "Revanth",
      email: "mummidirevanth@gmail.com",
      phone: "+91 8712848530",
    },
    {
      name: "Mohit",
      email: "mummidimohit@gmail.com",
      phone: "+91 9712848530",
    },
    {
      name: "Rahim",
      email: "rahim@gmail.com",
      phone: "+91 7912348530",
    },
    {
      name: "Sunio",
      email: "sunio@gmail.com",
      phone: "+91 9823848530",
    },
    {
      name: "Nobita",
      email: "nobita@gmail.com",
      phone: "+91 98129348530",
    },
  ];
  const [data, setData] = useState([]);
  const [isAdd, setAdd] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [view,setView]=useState(false);
  const [searchTerm,setSearchTerm]=useState("");
  const [contact, setItem] = useState({});
  const [filteredData,setFilteredData]=useState([]);
  const [searchedData,setSearchedData]=useState([]);
  const [searchItem,setSearchItem]=useState({});
  const navigation = useNavigate();
  useEffect(() => {
    verifyHomeScreen();
    fetchContacts();
  }, []);
  useEffect(()=>{
    fetchContacts();
  },[isAdd,isEdit])
  const verifyHomeScreen = () => {
    const token = localStorage.getItem("accessToken");
    console.log("TOKEN=", token);
    if (!token) {
      navigation("/register");
    }
  };
  const fetchContacts = async () => {
    try {
      const URL = process.env.REACT_APP_BASE_URL+"/api/contacts";
      const token = localStorage.getItem("accessToken");
      console.log("TOKEN=",token);
      const response = await axios.get(URL, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("RES",response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    const arr=data.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(arr);
    if(!(searchItem && searchItem.name))
    {
      setSearchedData(data);
    }
  },[searchTerm]);
  useEffect(()=>{
    setSearchedData(data);
  },[data]);
  return (
    <div className="w-screen h-screen relative p-20">
      <IoIosLogOut
        onClick={() => {
          localStorage.clear();
          navigation("/register");
        }}
        size={30}
        className="absolute right-10 top-10 text-blue-900 cursor-pointer"
      />
      <div className="w-full h-full p-10">
        <div className="flex  flex-row items-center justify-center">
          <div className="w-[65%] min-w-[220px] shadow-black shadow-lg h-10 rounded-s-md overflow-hidden bg-white">
            <input
              type="text"
              onChange={(e)=>{
                if(e.target.value!=searchTerm)
                {
                  setSearchItem(null);
                }
                setSearchTerm(e.target.value);
              }}
              value={searchItem ? searchItem.name :  searchTerm }
              placeholder="Enter contact details ..."
              className="w-full h-full border border-white px-4 py-2"
            ></input>
             {(searchTerm!="") && (
          <div className="absolute mt-1 bg-white shadow-lg overflow-hidden rounded-lg w-[45vw] min-w-[220px]  top-86 mx-auto z-10">
            {filteredData.map((item, index) => (
              <div
                key={index}
                
                className="block py-2 px-4 overflow-hidden text-gray-800 hover:bg-gray-200"
                onClick={() => {
                  setSearchedData([item]);
                  setSearchItem(item);
                  setSearchTerm("")
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
          </div>
          <RiContactsBook2Line
            size={40}
            className="bg-blue-800 shadow-black shadow-lg min-w-[40px] rounded-e-md text-white p-1"
          />
        </div>
        <div className="w-full flex justify-center h-full">
          {(!isAdd && !isEdit && !view)? (
            <ViewComponents Data={searchedData} setView={setView} setEdit={setEdit} setItem={setItem} fetchContacts={fetchContacts} />
          ) : (
            <AddComponent
              setAdd={setAdd}
              isEdit={isEdit}
              setView={setView}
              view={view}
              setEdit={setEdit}
              contact={contact}
            />
          )}
        </div>
      </div>
      {!isAdd ? (
        <div
          onClick={() => {
            setAdd(true);
          }}
          className="bg-blue-500 shadow-black shadow-lg rounded-full p-3 absolute right-20 z-10 bottom-10 w-17 hover:opacity-50 h-17 flex items-center justify-center "
        >
          <FaPlus size={25} className="w-25 h-25 text-white " />
        </div>
      ) : null}
    </div>
  );
}

function ViewComponents({ Data, setEdit, setItem,setView ,fetchContacts}) {
  const handleDelete=async(item)=>{
    try{
      console.log("DELETE",item);
      const URL=process.env.REACT_APP_BASE_URL+"/api/contacts/"+`${item._id}`;
      
      const token = localStorage.getItem("accessToken");
      const response=await axios.delete(URL,{
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("DELETED",response);
      fetchContacts();
    }
    catch(err){
      console.log("ERROR IN DELETING CONTACT",err);
    }
  }
  return (
    <>
      {[...Data].length == 0 ? (
        <div className="flex w-[100vw] h-full  self-center items-center  justify-center text-[30px] text-black font-semibold">
          <p className="w-full text-center">No Contacts are added</p>
        </div>
      ) : (
        <div className="w-[100vw] min-w-[200px] h-full overflow-y-scroll  no-scrollbar gap-x-4 mx-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid  ">
          {Data.map((item, index) => {
            return (
              <div
               
                key={index}
                className="w-full  cursor-pointer hover:opacity-85 shadow-lg shadow-black min-w-[200px] h-[50px]  flex items-center justify-between  my-1 p-2 bg-slate-800 bg-opacity-90  rounded-md"
              >
                <CgProfile size={30} className="flex-none text-gray-200" />
                <p className="font-semibold text-xl text-start w-full ml-2 text-white">
                  {item?.name}
                </p>
                <div className="flex flex-row gap-4">
                <GrView  onClick={()=>{
                  setItem(item);
                  setView(true)
                }} size={30} className="flex-none text-violet-600" />
                  <MdModeEditOutline
                    onClick={() => {
                      setItem(item);
                      setEdit(true);
                    }}
                    size={30}
                    className="flex-none text-blue-200"
                  />
                  <MdDelete onClick={()=>{
                    handleDelete(item);
                  }} size={30} className="flex-none text-red-600" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

function AddComponent({ setAdd, isEdit, setEdit, contact,setView,view }) {
  const [email, setEmail] = useState((isEdit || view )? contact.email : "");
  const [phNumber, setPhNumber] = useState((isEdit || view ) ? contact.phone : "");
  const [name, setName] = useState((isEdit || view ) ? contact.name : "");
  const handleCreate=async()=>{
    try{
      const URL=process.env.REACT_APP_BASE_URL+"/api/contacts";
      const body={
        email,
        name,
        phone:phNumber
      }
      const token = localStorage.getItem("accessToken");
      const response=await axios.post(URL,body,{
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("CREATE",response);
      setAdd(false);
      // alert("New Contact Added");
    }
    catch(err){
      console.log("ERROR IN CREATING CONTACT",err);
    }
  }
  const handleEdit=async()=>{
    try{
      const URL=process.env.REACT_APP_BASE_URL+"/api/contacts/"+`${contact._id}`;
      const body={
        email,
        name,
        phone:phNumber
      }
      const token = localStorage.getItem("accessToken");
      console.log(URL,body);
      const response=await axios.put(URL,body,{
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("Edited",response);
      setEdit(false);
      // alert("Contact Edited");
    }
    catch(err){
      console.log("ERROR IN CREATING CONTACT",err);
    }
  }
  return (
    <div className="w-[90%] no-scrollbar overflow-y-scroll mt-10 rounded-xl relative p-10 flex flex-col justify-center shadow-xl shadow-black  bg-white">
      <TiDelete
        onClick={() => {
          setAdd(false);
          setEdit(false);
          setView(false);
        }}
        className="w-10 h-10 text-red-600 absolute top-2 right-2"
      />
      <div className="flex p-3 flex-row text-lg font-semibold  items-center  gap-2">
        <p className=" text-black w-[15%] text-nowrap">Name: </p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          contentEditable={!view}
          placeholder="Enter Contact Name"
          type="text"
          className="w-[85%] font-normal text-md text-black border-black border border-1 rounded-md p-2"
        ></input>
      </div>
      <div className="flex flex-row text-lg font-semibold  items-center p-3 gap-2">
        <p className=" text-black w-[15%] ">Email: </p>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          contentEditable={!view}
          placeholder="Enter Contact Email"
          type="email"
          className="w-[85%] font-normal text-md  text-black border-black border border-1 rounded-md p-2"
        ></input>
      </div>
      <div className="flex flex-row text-lg font-semibold  items-center p-3 gap-2">
        <p className=" text-black w-[15%] ">{"Phone Number:"} </p>
        <input
          value={phNumber}
          onChange={(e) => {
            setPhNumber(e.target.value);
          }}
          contentEditable={!view}
          placeholder="Enter Contact Phone Number"
          type="text"
          className="w-[85%]  font-normal text-md text-black border-black border border-1 rounded-md p-2"
        ></input>
      </div>
      {(!view)?(<div
        onClick={() => {
          if (isEdit) {
            
            handleEdit();
          } else{ 
            handleCreate();
            // setAdd(false);
          }
        }}
        className="px-7 py-3 mt-2 bg-blue-600 hover:opacity-55 cursor-pointer shadow-md shadow-black  text-white font-semibold rounded-lg flex items-center justify-center self-end w-[90px]"
      >
        <p>{isEdit ? "Edit" : "Create"}</p>
      </div>):null}
    </div>
  );
}
export default HomeScreen;
