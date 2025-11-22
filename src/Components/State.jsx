import { useState } from "react";
import rose from '../assets/images/rose1.jpg'
import rose1 from '../assets/images/rose2.jpg'

const State = () => {
    const [image, setImage] = useState(true);

    const UpdateTheImage = () => {
        setImage(!image);
    };

    const [button, setButton] = useState(true)
    const ButtonUpdate = () => {
        setButton(!button)

    }
    const style = {

        backgroundColor: button ? "pink" : "black",
        color: button ? "black" : "white"

    }

    const [text, setText] = useState(true)

    const UpdateTheText = () => {
        setText(!text)
    }

    const [box, setBox] = useState(true)
    const ChangeShape = () => {
        setBox(!box)
    }

    const [fibonacci, setFibonacci] = useState()


    return (
        <>
            <div className=" bg-emerald-100 p-2 flex justify-center items-center flex-col gap-3 m-2 ">
                <h2>Image</h2>
                <div className="flex justify-center items-center ">
                    <img src={image ? rose : rose1} alt="" />
                </div>
                <button className="bg-black p-1 text-white p-1 w-50 " onClick={UpdateTheImage}>{image ? "Change Image" : "Image Changed"}</button>
            </div>


            <div className=" bg-amber-200 p-2 flex flex-col gap-2">
                <h2 className="flex justify-center items-center">Button</h2>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p>Click here</p>
                    <button className="w-45 p-1" style={style} onClick={ButtonUpdate}>{button ? "On" : "off"}</button>
                </div>
            </div>

            <div className="bg-fuchsia-200 m-2 p-2 flex flex-col justify-center items-center gap-3">
                <h2>Text</h2>
                {text ? <div>
                    <p>The name is Janani S</p>
                </div> : <div>
                    <p>The changed name is Janu S</p>
                </div>}
                <button className="bg-blue-950 p-1  text-white w-40" onClick={UpdateTheText}>Click </button>


            </div>

            <div>

                {box ? <div className="bg-gray-300 p-3 gap-3 flex flex-col justify-center items-center">
                    <h2>Box to Round</h2>
                    <div>
                        <p className="bg-black text-white w-45 h-30 flex justify-center items-center  ">box</p>
                    </div>
                    <button className="bg-cyan-700 p-1 text-white w-40" onClick={ChangeShape}>Change Shape</button>
                </div> : <div className="bg-black p-3 gap-3 flex flex-col justify-center items-center">
                    <h2 className="text-white">Round to Box</h2>
                    <div >
                        <p className="bg-white text-black w-50 h-50 flex justify-center items-center rounded-full  ">Round</p>
                    </div>
                    <button className="bg-blue-300 p-1 text-black w-40" onClick={ChangeShape}>Shape Changed</button>
                </div>}


            </div>
        </>
    );
};

export default State;
