import React, { useEffect, useState,useContext } from "react";
import { AuthContext } from "@/store/auth";
import ImageCard from "@/components/ImageCard";
import { publicFetch } from "@/utils/fetcher";
import { FetchContext } from "@/store/fetch";

const index = () => {
  const [images, setImages] = useState();
  const { isAuthenticated,authState } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext)

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await publicFetch.get("/listimages",{
        headers:{
          Authorization: authState.token,
        }
      });
      setImages(data);
    };
    fetchImages();
  },[]);
  console.log(images)
  return (

    <div className="container mx-auto">
      {isAuthenticated() && (
        images && (images.map((image)=>{
          <ImageCard imageSrc={image.imageUrl} />
        }))
      )}
    </div>
  );
};

export default index;
