

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './Employee.css'; // Assuming you have a CSS file for custom styles

const Payment = () => {
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [paySlipData, setPaySlipData] = useState('');
  const [w2Data, setW2Data] = useState('');

  const handleSearchPaySlips = async () => {
    if (month) {
      try {
        const response = await axios.get('YOUR_BACKEND_URL/payslips', { params: { month } });
        setPaySlipData(response.data.documentUrl || 'Document.pdf');
        console.log('Pay-slips search successful:', response.data);
      } catch (error) {
        console.error('Error searching pay-slips:', error);
      }
    } else {
      alert('Please select a month.');
    }
  };

  const handleSearchW2 = async () => {
    if (year) {
      try {
        const response = await axios.get('YOUR_BACKEND_URL/w2', { params: { year } });
        setW2Data(response.data.documentUrl || 'Document.pdf');
        console.log('W-2 search successful:', response.data);
      } catch (error) {
        console.error('Error searching W-2:', error);
      }
    } else {
      alert('Please select a year.');
    }
  };

  return (
    <div className="container-page">
      <h1 className="card-title">Payments Information</h1>
      <hr />

      <form>
        <div className="form-group row mb-3">
          <label htmlFor="searchByMonth" className="col-sm-2 col-form-label">Payslips</label>
          <div className="col-sm-2">
            <DatePicker
              selected={month}
              onChange={(date) => setMonth(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              className="form-control"
              placeholderText="Select Month"
            />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-primary w-100" onClick={handleSearchPaySlips}>
              Search
            </button>
          </div>
        </div>

      


        <div className="form-group row mb-4">
          <label htmlFor="searchByYear" className="col-sm-2 col-form-label">W-2</label>
          <div className="col-sm-2">
            <DatePicker
              selected={year}
              onChange={(date) => setYear(date)}
              dateFormat="yyyy"
              showYearPicker
              className="form-control"
              placeholderText="Select Year"
            />
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-primary w-100" onClick={handleSearchW2}>
              Search
            </button>
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default Payment;

