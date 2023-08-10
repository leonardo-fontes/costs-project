function Container(props) {
    return (
        <div className="w-full h-[90vh] bg-[#eee] flex flex-col  ">
            {props.children}
        </div>
        
    )
}

export default Container;