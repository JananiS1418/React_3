import React, { useEffect, useState } from "react";

const Showdetails = () => {
  const [details, setDetails] = useState({});
  const [personal, setPersonal] = useState({});

  
  const showInstitute = () => {
    const data = localStorage.getItem("usersdata");
    const changedDatas = JSON.parse(data);
    setDetails(changedDatas);
  };

  
  const showPersonal = () => {
    const pdata = localStorage.getItem("personaldata");
    const changedPData = JSON.parse(pdata);
    setPersonal(changedPData);
  };

  useEffect(() => {
    (async () => {
      await showInstitute();
      await showPersonal();
    })();
  }, []);

  return (
    <>
     
      <div className="p-10 bg-green-200 flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-bold">Institute Details</h1>

        <p>Institute Name: {details.name}</p>
        <p>Institute Address: {details.address}</p>
        <p>Institute Mobile No: {details.mobile}</p>
        <p>Review: {details.review}</p>
        <p>Syllabus: {details.syllabus}</p>
        <p>Technologies: {details.technologies}</p>
        <p>Practical: {details.pratical}</p>
        <p>Infrastructure: {details.infrastructure}</p>
      </div>

      
      <div className="p-10 bg-blue-200 flex flex-col justify-center items-center gap-2 mt-5">
        <h1 className="text-xl font-bold">Personal Details</h1>

        <p>Name: {personal.pname}</p>
        <p>Email: {personal.pemail}</p>
        <p>Mobile: {personal.pmobile}</p>
      </div>
    </>
  );
};

export default Showdetails;
