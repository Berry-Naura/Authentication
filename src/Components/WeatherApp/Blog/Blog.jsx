import {useState, useEffect} from "react";
import {db} from '../../../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc,  doc, } from "firebase/firestore";
import '../auth/loginsignup.css'

function Blog() {
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "User");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
    }

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "User", id);
        const newFields = {age: age + 1};
        await updateDoc(userDoc, newFields);

    };

    const deleteUser = async(id) => {
        const userDoc = doc(db, "User", id);
        await deleteDoc(userDoc)
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }

        getUsers()
    }, [])
    return ( 
    <div  id= "blog" className="container2">
        <div class="heading">Record Your Visit to App</div>
        <div class="input">
        <input 
            placeholder="Name..." 
            onChange={(event) => {setNewName(event.target.value)

            }}
        />
        <input type="number" 
            placeholder="Age..."
            onChange={(event) => {setNewAge(event.target.value)}}
        />

        <button onClick={createUser}>Create User</button></div>
        {users.map((user) => {
        return (
        <div class="display">
            {" "}
            <h1> Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={ () => {updateUser(user.id, user.age)}}>
                Increase Age
            </button>
            <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
        </div>
        );
    })}
    </div>
    );
}

export default Blog;