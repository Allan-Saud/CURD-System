import react, { useEffect, useState } from "react"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink,useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();//redirect
 
    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);
    const getdata = async (e) => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {

            console.log("error");
        } else {
            setuserdata(data);
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, [])

   

    // const deleteuser = async (id) => {
    //     try {
    //         const res = await fetch(`/deleteuser/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });
    
    //         const data = await res.json();
    //         console.log("delete data", data);
    
    //         if (!res.ok) {
    //             throw new Error("Error deleting user");
    //         } else {
    //             alert("User deleted successfully");
    //             navigate('/');//redirect
               
    //         }
    //     } catch (error) {
    //         console.error("Error deleting user:", error);
    //     }
    // };


    const deleteuser = async (id) => {
        try {
            const res = await fetch(`/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const data = await res.json();
            console.log("delete data", data);
    
            if (!res.ok) {
                throw new Error("Error deleting user");
            } else {
                alert("User deleted successfully");
                
                // Update the state after successful deletion to trigger a re-render
                const updatedUserData = getuserdata.filter(user => user._id !== id);
                setuserdata(updatedUserData);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    
    


    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">
                        add data
                    </NavLink>

                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">job</th>
                            <th scope="col">number</th>

                            <th scope="col" style={{ textAlign: 'center' }}>Operations</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((data, id) => (

                                <tr>
                                    <th scope="row">
                                        {id + 1}
                                    </th>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>
                                        {data.email}
                                    </td>
                                    <td>
                                        {data.work}
                                    </td>
                                    <td>
                                        {data.mobile}
                                    </td>

                                    <td className="d-flex justify-content-between">
                                        <NavLink to={`view/${data._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>

                                        <NavLink to={`edit/${data._id}`}><button className="btn btn-primary "><BorderColorIcon /></button></NavLink>
                                        <button className="btn btn-danger" onClick={() => deleteuser(data._id)}><DeleteIcon /></button>


                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </div>

    )


}

export default Home