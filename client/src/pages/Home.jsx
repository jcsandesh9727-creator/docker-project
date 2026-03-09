import style from "./home.module.css"

export default function Home() {
    return (
        <div>
            <h1 className="p-20 bg-amber-400 font-sans">Home Page</h1>
            <button className={style.button} >hello home</button>
        </div>
    );
}
