
import { useCallback, useEffect, useState } from "react";
import Button from "../button/button";
import Input from "../innput/input";
import Table from "../table/table";
import axios from "axios"


const FormComponent = () => {
  const [addFormToggle, setAddFormToggle] = useState({addButtonActive : true, formActive : false});
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState({
    name : "",
    email : "",
    number : "",
    activePage : 1
  })
  const [ addButton, setAddButton] = useState(true)
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: ""
  });

  const fetchData = useCallback(async () => {
    try {

      await axios.get(`http://localhost:8081/user/api/v1/allUsers?nameSort=${sorting.name}&emailSort=${sorting.email}&numberSort=${sorting.number}&activePage=${sorting.activePage}`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          console.log("res ", res.data.data)
          setUsers({users : res.data.data, totalUsers : res.data.totalUsers })
        })
    } catch (error) {
      console.log("err ", error)
    }
  }, [sorting]);

  useEffect(() => {
    fetchData()
  }, [sorting]);

  const onchannge_handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onclick_handler = (e) => {
    setForm({name : "", email : "", number : ""});
    
    setAddFormToggle({...addFormToggle, formActive : addFormToggle.formActive ? false : true, addButtonActive : true })
  }

  const submit_form_handler = async () => {
    try {
      if (form.name && form.email && form.number) {
        const config = {
          headers: {
            "content-type": "application/json"
          }
        }
        await axios.post("http://localhost:8081/user/api/v1/createUser", form, config).then((res)=>{
          if(res.data.success){
            fetchData();
          }
        })
      }
    } catch (error) {

    }
  };

  const deleteUserHandler = async ({ id }) => {
    try {
      await axios.delete(`http://localhost:8081/user/api/v1/deleteUser/${id}`)
        .then((res) => {
          if (res.data.success) {
            fetchData()
          }
        })
    } catch (error) {

    }
  };

  const updateUser_handler = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json"
        }
      }

      await axios.patch(`http://localhost:8081/user/api/v1/updateUser/${form.email}`, form, config)
        .then((res) => {
          if(res.data.success){
            fetchData()
          }
        })
    } catch (error) {

    }
  }

  const selectUserToUpdate = async ({ id }) => {
    alert(id)
    try {
      const config = {
        headers: {
          "content-type": "application/json"
        }
      }

      await axios.get(`http://localhost:8081/user/api/v1/oneUser/${id}`, config)
        .then((res) => {
          if(res.data.success){
          let result = res.data.data;
          delete result.id;
          setForm({name : result.name, email : result.email, number : result.number })

          // setAddFormToggle(true);
    setAddFormToggle({...addFormToggle, formActive : true, addButtonActive : false })

          }

        })
    } catch (error) {

    }
  }
  console.log("sorting ", sorting);

  

  return (
    <div className="w-screen flex flex-wrap lg:justify-center gap-x-8 p-2 bg-gray-100 pt-20">
      <div className="w-full lg:w-5/12 flex min-h-full flex-col p-2 lg:p-4 shadow-sm bg-white">

        <Button onclick_handler={onclick_handler} />
        <div className={` flex-col gap-x-3 gap-y-2 lg:gap-y-3 mt-4 lg:mt-6 ${addFormToggle.formActive ? "flex" : "hidden"}`}>
          <Input onchannge_handler={onchannge_handler} name="name" type="text" value="" defaultValue={form.name} placeholder="Enter your name.." />
          <Input onchannge_handler={onchannge_handler} name="email" type="email" value="" defaultValue={form.email} placeholder="Enter your email id.." />
          <Input onchannge_handler={onchannge_handler} name="number" type="number" value="" defaultValue={form.number} placeholder="Enter your number.." />
          <button onClick={()=> { 
            if( addFormToggle.addButtonActive ){
              submit_form_handler()
            }
            else{
              updateUser_handler()
            }
            }} className="bordder text-gray-100 text-sm lg:text-lg font-semibold tracking-wide bg-green-600 rounded px-3 md:px-4 xl:px-5 py-3 md:py-2 xl:py-3 w-full mt-4">{addFormToggle.addButtonActive ? "Add User" : "Update User"}</button>

        </div>

      </div>
      <Table users={users} deleteUserHandler={deleteUserHandler} selectUserToUpdate={selectUserToUpdate} sorting={sorting} setSorting={setSorting} />
    </div>
  )
};

export default FormComponent;