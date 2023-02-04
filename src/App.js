import "./App.css";
import React, { useState, useEffect } from "react";
import { db } from "./firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
function App() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const usersRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(usersRef, {
      name: name,
      age: age,
    });
  };
  const updateUser = async (id, age) => {
    await updateDoc(doc(db, "users", id), {
      age: age + 1,
    });
  };
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };
  useEffect(() => {
    const usersRef = collection(db, "users");
    const getusers = async () => {
      const usersSnap = await getDocs(usersRef);
      //console.log(usersSnap.docs);
      const users = usersSnap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setusers(users);
      //console.log(users);
    };
    getusers();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(event) => {
          setage(event.target.value);
        }}
      />
      <button onClick={createUser}>create user</button>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button
            onClick={() => {
              updateUser(user.id, user.age);
            }}
          >
            increase age
          </button>
          <button
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            delete user
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
