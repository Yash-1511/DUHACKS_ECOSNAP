import Layout from "@/layouts/Main";
import DashboardNav from "@/components/DashboardNav";
import { AuthContext } from "@/store/auth";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { publicFetch } from "@/utils/fetcher";
function index() {
  const { isAuthenticated, authState } = useContext(AuthContext);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await publicFetch.get("/users");
      setUser(data);
    };
    fetchUser();
  },[]);
  return (
    <Layout title="Dashboard">
      <DashboardNav hero="Dashboard" />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {isAuthenticated() ? (
          <>
            <div>
              <h2 className="text-2xl">
                Welcome{" "}
                <Link
                  href="/users/[user]"
                  as={`/users/${authState.userInfo.username}`}
                >
                  <button>
                    {" "}
                    <p>
                      <span className="text-indigo-700">
                        {authState.userInfo.username}!
                      </span>
                    </p>{" "}
                  </button>
                </Link>
              </h2>
            </div>
          </>
        ) : (
          <h1>please refresh the page</h1>
        )}
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 p-4">
        <div class="card card-border">
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <span
                  class="avatar avatar-rounded !bg-indigo-600"
                  style={{
                    width: "55px",
                    height: "55px",
                    minWidth: "55px",
                    lineHeight: "55px",
                    fontSize: "27.5px",
                  }}
                >
                  <span class="avatar-icon avatar-icon-55">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                </span>
                <div>
                  <span>Total Uploads</span>
                  <h3>
                    <span>0</span>
                  </h3>
                </div>
              </div>
              <div class="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>1%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-border">
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <span
                  class="avatar avatar-rounded !bg-blue-500"
                  style={{
                    width: "55px",
                    height: "55px",
                    minWidth: "55px",
                    lineHeight: "55px",
                    fontSize: "27.5px",
                  }}
                >
                  <span class="avatar-icon avatar-icon-55">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </span>
                </span>
                <div>
                  <span>Total Points</span>
                  <h3>
                    <span>0</span>
                  </h3>
                </div>
              </div>
              <div class="tag gap-1 font-bold border-0 text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>10%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-border">
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <span
                  class="avatar avatar-rounded !bg-emerald-500"
                  style={{
                    width: "55px",
                    height: "55px",
                    minWidth: "55px",
                    lineHeight: "55px",
                    fontSize: "27.5px",
                  }}
                >
                  <span class="avatar-icon avatar-icon-55">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      ></path>
                    </svg>
                  </span>
                </span>
                <div>
                  <span>Current Streak</span>
                  <h3>
                    <span>0</span>
                  </h3>
                </div>
              </div>
              <div class="tag gap-1 font-bold border-0 text-red-600 dark:text-red-500 bg-red-100 dark:bg-red-500/20 dark:text-red-100">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>-2.3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* users list  */}
      <div>
        <h1 className="text-3xl px-4 py-6 mb-3 font-medium tracking-tight text-gray-900">
          Leaderboard
        </h1>
        <div class="relative overflow-x-auto shadow-lg sm:rounded-lg p-2">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Username
                </th>
                <th scope="col" class="px-6 py-3">
                  email
                </th>
                <th scope="col" class="px-6 py-3">
                  Points
                </th>
                <th scope="col" class="px-6 py-3">
                  Highest Streak
                </th>
              </tr>
            </thead>
            <tbody>
              {user && (
                <>
                  {user?.map(({ username, email, points, id }) => (
                    <tr class="bg-white border-b" key={id}>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {username}
                      </th>
                      <td class="px-6 py-4">{email}</td>
                      <td class="px-6 py-4">{points}</td>
                      <td class="px-6 py-4">0</td>
                      <td class="px-6 py-4"></td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default index;
