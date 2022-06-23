 const getUser = async(email, setUserData)=> {
  const userUrl = `http://localhost:5000/users/user/${email}`;
  fetch(userUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log("From Server: ", result);
      setUserData(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default getUser;