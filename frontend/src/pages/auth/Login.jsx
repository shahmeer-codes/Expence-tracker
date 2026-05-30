const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <form className="bg-purple-500 p-8 rounded-3xl flex flex-col gap-4 w-96">
        <h1 className="text-2xl font-bold text-white text-center">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="p-3 rounded-lg bg-white outline-none"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="p-3 rounded-lg bg-white outline-none"
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>
        <div className=" flex justify-center items-center">
        <h1 className=" text-white">Do not have an account <a>Signin</a></h1>
        </div>
      </form>
    </div>
  );
};

export default Login;