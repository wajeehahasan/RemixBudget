import Input from "../components/Input";
import Button from "../components/button";

export const meta = () => {
    return [{ title: "Login" }];
};

export default function Login() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 hover:drop-shadow-2xl hover:shadow-teal-400 text-blue-700 w-full ">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>

                        <Input text='Email'/>
                        <Input text='Password'/>
                       <Button text='Login'/>
                        <div className="text-center text-sm text-grey-dark mt-4">

                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Forgot Password
                        <a className="no-underline border-b border-blue-600 text-blue" href="./signup.html">
                            Signup
                        </a>.
                    </div>
                </div>
            </div>

        </div>

    );
}