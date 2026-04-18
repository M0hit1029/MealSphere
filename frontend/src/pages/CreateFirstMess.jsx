import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Store } from "lucide-react";
import Navbar from "../components/MessDashboardNavbar";

const CreateFirstMessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
            <Store className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Create your first mess</h1>
          <p className="text-slate-600 mb-8">
            You do not have any registered mess yet. Start by adding your first mess and then manage menu, members, and attendance from one place.
          </p>
          <button
            type="button"
            onClick={() => navigate("/mess-dashboard/add-mess")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <PlusCircle className="w-5 h-5" />
            Add Your First Mess
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFirstMessPage;
