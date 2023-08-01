function Container(props) {
    return (
        <div className="w-full h-[90vh] bg-[#eee] flex flex-col items-center justify-center">
            {props.children}
        </div>
        
    )
}

export default Container;