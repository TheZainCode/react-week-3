export default function Dashboard() {
    return (
        <main className="mx-auto max-w-6xl p-6 text-white">
            <section className="flex flex-col justify-center items-center text-center gap-4 p-3">
                <h1 className="font-bold text-3xl text-emerald-400">Dashboard</h1>
                <p className="text-xl font-semibold text-slate-300 mt-3">Today calculated data is given below.</p>
            </section>
            <section className="flex flex-col justify-center items-center text-center gap-4 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-6 mt-4">
                <h2 className="text-lg font-bold text-indigo-400">Today Stats:</h2>
                <div className="flex justify-center items-center gap-6">
                    <h3 className="font-semibold text-xl">Sales: 15</h3>
                    <h4 className="font-semibold text-md">Amount: $900</h4>
                </div>
            </section>
        </main>
    );
}