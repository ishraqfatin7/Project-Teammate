import React from "react";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import Shell from "../Shell";

export default function EditProfile() {
  const { user } = useAuth();
  const navs = [
    { item: `${user ? "Home" : "Sign In"}` },
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
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);
  return (
    <Shell navs={navs}>
      <div className="hero min-h-screen ">
        {/* input card container for flex*/}

        <div className="hero-content flex-col ">
          <div className="text-center ">
            {/* head title */}
            <h1 className="text-5xl font-bold text-orange-500">Edit Profile</h1>
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

                {/* mail input */}
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
                </div>

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
                    <option value=" IT"> IT</option>
                    <option value=" Teacher"> Teacher</option>
                    <option value=" Player"> Player</option>
                    <option value=" Musician"> Musician</option>
                    <option value=" None"> None</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Team Category</span>
                  </label>
                  <select
                    {...register("categiry")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="Gamer">Gamer</option>
                    <option value="Traveler">Traveler</option>
                  </select>
                </div>

                {/* retype password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Country</span>
                  </label>
                  <select
                    {...register("Country")}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value=" Canada"> Canada</option>
                    <option value=" Japan"> Japan</option>
                    <option value=" Spain"> Spain</option>
                    <option value=" Turkey"> Turkey</option>
                    <option value=" Russia"> Russia</option>
                    <option value=" USA"> USA</option>
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
                    {errors.MobileNumber &&
                      "Should be number and more than 6, less than 12 digits"}
                  </div>
                </div>
                {/* Sign up submit button */}
                <div className="form-control mt-6">
                  <input
                    value="Save"
                    type="submit"
                    className="btn bg-orange-500 text-black"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Shell>
  );
}
