"use client"
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
const CustomerForm = () => {
  const [formData, setFormData] = useState({
    user_id: 8,
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[0-9]{7,20}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    console.log(formData);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/addClient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      alert('Form submitted successfully!');
      setFormData({ user_id,name: '', email: '', company: '', phone: '' });
    } catch (error) {
      alert('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <><NavBar /><SideBar /><div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg ">
          <h2 className="text-2xl font-semibold mb-4">Fill Client Details</h2>
          <form onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block font-semibold mb-1">Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full p-2 border rounded-xl" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                  <label className="block font-semibold mb-1">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full p-2 border rounded-xl" />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-4">
                  <label className="block font-semibold mb-1">Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" className="w-full p-2 border rounded-xl" />
                  {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
              </div>
              <div className="mb-4">
                  <label className="block font-semibold mb-1">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full p-2 border rounded-xl" />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
          </form>
      </div></>
  );
};

export default CustomerForm;
