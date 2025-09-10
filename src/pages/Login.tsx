import Header from "./Header";
import "./login.css";

export default function Login() {
    return (
        <>
            <Header />

            <section className="bg-stone-50 w-screen flex relative !pt-16 min-h-screen text-black justify-center">
                <form className="flex flex-col w-100 h-auto bg-white text-black justify-space-around">
                    <h1>Se connecter</h1>
                    <div className="flex flex-col">
                        <div className="flex">
                            <label htmlFor="email">Email</label>
                            <input type="email" className=""/>
                        </div>
                    </div>
                </form>

            </section>
        </>
    )
}
