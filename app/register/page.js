"use client";
import { useState } from "react";
import { useRouter } from "next/router";

function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const router = useRouter();

  return <div>page</div>;
}

export default page;
