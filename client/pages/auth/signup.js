import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import Link from "next/link";
import useToast from "@/hooks/usetoast";
import signupBg from "public/images/bgsignup.jpg";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Layout from "@/layouts/Main";
import { AuthContext } from "@/store/auth";
import { publicFetch } from "@/utils/fetcher";

const signup = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { setAuthState } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    isAuthenticated() && router.replace("/dashboard");
  }, [isAuthenticated()]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showToast] = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await publicFetch.post("signup", formData);
      const { token, expiresAt, userInfo } = data;
      setAuthState({ token, expiresAt, userInfo });
    } catch (err) {
      console.log(err);
      showToast(err.response.data.error, "error");
    }
  };
  return (
    <Layout title="Register - EcoSnap">
      <div className="flex h-screen flex-col">
        <Toaster />
        <div className="h-screen">
          <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
            <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
              <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                <div className="flex flex-col">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Logo Image"
                      width={500}
                      height={500}
                      className="h-14 w-auto"
                    />
                  </Link>
                  <div className="mt-20">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Get started for free
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Already registered?{" "}
                      <Link
                        className="font-medium text-blue-600 hover:underline"
                        href="/auth/signin"
                      >
                        Sign in
                      </Link>{" "}
                      to your account.
                    </p>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 grid grid-cols-1 gap-y-8"
                >
                  <div className="">
                    <label
                      for="email"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required="true"
                      className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <label
                      for="email"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required="true"
                      className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <label
                      for="password"
                      className="mb-3 block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      required="true"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <button
                      className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
                      type="submit"
                    >
                      <span>
                        Sign in <span aria-hidden="true">→</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
              <Image
                alt=""
                src={signupBg}
                width="1664"
                height="1866"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default signup;
