// // import { useState, useRef } from 'react';
// // import Webcam from 'react-webcam';

// // const CameraCapture = () => {
// //   const webcamRef = useRef(null);
// //   const [capturedImage, setCapturedImage] = useState(null);

// //   const capture = () => {
// //     const imageSrc = webcamRef.current.getScreenshot();
// //     setCapturedImage(imageSrc);
// //   };

// //   return (
// //     <div className="">
// //       {/* Left Side - Camera Screen */}
// //       <div className="flex flex-row">
// //         <Webcam
// //           audio={false}
// //           ref={webcamRef}
// //           screenshotFormat="image/jpeg"
// //         />
// //         <div className="">
// //         {capturedImage && (
// //           <img
// //             src={capturedImage}
// //             alt="Captured"
// //             className=""
// //           />
// //         )}
// //       </div>
       
        
// //       </div>
// //       <button
// //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
// //           onClick={capture}
// //         >
// //           Capture
// //         </button>

// //       {/* Right Side - Display Captured Image */} 
      
// //     </div>
// //   );
// // };

// // export default CameraCapture;


// import { useState, useRef } from 'react';
// import Webcam from 'react-webcam';


// const CameraCapture = () => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [storeArray, setStoreArray] = useState([]);
//   const [store2Array, setStore2Array] = useState([]);
//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setStoreArray([...storeArray, imageSrc]);
//     setStore2Array([...store2Array, storeArray])
//   };
// //   console.log(storeArray,typeof (capturedImage))};
//   return (
//     <div className="flex flex-row">
//       {/* Left Side - Camera Screen */}
//       <div className="w-1/3 p-4">
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//         />
//         <button 
//           className="ml-48 mt-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
//           onClick={capture}
//         >
//           Capture
//         </button>
//       </div>

//       {/* Right Side - Display Captured Image */}
//       <div className="flex flex-row flex-wrap max-w-5xl mt-8 bg-red-800">
//         {capturedImage && storeArray && store2Array.map((img,index)=>{
//            console.log(img,index) 
//             return (<img 
//                 key = {index}
//             src={storeArray[index]}
//             alt="Captured"
//             className="max-w-xs max-h-80 min-h-80  p-2"
//           />) ;
//         })
          
//         }
//       </div>
//     </div>
//   );
// };

// export default CameraCapture;








// // eslint-disable-next-line no-unused-vars
// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';

// const CameraCapture = () => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [storeArray, setStoreArray] = useState([]);
//   const [store2Array, setStore2Array] = useState([]);

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setStoreArray([...storeArray, imageSrc]);
//     setStore2Array([...store2Array, storeArray]);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Camera Screen */}
//       <div className="w-1/2 sm:w-1/3 p-4">
//         <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//       </div>

//       {/* Capture Button */}
//       <button
//         className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4"
//         onClick={capture}
//       >
//         Capture
//       </button>

//       {/* Display Captured Images */}
//       <div className="flex flex-row flex-wrap max-w-5xl mt-4">
//         {capturedImage &&
//           storeArray.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="Captured"
//               className="max-w-xs max-h-80 min-h-80 p-2"
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CameraCapture;








// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const CameraCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [storeArray, setStoreArray] = useState([]);
  const [store2Array, setStore2Array] = useState([]);
  const [cameraFacingMode, setCameraFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setStoreArray([...storeArray, imageSrc]);
    setStore2Array([...store2Array, storeArray]);
  };

  const switchCamera = () => {
    // Toggle between 'user' (front camera) and 'environment' (back camera)
    setCameraFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Camera Screen */}
      <div className="w-1/2 sm:w-1/3 p-4">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: cameraFacingMode,
            mirrored: false, }} // Add this line to prevent mirroring
        />
      </div>

      {/* Capture Button */}
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4"
        onClick={capture}
      >
        Capture
      </button>

      {/* Switch Camera Button */}
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mt-4"
        onClick={switchCamera}
      >
        Switch Camera
      </button>

      {/* Display Captured Images */}
      <div className="flex flex-row flex-wrap max-w-5xl mt-4">
        {capturedImage &&
          storeArray.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Captured"
              className="max-w-xs max-h-80 min-h-80 p-2"
            />
          ))}
      </div>
    </div>
  );
};

export default CameraCapture;
