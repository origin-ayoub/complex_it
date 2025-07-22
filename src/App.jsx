import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

import PasswordSettings from "./components/PasswordSettings";
import GeneratedPw from "./components/GeneratedPw";
import ActionBtns from "./components/ActionBtns";


function App() {

    const randomString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^abcdefghijklmnopqrstuvwxyz&*()_0123456789";

    const [pw_range, setRange] = useState(10);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const onStart = () => {
            if (pw_range < 10) {
                setTimeout(() => {
                    setRange(10);
                    toast.warning('NOT RECOMMENDED');
                }, 1000);

                return;
            }

            let res = "";

            for (let i = 0; i < pw_range; i++) {
                res += randomString[Math.floor(Math.random() * String(randomString)?.length)].toString();
            }

            setPassword(res);
        }

        onStart();
    }, [pw_range]);

    const generate = () => {
        if (pw_range < 10) {
            toast.warning('NOT RECOMMENDED');
            setTimeout(() => setRange(10), 1000);

            return
        }

        let res = "";

        for (let i = 0; i < pw_range; i++) {
            res += randomString[Math.floor(Math.random() * String(randomString)?.length)].toString();
        }

        setPassword(res);
    }

    return (
        <>
            <div className="app">
                <header className="app-header">
                    <h1>
                        <span>Secure Password Generator</span>
                    </h1>
                </header>

                <main className="app-main">
                    <GeneratedPw password={password} />

                    <PasswordSettings setRange={setRange} pw_range={pw_range} />

                    <ActionBtns password={password} generate={generate} />

                    <footer className="app-footer">
                        <p>© {new Date().getFullYear()} Secure Password Generator</p>
                    </footer>
                </main>
            </div>

            <ToastContainer
                position="top-center"
                pauseOnHover={false}
                closeButton={false}
                autoClose={1200}
                theme="dark"
                icon={false}
            />
        </>
    )
}

export default App;
