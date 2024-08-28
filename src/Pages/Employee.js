
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './Employee.css'; // Assuming you have a CSS file for custom styles

// const Employee = () => {
//   const [componentData, setComponentData] = useState({
//     phoneNumber: "",
//     ssn: "",
//     personalEmail: "",
//     dob: "",
//     lastName: "",
//     firstName: "",
//     homeAddress: "",
//     maritalStatus: "",
//     kids: "",
//     drivingLicenseNumber: "",
//     drivingLicenseExpiryDate: "",
//     passportNumber: "",  
//     passportExpiryDate: "",
//     visaStatus: "",
//     visaExpiryDate: "",
//     spouseFirstName: "",
//     spouseLastName: "",
//     spouseDateOfBirth: "",
//     spouseSSN: "",
//     kidsDetails: [],
//     w4File: null,
//     i9File: null,
//     educationFile: null,
//     passportDocument: null,
//     visaDocument: null,
//     dlDocument: null
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));

//     // Reset spouse details if maritalStatus status changes to No
//     if (id === "maritalStatus" && value === "No") {
//       setComponentData((prevData) => ({
//         ...prevData,
//         spouseFirstName: "",
//         spouseLastName: "",
//         spouseDateOfBirth: "",
//         spouseSSN: ""
//       }));
//     }

//     // Initialize kids details array when kids is set to Yes
//     if (id === "kids" && value === "Yes") {
//       setComponentData((prevData) => ({
//         ...prevData,
//         kidsDetails: [
//           ...prevData.kidsDetails,
//           {
//             firstName: "",
//             lastName: "",
//             dateOfBirth: "",
//             ssn: ""
//           }
//         ]
//       }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const { id, files } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: files[0] // Store only the first selected file
//     }));
//   };

//   const handleKidsDetailChange = (index, e) => {
//     const { id, value } = e.target;
//     const updatedKidsDetails = [...componentData.kidsDetails];
//     updatedKidsDetails[index] = {
//       ...updatedKidsDetails[index],
//       [id]: value
//     };
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: updatedKidsDetails
//     }));
//   };

//   const addKidRow = () => {
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: [
//         ...prevData.kidsDetails,
//         {
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//           ssn: ""
//         }
//       ]
//     }));
//   };

//   const deleteKidRow = (index) => {
//     const updatedKidsDetails = componentData.kidsDetails.filter((_, i) => i !== index);
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: updatedKidsDetails
//     }));
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/employee/add', componentData);
//       console.log('Form submitted successfully:', response.data);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };


//   return (
//     <div className="container-page">
//       <h1 className="mb-4">Employee Information</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="section">
//           <h2>Basic Details</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name <span className="text-danger">*</span></label>
//             <div className="col-sm-4">
//               <input
//                 id="firstName"
//                 type="text"
//                 value={componentData.firstName}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
//             <div className="col-sm-4">
//               <input
//                 id="lastName"
//                 type="text"
//                 value={componentData.lastName}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="phoneNumber"
//                 type="text"
//                 value={componentData.phoneNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="ssn" className="col-sm-2 col-form-label">SSN</label>
//             <div className="col-sm-4">
//               <input
//                 id="ssn"
//                 type="text"
//                 value={componentData.ssn}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="personalEmail" className="col-sm-2 col-form-label">Personal Email</label>
//             <div className="col-sm-4">
//               <input
//                 id="personalEmail"
//                 type="email"
//                 value={componentData.personalEmail}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
//             <div className="col-sm-4">
//               <input
//                 id="dob"
//                 type="date"
//                 value={componentData.dob}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="homeAddress" className="col-sm-2 col-form-label">Home Address</label>
//             <div className="col-sm-4">
//               <input
//                 id="homeAddress"
//                 type="text"
//                 value={componentData.homeAddress}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Driving License</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="drivingLicenseNumber" className="col-sm-2 col-form-label">Driver's License Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="drivingLicenseNumber"
//                 type="text"
//                 value={componentData.drivingLicenseNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="drivingLicenseExpiryDate" className="col-sm-2 col-form-label">Driver's License Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="drivingLicenseExpiryDate"
//                 type="date"
//                 value={componentData.drivingLicenseExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="dlDocument" className="col-sm-2 col-form-label">Driver's License Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="dlDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Visa</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="visaStatus" className="col-sm-2 col-form-label">Visa Status</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaStatus"
//                 type="text"
//                 value={componentData.visaStatus}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="visaExpiryDate" className="col-sm-2 col-form-label">Visa Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaExpiryDate"
//                 type="date"
//                 value={componentData.visaExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="visaDocument" className="col-sm-2 col-form-label">Visa Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Personal Details</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="maritalStatus" className="col-sm-2 col-form-label">Married</label>
//             <div className="col-sm-4">
//               <select
//                 id="maritalStatus"
//                 value={componentData.maritalStatus}
//                 onChange={handleInputChange}
//                 className="form-select"
//               >
//                 <option value="">Select...</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>
//           </div>
//           {componentData.maritalStatus === "Yes" && (
//             <>
//               <div className="row mb-3">
//                 <label htmlFor="spouseFirstName" className="col-sm-2 col-form-label">Spouse First Name</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseFirstName"
//                     type="text"
//                     value={componentData.spouseFirstName}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseLastName" className="col-sm-2 col-form-label">Spouse Last Name</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseLastName"
//                     type="text"
//                     value={componentData.spouseLastName}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseDateOfBirth" className="col-sm-2 col-form-label">Spouse Date of Birth</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseDateOfBirth"
//                     type="date"
//                     value={componentData.spouseDateOfBirth}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseSSN" className="col-sm-2 col-form-label">Spouse SSN</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseSSN"
//                     type="text"
//                     value={componentData.spouseSSN}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//             </>
//           )}
//           <div className="row mb-3">
//             <label htmlFor="kids" className="col-sm-2 col-form-label">Kids</label>
//             <div className="col-sm-4">
//               <select
//                 id="kids"
//                 value={componentData.kids}
//                 onChange={handleInputChange}
//                 className="form-select"
//               >
//                 <option value="">Select...</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>
//           </div>
//           {componentData.kids === "Yes" && (
//             <>
//               <div className="row mb-3">
//                 <div className="col-sm-12">
//                   <button type="button" className="btn btn-primary" onClick={addKidRow}>Add Kid</button>
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-sm-12">
//                   <table className="table table-bordered">
//                     <thead>
//                       <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Date of Birth</th>
//                         <th>SSN</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {componentData.kidsDetails.map((kid, index) => (
//                         <tr key={index}>
//                           <td>
//                             <input
//                               id="firstName"
//                               type="text"
//                               placeholder="First Name"
//                               value={kid.firstName}
//                               onChange={(e) => handleKidsDetailChange(index, e)}
//                               className="form-control"
//                             />
//                           </td>
//                           <td>
//                             <input
//                               id="lastName"
//                               type="text"
//                               placeholder="Last Name"
//                               value={kid.lastName}
//                               onChange={(e) => handleKidsDetailChange(index, e)}
//                               className="form-control"
//                             />
//                           </td>
//                           <td>
//                             <input
//                               id="dateOfBirth"
//                               type="date"
//                               value={kid.dateOfBirth}
//                               onChange={(e) => handleKidsDetailChange(index, e)}
//                               className="form-control"
//                             />
//                           </td>
//                           <td>
//                             <input
//                               id="ssn"
//                               type="text"
//                               placeholder="SSN"
//                               value={kid.ssn}
//                               onChange={(e) => handleKidsDetailChange(index, e)}
//                               className="form-control"
//                             />
//                           </td>
//                           <td>
//                             <button type="button" className="btn btn-danger" onClick={() => deleteKidRow(index)}>Delete</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="section">
//           <h2>Passport</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="passportNumber" className="col-sm-2 col-form-label">Passport Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportNumber"
//                 type="text"
//                 value={componentData.passportNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="passportExpiryDate" className="col-sm-2 col-form-label">Passport Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportExpiryDate"
//                 type="date"
//                 value={componentData.passportExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="passportDocument" className="col-sm-2 col-form-label">Passport Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Other Details</h2>
//           <hr />
//           <div className="row mb-3">
//             <label htmlFor="educationFile" className="col-sm-2 col-form-label">Education File</label>
//             <div className="col-sm-4">
//               <input
//                 id="educationFile"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="i9File" className="col-sm-2 col-form-label">I9 File</label>
//             <div className="col-sm-4">
//               <input
//                 id="i9File"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="w4File" className="col-sm-2 col-form-label">W4 File</label>
//             <div className="col-sm-4">
//               <input
//                 id="w4File"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="row mb-3">
//           <div className="col-sm-12">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Employee;


//--------------------------------------------------------------------------
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './Employee.css'; // Assuming you have a CSS file for custom styles

// const Employee = () => {
//   const [componentData, setComponentData] = useState({
//    phoneNumber: "",
//    ssn: "",
//    personalEmail: "",
//    dob: "",
//    lastName: "",
//    firstName: "",
//     homeAddress: "",
//     maritalStatus: "",
//     kids: "",
//     drivingLicenseNumber: "",
//     drivingLicenseExpiryDate: "",
//     passportNumber: "",  
//     passportExpiryDate: "",
//     visaStatus: "",
//     visaExpiryDate: "",
//     spouseFirstName: "",
//     spouseLastName: "",
//     spouseDateOfBirth: "",
//     spouseSSN: "",
//     kidsDetails: [],
//     w4File: null,
//     i9File: null,
//     educationFile: null,
//     passportDocument: null,
//     visaDocument: null,
//     dlDocument: null
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));

//     // Reset spouse details if maritalStatus changes to No
//     if (id === "maritalStatus" && value === "No") {
//         setComponentData((prevData) => ({
//             ...prevData,
//             spouseFirstName: "",
//             spouseLastName: "",
//             spouseDateOfBirth: "",
//             spouseSSN: ""
//         }));
//     }

//     // Properly initialize or reset kidsDetails array
//     if (id === "kids") {
//         setComponentData((prevData) => ({
//             ...prevData,
//             kidsDetails: value === "Yes" ? (prevData.kidsDetails.length > 0 ? prevData.kidsDetails : [{ firstName: "", lastName: "", dateOfBirth: "", ssn: "" }]) : []
//         }));
//     }
// };
//   const handleFileChange = (e) => {
//     const { id, files } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: files[0] // Store only the first selected file
//     }));
//   };

//   const handleKidsDetailChange = (index, e) => {
//     const { id, value } = e.target;
//     const updatedKidsDetails = [...componentData.kidsDetails];
//     updatedKidsDetails[index] = {
//       ...updatedKidsDetails[index],
//       [id]: value
//     };
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: updatedKidsDetails
//     }));
//   };

//   const addKidRow = () => {
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: [
//         ...prevData.kidsDetails,
//         {
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//           ssn: ""
//         }
//       ]
//     }));
//   };

//   const deleteKidRow = (index) => {
//     const updatedKidsDetails = componentData.kidsDetails.filter((_, i) => i !== index);
//     setComponentData((prevData) => ({
//       ...prevData,
//       kidsDetails: updatedKidsDetails
//     }));
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Submitting Data:", componentData); // Check the data before submitting

// //     try {
// //         // Send multiple API requests in parallel
// //         const [response1, response2, response3] = await Promise.all([
// //             axios.post('http://localhost:8080/employee/add', componentData),
// //             axios.post('http://localhost:8080/kids/add', componentData),
// //             axios.post('http://localhost:8080/spouses/add', componentData),
// //         ]);

// //         console.log('Form submitted to first API successfully:', response1.data);
// //         console.log('Form submitted to second API successfully:', response2.data);
// //         console.log('Form submitted to third API successfully:', response3.data);

// //         // Add more requests as needed...
// //     } catch (error) {
// //         console.error('Error submitting form:', error);
// //     }
// // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting Data:", componentData); // Check the data before submitting
//     try {
//         const response = await axios.post('http://localhost:8080/employee/add', componentData);
//         console.log('Form submitted successfully:', response.data);
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// };

//   return (
//     <div className="container-page">
//       <h1 className="mb-4">Employee Information</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="section">
//           <h2>Basic Details</h2>
//           <hr />
//           {/* Basic Details */}
//           <div className="row mb-3">
//             <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name <span className="text-danger">*</span></label>
//             <div className="col-sm-4">
//               <input
//                 id="firstName"
//                 type="text"
//                 value={componentData.firstName}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
//             <div className="col-sm-4">
//               <input
//                 id="lastName"
//                 type="text"
//                 value={componentData.lastName}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="phoneNumber"
//                 type="text"
//                 value={componentData.phoneNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="ssn" className="col-sm-2 col-form-label">SSN</label>
//             <div className="col-sm-4">
//               <input
//                 id="ssn"
//                 type="text"
//                 value={componentData.ssn}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="personalEmail" className="col-sm-2 col-form-label">Personal Email</label>
//             <div className="col-sm-4">
//               <input
//                 id="personalEmail"
//                 type="email"
//                 value={componentData.personalEmail}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
//             <div className="col-sm-4">
//               <input
//                 id="dob"
//                 type="date"
//                 value={componentData.dob}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="homeAddress" className="col-sm-2 col-form-label">Home Address</label>
//             <div className="col-sm-4">
//               <input
//                 id="homeAddress"
//                 type="text"
//                 value={componentData.homeAddress}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Driving License</h2>
//           <hr />
//           {/* Driving License */}
//           <div className="row mb-3">
//             <label htmlFor="drivingLicenseNumber" className="col-sm-2 col-form-label">Driver's License Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="drivingLicenseNumber"
//                 type="text"
//                 value={componentData.drivingLicenseNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="drivingLicenseExpiryDate" className="col-sm-2 col-form-label">Driver's License Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="drivingLicenseExpiryDate"
//                 type="date"
//                 value={componentData.drivingLicenseExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="dlDocument" className="col-sm-2 col-form-label">Driver's License Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="dlDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Visa</h2>
//           <hr />
//           {/* Visa */}
//           <div className="row mb-3">
//             <label htmlFor="visaStatus" className="col-sm-2 col-form-label">Visa Status</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaStatus"
//                 type="text"
//                 value={componentData.visaStatus}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="visaExpiryDate" className="col-sm-2 col-form-label">Visa Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaExpiryDate"
//                 type="date"
//                 value={componentData.visaExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="visaDocument" className="col-sm-2 col-form-label">Visa Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="visaDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Passport</h2>
//           <hr />
//           {/* Passport */}
//           <div className="row mb-3">
//             <label htmlFor="passportNumber" className="col-sm-2 col-form-label">Passport Number</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportNumber"
//                 type="text"
//                 value={componentData.passportNumber}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="passportExpiryDate" className="col-sm-2 col-form-label">Passport Expiry</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportExpiryDate"
//                 type="date"
//                 value={componentData.passportExpiryDate}
//                 onChange={handleInputChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="passportDocument" className="col-sm-2 col-form-label">Passport Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="passportDocument"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Education</h2>
//           <hr />
//           {/* Education */}
//           <div className="row mb-3">
//             <label htmlFor="educationFile" className="col-sm-2 col-form-label">Education Document</label>
//             <div className="col-sm-4">
//               <input
//                 id="educationFile"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="section">
//           <h2>Marital Status & Kids</h2>
//           <hr />
//           {/* Marital Status */}
//           <div className="row mb-3">
//             <label htmlFor="maritalStatus" className="col-sm-2 col-form-label">Marital Status</label>
//             <div className="col-sm-4">
//               <select
//                 id="maritalStatus"
//                 value={componentData.maritalStatus}
//                 onChange={handleInputChange}
//                 className="form-select"
//               >
//                 <option value="">Select</option>
//                 <option value="Single">Single</option>
//                 <option value="Married">Married</option>
//                 <option value="Divorced">Divorced</option>
//               </select>
//             </div>
//           </div>

//           {/* Spouse Details */}
//           {componentData.maritalStatus === "Married" && (
//             <>
//               <div className="row mb-3">
//                 <label htmlFor="spouseFirstName" className="col-sm-2 col-form-label">Spouse First Name</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseFirstName"
//                     type="text"
//                     value={componentData.spouseFirstName}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseLastName" className="col-sm-2 col-form-label">Spouse Last Name</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseLastName"
//                     type="text"
//                     value={componentData.spouseLastName}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseDateOfBirth" className="col-sm-2 col-form-label">Spouse Date of Birth</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseDateOfBirth"
//                     type="date"
//                     value={componentData.spouseDateOfBirth}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <label htmlFor="spouseSSN" className="col-sm-2 col-form-label">Spouse SSN</label>
//                 <div className="col-sm-4">
//                   <input
//                     id="spouseSSN"
//                     type="text"
//                     value={componentData.spouseSSN}
//                     onChange={handleInputChange}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           {/* Kids Details */}
//           <div className="row mb-3">
//             <label htmlFor="kids" className="col-sm-2 col-form-label">Do you have kids?</label>
//             <div className="col-sm-4">
//               <select
//                 id="kids"
//                 value={componentData.kids}
//                 onChange={handleInputChange}
//                 className="form-select"
//               >
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>
//           </div>

//           {componentData.kids === "Yes" && (
//             <>
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Date of Birth</th>
//                     <th>SSN</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {componentData.kidsDetails.map((kid, index) => (
//                     <tr key={index}>
//                       <td>
//                         <input
//                           id="firstName"
//                           type="text"
//                           value={kid.firstName}
//                           onChange={(e) => handleKidsDetailChange(index, e)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <input
//                           id="lastName"
//                           type="text"
//                           value={kid.lastName}
//                           onChange={(e) => handleKidsDetailChange(index, e)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <input
//                           id="dateOfBirth"
//                           type="date"
//                           value={kid.dateOfBirth}
//                           onChange={(e) => handleKidsDetailChange(index, e)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <input
//                           id="ssn"
//                           type="text"
//                           value={kid.ssn}
//                           onChange={(e) => handleKidsDetailChange(index, e)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <button type="button" onClick={() => deleteKidRow(index)} className="btn btn-danger btn-sm">Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button type="button" onClick={addKidRow} className="btn btn-primary">Add Kid</button>
//             </>
//           )}
//         </div>

//         <div className="section">
//           <h2>Documents</h2>
//           <hr />
//           {/* Documents */}
//           <div className="row mb-3">
//             <label htmlFor="w4File" className="col-sm-2 col-form-label">W-4 Form</label>
//             <div className="col-sm-4">
//               <input
//                 id="w4File"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <label htmlFor="i9File" className="col-sm-2 col-form-label">I-9 Form</label>
//             <div className="col-sm-4">
//               <input
//                 id="i9File"
//                 type="file"
//                 onChange={handleFileChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-success">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Employee;



//---------------common array----------------------------

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Employee.css'; // Assuming you have a CSS file for custom styles

const Employee = () => {
  const [componentData, setComponentData] = useState({
    phoneNumber: "",
    ssn: "",
    personalEmail: "",
    dob: "",
    lastName: "",
    firstName: "",
    homeAddress: "",
    maritalStatus: "",
    kids: "",
    drivingLicenseNumber: "",
    drivingLicenseExpiryDate: "",
    passportNumber: "",
    passportExpiryDate: "",
    visaStatus: "",
    visaExpiryDate: "",
    spouseFirstName: "",
    spouseLastName: "",
    spouseDateOfBirth: "",
    spouseSSN: "",
    kidsDetails: [],
    w4File: null,
    i9File: null,
    educationFile: null,
    passportDocument: null,
    visaDocument: null,
    dlDocument: null
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Reset spouse details if maritalStatus changes to No
    if (id === "maritalStatus" && value !== "Married") {
        setComponentData((prevData) => ({
            ...prevData,
            spouseFirstName: "",
            spouseLastName: "",
            spouseDateOfBirth: "",
            spouseSSN: ""
        }));
    }

    // Properly initialize or reset kidsDetails array
    if (id === "kids") {
        setComponentData((prevData) => ({
            ...prevData,
            kidsDetails: value === "Yes" ? (prevData.kidsDetails.length > 0 ? prevData.kidsDetails : [{ firstName: "", lastName: "", dateOfBirth: "", ssn: "" }]) : []
        }));
    }
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: files[0] // Store only the first selected file
    }));
  };

  const handleKidsDetailChange = (index, e) => {
    const { id, value } = e.target;
    const updatedKidsDetails = [...componentData.kidsDetails];
    updatedKidsDetails[index] = {
      ...updatedKidsDetails[index],
      [id]: value
    };
    setComponentData((prevData) => ({
      ...prevData,
      kidsDetails: updatedKidsDetails
    }));
  };

  const addKidRow = () => {
    setComponentData((prevData) => ({
      ...prevData,
      kidsDetails: [
        ...prevData.kidsDetails,
        
        {
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          ssn: ""
        }
      
    ]
    }));
  };

  const deleteKidRow = (index) => {
    const updatedKidsDetails = componentData.kidsDetails.filter((_, i) => i !== index);
    setComponentData((prevData) => ({
      ...prevData,
      kidsDetails: updatedKidsDetails
    }));
  };




const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    console.log("Submitting Data:", componentData); // Log the component data for debugging

    // Create the data object that will be sent to the backend
    const dataToSend = {
        employee: {
            firstName: componentData.firstName,
            lastName: componentData.lastName,
            dob: componentData.dob,
            personalEmail: componentData.personalEmail,
            ssn: componentData.ssn,
            phoneNumber: componentData.phoneNumber,
            homeAddress: componentData.homeAddress,
            maritalStatus: componentData.maritalStatus,
            drivingLicenseNumber: componentData.drivingLicenseNumber,
            drivingLicenseExpiryDate: componentData.drivingLicenseExpiryDate,
            passportNumber: componentData.passportNumber,
            passportExpiryDate: componentData.passportExpiryDate,
            visaStatus: componentData.visaStatus,
            visaExpiryDate: componentData.visaExpiryDate,
            // Add any other fields from employee as necessary
        },
        kids: componentData.kidsDetails.map(kid => ({
            firstName: kid.firstName,
            lastName : kid.lastName,
            dateOfBirth: kid.dateOfBirth,
            ssn: kid.ssn,
            // Add any other fields specific to kids if necessary
        })),
        spouse: {
            spouseFirstName: componentData.spouseFirstName,
            spouseLastName:componentData.spouseLastName,
            spouseDateOfBirth: componentData.spouseDateOfBirth,
            spouseSSN: componentData.spouseSSN,
            // Add any other spouse-related fields if necessary
        },
    };

    console.log("Data to Send:", dataToSend); // Log the data to be sent for debugging

    try {
        const response = await axios.post('http://localhost:8080/api/common/add', dataToSend);
        console.log('Form submitted successfully:', response.data);
        // Optionally, you can clear the form or provide feedback to the user here
    } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally, handle the error, such as showing an error message to the user
    }
};


//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting Data:", componentData); // Check the data before submitting

//     try {
//         // Send multiple API requests in parallel
//         const [response1, response2, response3] = await Promise.all([
//             axios.post('http://localhost:8080/employee/add', componentData),
//             axios.post('http://localhost:8080/kids/add', componentData),
//             axios.post('http://localhost:8080/spouses/add', componentData),
//         ]);

//         console.log('Form submitted to first API successfully:', response1.data);
//         console.log('Form submitted to second API successfully:', response2.data);
//         console.log('Form submitted to third API successfully:', response3.data);

//         // Add more requests as needed...
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitting Data:", componentData); // Check the data before submitting
  //   try {
  //       const response = await axios.post('http://localhost:8080/api/common/add', componentData);
  //       console.log('Form submitted successfully:', response.data);
  //   } catch (error) {
  //       console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <div className="container-page">
      <h1 className="mb-4">Employee Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Basic Details</h2>
          <hr />
          {/* Basic Details */}
          <div className="row mb-3">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name <span className="text-danger">*</span></label>
            <div className="col-sm-4">
              <input
                id="firstName"
                type="text"
                value={componentData.firstName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-4">
              <input
                id="lastName"
                type="text"
                value={componentData.lastName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-4">
              <input
                id="phoneNumber"
                type="text"
                value={componentData.phoneNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="ssn" className="col-sm-2 col-form-label">SSN</label>
            <div className="col-sm-4">
              <input
                id="ssn"
                type="text"
                value={componentData.ssn}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="personalEmail" className="col-sm-2 col-form-label">Personal Email</label>
            <div className="col-sm-4">
              <input
                id="personalEmail"
                type="email"
                value={componentData.personalEmail}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-4">
              <input
                id="dob"
                type="date"
                value={componentData.dob}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="homeAddress" className="col-sm-2 col-form-label">Home Address</label>
            <div className="col-sm-4">
              <input
                id="homeAddress"
                type="text"
                value={componentData.homeAddress}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Driving License</h2>
          <hr />
          {/* Driving License */}
          <div className="row mb-3">
            <label htmlFor="drivingLicenseNumber" className="col-sm-2 col-form-label">Driver's License Number</label>
            <div className="col-sm-4">
              <input
                id="drivingLicenseNumber"
                type="text"
                value={componentData.drivingLicenseNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="drivingLicenseExpiryDate" className="col-sm-2 col-form-label">Driver's License Expiry</label>
            <div className="col-sm-4">
              <input
                id="drivingLicenseExpiryDate"
                type="date"
                value={componentData.drivingLicenseExpiryDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="dlDocument" className="col-sm-2 col-form-label">Driver's License Document</label>
            <div className="col-sm-4">
              <input
                id="dlDocument"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Visa</h2>
          <hr />
          {/* Visa */}
          <div className="row mb-3">
            <label htmlFor="visaStatus" className="col-sm-2 col-form-label">Visa Status</label>
            <div className="col-sm-4">
              <input
                id="visaStatus"
                type="text"
                value={componentData.visaStatus}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="visaExpiryDate" className="col-sm-2 col-form-label">Visa Expiry</label>
            <div className="col-sm-4">
              <input
                id="visaExpiryDate"
                type="date"
                value={componentData.visaExpiryDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="visaDocument" className="col-sm-2 col-form-label">Visa Document</label>
            <div className="col-sm-4">
              <input
                id="visaDocument"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Passport</h2>
          <hr />
          {/* Passport */}
          <div className="row mb-3">
            <label htmlFor="passportNumber" className="col-sm-2 col-form-label">Passport Number</label>
            <div className="col-sm-4">
              <input
                id="passportNumber"
                type="text"
                value={componentData.passportNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="passportExpiryDate" className="col-sm-2 col-form-label">Passport Expiry</label>
            <div className="col-sm-4">
              <input
                id="passportExpiryDate"
                type="date"
                value={componentData.passportExpiryDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="passportDocument" className="col-sm-2 col-form-label">Passport Document</label>
            <div className="col-sm-4">
              <input
                id="passportDocument"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Spouse Details</h2>
          <hr />
          {/* Spouse Details */}
          <div className="row mb-3">
            <label htmlFor="maritalStatus" className="col-sm-2 col-form-label">Marital Status</label>
            <div className="col-sm-4">
              <select
                id="maritalStatus"
                value={componentData.maritalStatus}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>

          {componentData.maritalStatus === "Married" && (
            <>
              <div className="row mb-3">
                <label htmlFor="spouseFirstName" className="col-sm-2 col-form-label">Spouse First Name</label>
                <div className="col-sm-4">
                  <input
                    id="spouseFirstName"
                    type="text"
                    value={componentData.spouseFirstName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="spouseLastName" className="col-sm-2 col-form-label">Spouse Last Name</label>
                <div className="col-sm-4">
                  <input
                    id="spouseLastName"
                    type="text"
                    value={componentData.spouseLastName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="spouseDateOfBirth" className="col-sm-2 col-form-label">Spouse Date of Birth</label>
                <div className="col-sm-4">
                  <input
                    id="spouseDateOfBirth"
                    type="date"
                    value={componentData.spouseDateOfBirth}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="spouseSSN" className="col-sm-2 col-form-label">Spouse SSN</label>
                <div className="col-sm-4">
                  <input
                    id="spouseSSN"
                    type="text"
                    value={componentData.spouseSSN}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="section">
          <h2>Kids Details</h2>
          <hr />
          {/* Kids */}
          <div className="row mb-3">
            <label htmlFor="kids" className="col-sm-2 col-form-label">Do you have kids?</label>
            <div className="col-sm-4">
              <select
                id="kids"
                value={componentData.kids}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          {componentData.kids === "Yes" &&
            componentData.kidsDetails.map((kid, index) => (
              <div key={index} className="kid-container">
                <h3>Kid {index + 1}</h3>
                <div className="row mb-3">
                  <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                  <div className="col-sm-4">
                    <input
                      id="firstName"
                      type="text"
                      value={kid.firstName}
                      onChange={(e) => handleKidsDetailChange(index, e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                  <div className="col-sm-4">
                    <input
                      id="lastName"
                      type="text"
                      value={kid.lastName}
                      onChange={(e) => handleKidsDetailChange(index, e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="dateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
                  <div className="col-sm-4">
                    <input
                      id="dateOfBirth"
                      type="date"
                      value={kid.dateOfBirth}
                      onChange={(e) => handleKidsDetailChange(index, e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="ssn" className="col-sm-2 col-form-label">SSN</label>
                  <div className="col-sm-4">
                    <input
                      id="ssn"
                      type="text"
                      value={kid.ssn}
                      onChange={(e) => handleKidsDetailChange(index, e)}
                      className="form-control"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteKidRow(index)}
                >
                  Delete Kid
                </button>
              </div>
            ))}

          {componentData.kids === "Yes" && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={addKidRow}
            >
              Add Another Kid
            </button>
          )}
        </div>

        <div className="section">
          <h2>Supporting Documents</h2>
          <hr />
          {/* Supporting Documents */}
          <div className="row mb-3">
            <label htmlFor="w4File" className="col-sm-2 col-form-label">W-4 Form</label>
            <div className="col-sm-4">
              <input
                id="w4File"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="i9File" className="col-sm-2 col-form-label">I-9 Form</label>
            <div className="col-sm-4">
              <input
                id="i9File"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="educationFile" className="col-sm-2 col-form-label">Education Certificate</label>
            <div className="col-sm-4">
              <input
                id="educationFile"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="previousEmploymentFile" className="col-sm-2 col-form-label">Previous Employment Document</label>
            <div className="col-sm-4">
              <input
                id="previousEmploymentFile"
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 offset-sm-2">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Employee;
