"use client";

import React from "react";
import {QuizDashboard} from "../components/Home/QuizDashBoard"; // Import from the correct path

const QuizDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <QuizDashboard /> {/* Render your QuizDashboard here */}
    </div>
  );
};

export default QuizDashboardPage;
