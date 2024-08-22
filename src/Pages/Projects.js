

// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './Employee.css'; // Assuming you have a CSS file for custom styles

// const Projects = () => {
//   const [formData, setFormData] = useState({
//     presentVendor: '',
//     presentClient: '',
//     primeVendor: '',
//     startDate: '',
//     endDate: '',
//     clientEmailAddress: '',
//     clientAddress: '',
//     clientPhoneNumber: ''
//   });

//   const [clients, setClients] = useState([
//     // Example initial state
//     { clientName: '', vendorName: '', startDate: '', endDate: '' }
//   ]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('YOUR_BACKEND_URL', formData);
//       console.log('Form submitted successfully:', response.data);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const addClientRow = () => {
//     setClients([...clients, { clientName: '', vendorName: '', startDate: '', endDate: '' }]);
//   };

//   const deleteClientRow = (index) => {
//     const newClients = clients.filter((_, i) => i !== index);
//     setClients(newClients);
//   };

//   const handleClientChange = (index, e) => {
//     const { id, value } = e.target;
//     const newClients = clients.map((client, i) =>
//       i === index ? { ...client, [id]: value } : client
//     );
//     setClients(newClients);
//   };

//   return (
//     <div className="container-page">
//       <h1 className="card-title">Project Information</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <div className="form-group row mb-3">
//           <label htmlFor="presentVendor" className="col-sm-2 col-form-label">Present Vendor Name</label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control"
//               id="presentVendor"
//               value={formData.presentVendor}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="presentClient" className="col-sm-2 col-form-label">Present Client</label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control"
//               id="presentClient"
//               value={formData.presentClient}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="primeVendor" className="col-sm-2 col-form-label">Prime Vendor if Any</label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control"
//               id="primeVendor"
//               value={formData.primeVendor}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
//           <div className="col-sm-4">
//             <input
//               type="date"
//               className="form-control"
//               id="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
//           <div className="col-sm-4">
//             <input
//               type="date"
//               className="form-control"
//               id="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="clientEmailAddress" className="col-sm-2 col-form-label">Client E-mail Address</label>
//           <div className="col-sm-4">
//             <input
//               type="email"
//               className="form-control"
//               id="clientEmailAddress"
//               value={formData.clientEmailAddress}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="clientAddress" className="col-sm-2 col-form-label">Client Address</label>
//           <div className="col-sm-4">
//             <input
//               type="text"
//               className="form-control"
//               id="clientAddress"
//               value={formData.clientAddress}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group row mb-3">
//           <label htmlFor="clientPhoneNumber" className="col-sm-2 col-form-label">Client Phone Number</label>
//           <div className="col-sm-4">
//             <input
//               type="tel"
//               className="form-control"
//               id="clientPhoneNumber"
//               value={formData.clientPhoneNumber}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Table for Previous Clients */}
//         <div className="form-group row mt-5">
//           <div className="col-sm-12">
//             <h2>Previous Clients</h2>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Client Name</th>
//                   <th>Vendor Name</th>
//                   <th>Start Date</th>
//                   <th>End Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {clients.map((client, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="clientName"
//                         value={client.clientName}
//                         onChange={(e) => handleClientChange(index, e)}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="vendorName"
//                         value={client.vendorName}
//                         onChange={(e) => handleClientChange(index, e)}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="startDate"
//                         value={client.startDate}
//                         onChange={(e) => handleClientChange(index, e)}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="endDate"
//                         value={client.endDate}
//                         onChange={(e) => handleClientChange(index, e)}
//                       />
//                     </td>
//                     <td>
//                       <button
//                         type="button"
//                         className="btn btn-danger"
//                         onClick={() => deleteClientRow(index)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={addClientRow}
//             >
//               Add Row
//             </button>
//           </div>
//         </div>

//         <div className="form-group row mt-5">
//           <div className="col-sm-12">
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Employee.css'; // Assuming you have a CSS file for custom styles

const Projects = () => {
  const [formData, setFormData] = useState({
    presentVendor: '',
    presentClient: '',
    primeVendor: '',
    startDate: '',
    endDate: '',
    clientEmailAddress: '',
    clientAddress: '',
    clientPhoneNumber: ''
  });

  const [clients, setClients] = useState([
    // Example initial state
    { clientName: '', vendorName: '', startDate: '', endDate: '' }
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleClientChange = (index, e) => {
    const { id, value } = e.target;
    const newClients = clients.map((client, i) =>
      i === index ? { ...client, [id]: value } : client
    );
    setClients(newClients);
  };

  const addClientRow = () => {
    setClients([...clients, { clientName: '', vendorName: '', startDate: '', endDate: '' }]);
  };

  const deleteClientRow = (index) => {
    const newClients = clients.filter((_, i) => i !== index);
    setClients(newClients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit present client data
      const presentClientResponse = await axios.post('http://localhost:8080/presentClients/add', formData);
      console.log('Present Client data submitted successfully:', presentClientResponse.data);

      // Submit previous clients data
      const previousClientsResponse = await axios.post('http://localhost:8080/previousClients/add', { clients });
      console.log('Previous Clients data submitted successfully:', previousClientsResponse.data);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container-page">
      <h1 className="card-title">Project Information</h1>
      <hr />

      {/* Form starts */}
      <form onSubmit={handleSubmit}>
        {/* Present Client Form Fields */}
        <div className="form-group row mb-3">
          <label htmlFor="presentVendor" className="col-sm-2 col-form-label">Present Vendor Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="presentVendor"
              value={formData.presentVendor}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="presentClient" className="col-sm-2 col-form-label">Present Client</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="presentClient"
              value={formData.presentClient}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="primeVendor" className="col-sm-2 col-form-label">Prime Vendor if Any</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="primeVendor"
              value={formData.primeVendor}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="clientEmailAddress" className="col-sm-2 col-form-label">Client E-mail Address</label>
          <div className="col-sm-4">
            <input
              type="email"
              className="form-control"
              id="clientEmailAddress"
              value={formData.clientEmailAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="clientAddress" className="col-sm-2 col-form-label">Client Address</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              id="clientAddress"
              value={formData.clientAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="clientPhoneNumber" className="col-sm-2 col-form-label">Client Phone Number</label>
          <div className="col-sm-4">
            <input
              type="tel"
              className="form-control"
              id="clientPhoneNumber"
              value={formData.clientPhoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Previous Clients Table */}
        <div className="form-group row mt-5">
          <div className="col-sm-12">
            <h2>Previous Clients</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Vendor Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="clientName"
                        value={client.clientName}
                        onChange={(e) => handleClientChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        id="vendorName"
                        value={client.vendorName}
                        onChange={(e) => handleClientChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={client.startDate}
                        onChange={(e) => handleClientChange(index, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        value={client.endDate}
                        onChange={(e) => handleClientChange(index, e)}
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteClientRow(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-success"
              onClick={addClientRow}
            >
              Add Row
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group row mt-5">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Projects;
