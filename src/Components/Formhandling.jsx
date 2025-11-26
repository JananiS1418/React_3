import { useState } from "react";

const Formhandling = () => {
  
  const [data, setData] = useState({
    name: "",
    address: "",
    mobile: "",
    review: "",
    syllabus: "",
    technologies: "",
    pratical: "",
    infrastructure: "",
  });

  
  const [personal, setPersonal] = useState({
    pname: "",
    pemail: "",
    pmobile: "",
  });

  
  const changedata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const personalChanged = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  
  const dataclick = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(data);
    localStorage.setItem("usersdata", jsonData);

    alert("Institute Details Saved!");

    setData({
      name: "",
      address: "",
      mobile: "",
      review: "",
      syllabus: "",
      technologies: "",
      pratical: "",
      infrastructure: "",
    });
  };

  
  const personalClick = (e) => {
    e.preventDefault();

    const jsonPersonal = JSON.stringify(personal);
    localStorage.setItem("personaldata", jsonPersonal);

    alert("Personal Details Saved!");

    setPersonal({
      pname: "",
      pemail: "",
      pmobile: "",
    });
  };

  return (
    <>
     
      <div className="bg-fuchsia-200 p-10 flex justify-center items-center">
        <div className="bg-amber-100 w-[600px] p-6 rounded">
          <form className="grid grid-cols-2 items-center gap-5">

            <label>Enter the Institute Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter Capital Letter"
              className="bg-gray-800 text-white p-1 rounded w-full"
              onChange={changedata}
            />

            <label>Enter the Address:</label>
            <textarea
              name="address"
              value={data.address}
              className="bg-gray-800 text-white p-1 rounded w-full"
              onChange={changedata}
            ></textarea>

            <label>Enter Mobile no:</label>
            <input
              type="number"
              name="mobile"
              value={data.mobile}
              placeholder="Enter 10 digit"
              className="bg-gray-800 text-white p-1 rounded w-full"
              onChange={changedata}
            />

            <label>Enter the Review:</label>
            <textarea
              name="review"
              value={data.review}
              className="bg-gray-800 text-white p-1 rounded w-full"
              onChange={changedata}
            ></textarea>

            <label>Syllabus Upgraded:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="syllabus"
                  value="Yes"
                  checked={data.syllabus === "Yes"}
                  onChange={changedata}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="syllabus"
                  value="No"
                  checked={data.syllabus === "No"}
                  onChange={changedata}
                />
                No
              </label>
            </div>

            <label>Recent technologies:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="technologies"
                  value="Yes"
                  checked={data.technologies === "Yes"}
                  onChange={changedata}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="technologies"
                  value="No"
                  checked={data.technologies === "No"}
                  onChange={changedata}
                />
                No
              </label>
            </div>

            <label>Practical Process:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="pratical"
                  value="Yes"
                  checked={data.pratical === "Yes"}
                  onChange={changedata}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="pratical"
                  value="No"
                  checked={data.pratical === "No"}
                  onChange={changedata}
                />
                No
              </label>
            </div>

            <label>Class Infrastructure:</label>
            <textarea
              name="infrastructure"
              value={data.infrastructure}
              className="bg-gray-800 text-white p-1 rounded w-full"
              onChange={changedata}
            ></textarea>

            <div className="col-span-2 flex justify-center">
              <button
                className="bg-black text-white px-6 py-2 rounded"
                onClick={dataclick}
              >
                Save Institute
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div className="bg-pink-300 mt-3 p-10">
        <h1 className="text-center font-bold">Personal Details</h1>

        <div className="bg-gray-200 p-6 rounded w-[500px] mx-auto flex flex-col justify-center items-center gap-3">
          <form className="grid grid-cols-2 gap-4 items-center">

            <label>Your Name:</label>
            <input
              type="text"
              name="pname"
              value={personal.pname}
              placeholder="Enter Name"
              className="bg-white p-2 rounded border w-full"
              onChange={personalChanged}
            />

            <label>Email ID:</label>
            <input
              type="email"
              name="pemail"
              value={personal.pemail}
              placeholder="Enter Email"
              className="bg-white p-2 rounded border w-full"
              onChange={personalChanged}
            />

            <label>Mobile No:</label>
            <input
              type="number"
              name="pmobile"
              value={personal.pmobile}
              placeholder="Enter Mobile No"
              className="bg-white p-2 rounded border w-full"
              onChange={personalChanged}
            />

            <div className="col-span-2 flex justify-center">
              <button
                className="bg-black text-white px-6 py-2 rounded"
                onClick={personalClick}
              >
                Save Personal
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default Formhandling;
