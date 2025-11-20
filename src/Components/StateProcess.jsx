import { useState } from "react"
import rose from '../assets/images/rose1.jpg'
import rose1 from '../assets/images/rose2.jpg'
import lotus from '../assets/images/lotus1.jpg'
import lotus1 from '../assets/images/lotus2.jpg'
import jasmine from '../assets/images/jasmine.jpg'
import jasmine1 from '../assets/images/jasmine2.jpg'

const StateProcess = () => {

    const [firstName, setFirstName] = useState("Janani");
    const [lastName, setLastName] = useState("S");
    const [city, setCity] = useState("Chennai");
    const [course, setCourse] = useState("B.tech-IT");
    const [college, setCollege] = useState("Paavai");
    const [nagar, setNagar] = useState("K.K.Nagar");

    const [age, setAge] = useState(22)
    const [mark1, setMark1] = useState(90)
    const [mark2, setMark2] = useState(95)
    const [mark3, setMark3] = useState(97)

    const [value, setValue] = useState(null);

    const [isActive, setIsActive] = useState(true);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const [fruits, setFruits] = useState(["Apple", "Banana"]);

    const addFruit = () => {
        setFruits([...fruits, "Mango"]);
    }

    const [student, setStudent] = useState({
        name: "Janu",
        age: 22,
        dept: "IT",
    });

    const [course1, setCourse1] = useState({
        courseName: "React JS",
        duration: "3 months",
        fees: 15000,
    });

    const [profile, setProfile] = useState({
        username: "janani123",
        email: "janani@example.com",
        verified: "true",
    });


    const UpdatetheObject = () => {
        setStudent({ name: "Janani" });
        setCourse1({ fees: 20000 });
        setProfile({ verified: "false" });
    };
    const [users, setUsers] = useState([
        { name: "Rose", img: rose },
        { name: "Lotus", img: lotus },
        { name: "Jasmine", img: jasmine }


    ]);

    const UpdateArrayofObject = () => {
        setUsers([{ name: "Rose1", img: rose1 },
        { name: "Lotus1", img: lotus1 },
        { name: "Jasmine1", img: jasmine1 }])
    }




    const UpdatetheString = () => {

        setFirstName("Saritha")
        setLastName("N")
        setCity("Dharmapuri")
        setCourse("IT")
        setCollege("SRM")
        setNagar("Jafarkhanpet")



    }

    const UpdatetheNumbers = () => {
        setAge(20)
        setMark1(98)
        setMark2(96)
        setMark3(94)

    }

    const defaultValue = value ?? "No value present ";

    const updateValue = () => {
        setValue("Now value is updated!");
    };




    return (
        <>
            <div>
                <h1 className="flex justify-center items-center m-2">State Management</h1>

                <div className="bg-pink-400 flex justify-center items-center gap-2 flex-col p-7 ">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  ">
                        <h2 > Strings</h2>
                        <p> String 1 - {firstName}</p>
                        <p> String 2 - {lastName}</p>
                        <p> String 3 - {city}</p>
                        <p> String 4 - {course}</p>
                        <p> String 5 - {college}</p>
                        <p> String 6 - {nagar}</p>
                        <button className="bg-black text-white p-1 rounded w-50" onClick={UpdatetheString}>Click

                        </button>

                    </div>
                </div>

                <div className="bg-purple-300 flex justify-center items-center gap-2 flex-col p-5">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  " >


                        <h2>Numbers</h2>
                        <p>Numbers 1 - {age}</p>
                        <p>Numbers 2 - {mark1}</p>
                        <p>Numbers 3 - {mark2}</p>
                        <p>Numbers 4 - {mark3}</p>
                        <button className="bg-black text-white p-1 rounded w-50" onClick={UpdatetheNumbers}>Click</button>
                    </div>
                </div>

                <div className="bg-amber-200 flex justify-center items-center gap-2 flex-col p-5">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  ">

                        <h2>Null</h2>

                        <h2>{defaultValue}</h2>

                        <button className="bg-black text-white p-1 rounded w-50"
                            onClick={updateValue}

                        >
                            click
                        </button>
                    </div>
                </div>
                <div className="bg-lime-300 flex justify-center items-center gap-2 flex-col p-5">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  ">
                        <h2>Boolean</h2>

                        {show && (
                            <h2>{isActive ? "The Value is TRUE " : "The Value is FALSE "}</h2>
                        )}
                        <button className="bg-black text-white p-1 rounded w-50"
                            onClick={handleShow}>Show Boolean Value</button>

                    </div>
                </div>

                <div className="bg-blue-400 flex justify-center items-center gap-2 flex-col p-7 ">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  ">
                        <h1>Array </h1>

                        {fruits.map((f, i) => (
                            <h3 key={i}>{f}</h3>
                        ))}

                        <button className="bg-black text-white p-1 rounded w-50" onClick={addFruit}>Click

                        </button>

                    </div>
                </div>
                <div className="bg-emerald-300 flex justify-center items-center gap-2 flex-col p-7 ">
                    <div className="bg-gray-200 w-75 h-70 flex justify-center items-center flex-col p-2 gap-2 rounded  ">
                        <h2 > Object</h2>
                        <p> {student.name}</p>
                        <p> {course1.fees}</p>
                        <p> {profile.verified}</p>

                        <button className="bg-black text-white p-1 rounded w-50" onClick={UpdatetheObject}>Click

                        </button>

                    </div>
                </div>

                <div className="bg-violet-400 flex justify-center items-center gap-2 flex-col p-10 ">
                    <div className="bg-gray-200 w-75 h-120 flex justify-center items-center flex-col p-2 gap-2 rounded">

                        <h2>Array of Object</h2>

                        {users.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={item.img} width="120" className="rounded mb-2" />
                                <h3>{item.name}</h3>
                            </div>
                        ))}

                        <button className="bg-black text-white p-1 rounded w-50"
                            onClick={UpdateArrayofObject}>
                            Click
                        </button>

                    </div>
                </div>




            </div >

        </>
    )

}
export default StateProcess