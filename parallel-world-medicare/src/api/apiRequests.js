import axios from "axios";

const baseUrl = `https://parallel-world-medicare.onrender.com`;


export const addUser = (user) => {
    axios({
        url: `${baseUrl}/users`,
        method: "post",
        data: user
    }).then(() => { console.log("user added successfully") }).catch((err) => { console.log("error while adding a user in axios post request: ", err) });
}

export const deleteUser = (id) => {
    axios({
        url: `${baseUrl}/${id}`,
        method: "delete"
    }).then(() => { console.log("User deleted successfully") }).catch((err) => { console.log("error while deleting a user in axios delete request: ", err) });
}

export const getUsers = () => {
    return axios({
        url: `${baseUrl}/users`,
        method: "get"
    }).then((res) => { return res.data });
}

export const getHospitals = () => {
    return axios({
        method: "get",
        url: `${baseUrl}/hospitals`
    });
}