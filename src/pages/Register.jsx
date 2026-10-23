import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registrationSchema } from "../schemas/registrationSchema";
export default function Register(){
  const [successMessage, setSucccessMessage]=useState("");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {errors, isSubmitting},
  }=useForm({
    resolver: zodResolver(registrationSchema)
  });
  const onSubmit = async (data) => {
    setSucccessMessage("");
    await new Promise((resolve)=> setTimeout(resolve, 1500));

    if(data.email.toLowerCase()==="taken@example.com"){
      setError("email",{
        type: "server",
        message: "This email is already registered. Try another one.",
      });
      return;
    }
    setSucccessMessage("Account created successfully! Welcome aboard. 🎉");
    reset();
  }
  
  return(
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center gap-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-lg shadow-2xl border border-slate-700">
        <h2 className="font-bold text-2xl text-center mb-6 text-indigo-400">
          Create an Account
        </h2>
        {successMessage && (
          <div className="mb-4 p-3 bg-emerald-500/10 border-emerald-400 rounded-lg text-sm text-center">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" {...register("name")} placeholder="Zain Aslam" className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:outline-none focus:border-indigo-500 text-white" />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" {...register("email")} placeholder="zain@example.com" className="w-full px-3 py-3 bg-slate-700 rounded-lg border border-slate-600 focus:outline-none focus:border-indigo-500 text-white" />
            {errors.email &&(
              <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input type="password" {...register("password")} placeholder="••••••••" className="w-full px-3 py-2 bg-slate-700 rounded-lg border border-slate-600 focus:outline-none focus:border-indigo-500 text-white" />
            {errors.password && (
              <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input type="password" {...register("confirmPassword")} placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-indigo-600 text-white" />
            {errors.confirmPassword && (
              <p className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit" disabled={isSubmitting} className="py-2.5 w-full bg-indigo-600 hover:bg-indigo-500 cursor-pointer rounded-lg font-semibold transition-colors duration-200 mt-2">{isSubmitting ? "Submitting..." : "Register"}</button>
        </form>
      </div>
    </div>
  );
}