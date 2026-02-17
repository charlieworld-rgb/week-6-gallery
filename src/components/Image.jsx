import { useEffect, useState } from "react";


export default function ImageApi(){
    const [images, setImages] = useState([]);
    const[currentIndex, setCurrentIndex]= useState(0)

    function handleThumbnailClick(index){
    console.log(index)
    setCurrentIndex(index);
}
    // needs to be with other useState so i know whats it for
console.log(images)
// have all my fetch  /useEffect code alltogether 
useEffect(() => {
    async function fetchData() {
        const response = await fetch(
           "https://week-6-api.vercel.app/api/images"
        );
        const data = await response.json();
       setImages(data);
    }
  fetchData();
},[]);
// fetching and only rendering once 
// both useStates need to be togther 
// const[currentIndex, setCurrentIndex]= useState(0)
// // move to top for better reading 
// function handleThumbnailClick(index){
//     console.log(index)
//     setCurrentIndex(index);
// }

//  <div className="thumbnail"></div>
// all thumbnail togehter 
return(

    // maybr have click and biggo boi together in a div?
    <div >
        <h1>images</h1>
         <div className="thumbnail"></div>
        {/* this needs to be with other thumbnail */}
           {images.map((image,index) => (
        //    my index here isnt happy why?
           <li  onClick={() => handleThumbnailClick(index)}
            key={image.id}>{image.title}
            <img src={image.url}/>
             
            </li>
           ))}
         
         <h2>biggo boi</h2>
         {images.length > 0 ? <img src={images[currentIndex].url} alt="dave"/> : ''}
{/* create a seprate div for the biggo boi image */}
   </div>
   
);

}
