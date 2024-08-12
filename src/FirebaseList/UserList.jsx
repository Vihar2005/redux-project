import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './FirebaseList'


const Userlist = (e) => {
    const [data, setData] = useState({
        List: "",
        id: ""
    })
    const [userdata, setUserData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const saveData = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "EmployeeList"), data)
        console.log('inserted successfully');

        setData({
            List: "",
            id: ""
        })
    }

    const deleteData = async (id) => {
        await deleteDoc(doc(db, "EmployeeList", id))
        console.log('deleted successfully');
    }


    useEffect(() => {
        const qr = query(collection(db, "EmployeeList"));
        const myfunc = onSnapshot(qr, (Qsnapshot) => {
            let myData = []
            Qsnapshot.forEach((i) => {
                myData.push({ ...i.data(), id: i.id });
            })
            setUserData(myData)
        })
        return () => myfunc()
    }, [])
    return (
        <div>
            <h3>CRUD Example</h3>
            <form action="#" method='post' onSubmit={saveData}>
                <label>List</label>
                <input type="text" name="List" value={data.List} onChange={handleChange} />
                <br /><br />

                <input type="submit" value="Save Data" />
            </form>
            <table border={2}>
                <tr>
                    <th>ID</th>
                    <th>List</th>
                    <th>Action</th>
                </tr>
                {
                    userdata.map((i, index) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.List}</td>
                                <td>
                                    <button onClick={() => editData(i.id)}>Edit</button>
                                    <button onClick={() => deleteData(i.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Userlist