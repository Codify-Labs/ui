function Progress({ total }) {
    return (
        <div className="bg-[#EEEEEE] | w-full | py-1.5 px-2 | rounded-md">
            <div className="total | bg-blue-900 h-1.5 | rounded-md"
            style={{ width: `${total}%` }}></div>
        </div>
    )
}

export default Progress
