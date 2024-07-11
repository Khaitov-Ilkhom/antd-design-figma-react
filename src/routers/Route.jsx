import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home.jsx';
import CreateBooking from '../components/createBooking/CreateBooking.jsx';
import BookingList from '../components/bookingList/BookingList.jsx';
import Reception from '../components/reception/Reception.jsx';
import Calculations from '../components/calculations/Calculations.jsx';
import HotelService from '../components/hotelService/HotelService.jsx';
import Reports from '../components/reports/Reports.jsx';
import FinancialAnalysis from '../components/financialAnalysis/FinancialAnalysis.jsx';
import Settings from '../components/settings/Settings.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-booking" element={<CreateBooking />} />
        <Route path="/booking-list" element={<BookingList />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/calculations" element={<Calculations />} />
        <Route path="/hotel-service" element={<HotelService />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/financial-analysis" element={<FinancialAnalysis />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
);

export default AppRoutes;
