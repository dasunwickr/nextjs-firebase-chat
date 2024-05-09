"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth, firestore } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validate = () => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const newErrors = {};

    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!validate()) {
        setLoading(false);
        return;
      }
      const userCrede = await signInWithEmailAndPassword(auth, email, password);
      const user = userCrede.user;

      if (user) {
        router.push("/");
      }

      router.push("/");
      setErrors({});
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen p-10 m-2">
      <form className="space-y-4 w-full max-w-2xl shadow-lg p-10">
        <h1 className="text-xl text-center font-semibold text-[#0b3a65ff]">
          Chat<span className="font-bold text-[#eeab63ff]">2</span>Chat
        </h1>

        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email}</span>
          )}
        </div>

        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-block bg-[#0b3a65ff] text-white"
            onClick={handleSubmit}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <div>
          <span>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default page;
