import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const role = searchParams.get("role") || "worker";
  const isWorker = role === "worker";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData, "Role:", role);
    
    // Mock login - route based on role
    if (role === "doctor") {
      navigate("/dashboard/doctor");
    } else if (role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/worker");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white py-12">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg border-2 border-black shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black">
              {role === "doctor" ? "Doctor Login" : role === "admin" ? "Admin Login" : "Migrant Login"}
            </h2>
            <p className="text-gray-600 mt-2">
              Welcome back! Please sign in to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="username" className="text-black font-medium">
                Email or Worker ID
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Enter your email or Worker ID"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-black font-medium">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-black bg-white text-black focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-black hover:underline">
                Forgot password?
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900">
                Sign In
              </Button>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full border-2 border-black text-black hover:bg-gray-100 py-3 rounded-lg font-medium"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </Button>
              
              <Button asChild variant="outline" className="w-full border-2 border-black text-black hover:bg-gray-100 py-3 rounded-lg font-medium">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-black hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;