function Container({children, className}) {
    return (
        <div className={`w-full min-h-[100vh] bg-[#eee] flex flex-col justify-between ${className}`}>
            {children}
        </div>
        
    )
}

export default Container;