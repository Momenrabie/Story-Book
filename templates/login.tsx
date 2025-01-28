import React from "react";
import Button from "../button";
import Input from "../input";

type AuthPageProps = {
  /** Determines if the page is for login or register */
  type: "login" | "register";
  /** Image to be displayed on the page */
  image?: string;
};

const AuthPage: React.FC<AuthPageProps> = ({ type, image }) => {
  const isLogin = type === "login";

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-50">
      <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {image && (
          <div
            className="w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
        <div className="flex flex-col justify-center items-center w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Register"}
          </h1>
          <form className="flex flex-col justify-center items-center space-y-4 w-full">
            {!isLogin && (
              <Input size="small" types="text" placeholder="Enter your name" />
            )}
            <Input size="small" types="text" variant="default" />
            <Input
              types="password"
              placeholder={
                isLogin ? "Enter your password" : "Create a password"
              }
            />
            <div className="flex justify-center">
              <Button size="small" variant="default">
                {isLogin ? "Login" : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
