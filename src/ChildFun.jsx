const ChildFun = ({children}) => {
    return (
        <div>
            <h3>
                Moje ime je {children[2]?.ime} i imam {children[2]?.dob} godina.
            </h3>
        </div>
    )
}

export default ChildFun