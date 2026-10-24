import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={ hasError: false}
    }
    static getDerivedStateFromError(){
        return { hasError: true}
    }
    componentDidCatch(error, errorInfo){
        console.log("Error caught by boundary:", error, errorInfo)
    }
    render(){
        if(this.state.hasError){
            return(
                <main className="flex flex-col justify-center items-center text-center gap-3 p-3 mx-auto max-w-6xl h-screen">
                    <h1 className="font-bold text-3xl text-red-600">Something went wrong.</h1>
                    <p className="text-sm font-medium text-gray-600">Please try again later.</p>
                    <button className="px-3 py-2 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition" onClick={()=>window.location.reload()}>Reload</button>
                </main>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;