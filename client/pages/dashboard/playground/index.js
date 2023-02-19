import React, { useState } from "react";
import Layout from "@/layouts/Main";
import axios from "axios";
import DashboardNav from "@/components/DashboardNav";
const index = () => {
  const [file, setFile] = useState("");
  const [filename,setFileName] = useState("");
  const [data,setData] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name)
  };
  const uploadFile = async ()=>{
    const formData = new FormData();
    formData.append("file", file);
    // formData.append("fileName", filename);
    try {
      const res = await axios.post(
        "http://localhost:8888/predict",formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <Layout title="Playground">
      <DashboardNav hero="Playground"/>
    <div>
        <h1> Choose File</h1>
       
      <input
        type="file"
        onChange={handleFile}
        // className="opacity-0"
        name="file"
      />
      
    </div>

    {
     file &&   <>
                                        <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                     </>
    }
    <button onClick={uploadFile}>Predict</button>
    
    </Layout>
  );
};

export default index;
