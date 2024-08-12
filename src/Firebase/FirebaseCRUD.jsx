import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase'


const FirebaseCRUD = (e) => {
    const [data, setData] = useState({
        name: "",
        age: "",
        salary: "",
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
        await addDoc(collection(db, "UserMgtSystem"), data)
        console.log('inserted successfully');

        setData({
            name: "",
            age: "",
            salary: "",
            id: ""
        })
    }

    const deleteData = async (id) => {
        await deleteDoc(doc(db, "UserMgtSystem", id))
        console.log('deleted successfully');
    }


    useEffect(() => {
        const qr = query(collection(db, "UserMgtSystem"));
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
                <label>Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
                <br /><br />

                <label>Age</label>
                <input type="number" name="age" value={data.age} onChange={handleChange} />
                <br /><br />

                <label>Salary</label>
                <input type="number" name="salary" value={data.salary} onChange={handleChange} />
                <br /><br />

                <input type="submit" value="Save Data" />
            </form>
            <table border={2}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>salary</th>
                    <th>Action</th>
                </tr>
                {
                    userdata.map((i,index) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
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

export default FirebaseCRUD
