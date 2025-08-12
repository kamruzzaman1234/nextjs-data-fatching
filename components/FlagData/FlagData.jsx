// "use client";  // এইটা অবশ্যই প্রথম লাইনে থাকবে

// import React, { useEffect, useState } from "react";
// import { ApiFetch } from "../ApiFetch/ApiFetch";

// const FlagData = () => {
//   const [getPhoto, setGetPhoto] = useState([]);  // state to store data
//   const [loading, setLoading] = useState(true);  // loading state

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const data = await ApiFetch();
//         setGetPhoto(data);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-full w-full">
//       <div className="grid grid-cols-2 gap-6">
//         {getPhoto.slice(1, 9).map(({ title, url, thumbnailUrl, id }) => (
//           <div
//             key={id}
//             className="border-2 flex flex-col gap-4 border-cyan-500 rounded-lg p-4"
//           >
//             <h3 className="font-semibold text-lg">{title}</h3>
//             <img src={url} alt={title} className="rounded-md" />
//             <div>
//               <img src={thumbnailUrl} alt={`${title} thumbnail`} className="rounded-md" />
//             </div>
//             <div>
//               <img src={url} alt={title} className="rounded-md" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlagData;
