"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AvatarGenerator } from "random-avatar-generator";
import Link from "next/link";

function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const router = useRouter();

  const generateRandomAvatar = () => {
    const generator = new AvatarGenerator();
    return generator.generateRandomAvatar();
  };

  const handleRefershAvatar = () => {
    setAvatarUrl(generateRandomAvatar());
  };
  useEffect(() => {
    setAvatarUrl(generateRandomAvatar());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen p-10 m-2">
      {/* form */}

      <form className="space-y-4 w-full max-w-2xl shadow-lg p-10">
        <h1 className="text-xl text-center font-semibold text-[#0b3a65ff]">
          Chat<span className="font-bold text-[#eeab63ff]">2</span>Chat
        </h1>

        {/* display the avatar */}
        <div className="flex items-center space-y-2 justify-between border border=gray-200 p-2">
          <img
            src={avatarUrl}
            className="rounded-full h-20 w-20"
            alt="avatar"
          />
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleRefershAvatar}
          >
            New Avatar
          </button>
        </div>

        {/* name */}
        <div>
          <label className="label">
            <span className="text-base label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.username && (
            <span className="text-sm text-red-500">{errors.username}</span>
          )}
        </div>

        {/* email */}
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

        {/* password */}
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        {/* confirm password */}
        <div>
          <label className="label">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-block bg-[#0b3a65ff] text-white"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>
        </div>

        <div>
          <span>
            Do you already have an account?{" "}
            <Link
              href="/login"
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
