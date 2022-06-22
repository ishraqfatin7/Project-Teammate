import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
//import { generateFromEmail, generateUsername } from "unique-username-generator";
import Shell from "../Shell";
import axios from "axios";
export default function EditProfile() {
  const { user, updateUserProfile } = useAuth();
  const navs = [
    { item: `${user ? "Dashboard" : "Sign In"}` },
    { item: `${user ? "Profile" : "Sign Up"}` },
    { item: "Create a team" },
    { item: "About Us" },
    { item: `${user ? "Log out" : ""}` },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [response, setResponse] = useState({});
  const [updated, setUpdated] = useState(null);
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3553a276448dc98ad5f48955488e4ee7"); //auth key should be hashed in a separate file
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const username = generateUsername("", 2, 12);
  const onSubmit = (data) => {
    const userData = {
      firstName: data.FirstName,
      lastName: data.LastName,
      address: data.Address,
      email: user.email,
      Mobile: data.MobileNumber,
      image: imageUrl,
      profession: data.Profession,
      category: data.category,
      isProfileEdited: true,
    };
    console.log(userData);
    updateUserProfile(
      userData.firstName,
      userData.image,
      userData.email,
      () => setUpdated(true),
      () => setUpdated(false)
    );
    const url = `http://localhost:5000/addUser`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        setResponse(response);
        console.log("From Server: ", response);
      })
      .catch((error) => console.log(error));
  };
  //   console.log(errors);
  const updatedText = (
    <div className="alert alert-success shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Profile updated successfully</span>
      </div>
    </div>
  );
  const errorText = (
    <div className="alert alert-error shadow-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Profile update failed.</span>
      </div>
    </div>
  );
  return (
    <div className="hero-content flex-col ">
      <div className="text-center">
        {/* head title */}
        <h1 className="text-5xl font-bold text-orange-500">Edit Profile</h1>
        {updated ? updatedText : updated === false ? errorText : null}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* input Form card */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Picture</span>
              </label>
              <input
                type="file"
                name="Picture"
                {...register("Picture", {})}
                className="select select-bordered w-full max-w-xs"
                onChange={handleImageUpload}
                id=""
              />
            </div>
            {/* name input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                {...register("FirstName", {
                  required: true,
                  maxLength: 80,
                })}
                className="input input-bordered"
              />
              <div className="text-red-500">
                {errors.FirstName && "Enter First name required"}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last name"
                {...register("LastName", {
                  required: true,
                  maxLength: 100,
                })}
                className="input input-bordered"
              />
              <div className="text-red-500">
                {errors.LastName && "Enter Last name required"}
              </div>
            </div>

            {/* mail input
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="input input-bordered"
                />
                <div className="text-red-500">
                  {errors.Email && "Email is invalid"}
                </div>
              </div> */}

            {/* password input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Profession</span>
              </label>
              <select
                {...register("Profession")}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Student">Student</option>
                <option value="IT">IT</option>
                <option value="Teacher">Teacher</option>
                <option value="None">None</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Team Category</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Gaming">Gaming</option>
                <option value="Traveler">Traveler</option>
              </select>
            </div>

            {/* retype password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Region</span>
              </label>
              <select
                {...register("Region")}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="Global">Global</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("Address", { required: true })}
                className="input input-bordered"
              />
              <div className="text-red-500">
                {errors.Address && "Address is required"}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Mobile Number</span>
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("MobileNumber", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                className="input input-bordered"
              />
              <div className="text-red-500">
                {errors.MobileNumber && `Should be number less than 12 digits`}
              </div>
            </div>
            {/* Sign up submit button */}
            <div className="form-control mt-6">
              <input
                value="Save"
                type="submit"
                className="btn bg-orange-500 hover:btn-primary text-black"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
