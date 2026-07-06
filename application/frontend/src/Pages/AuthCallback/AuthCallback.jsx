import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function AuthCallback() {

    const navigate = useNavigate();

    useEffect(() => {

        navigate("/dashboard");

    }, []);

    return (

        <div className="min-h-screen flex justify-center items-center">

            Signing you in...

        </div>

    );

}