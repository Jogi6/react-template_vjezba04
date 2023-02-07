import { Component } from "react";
import ChildFun from "./ChildFun";
import UserClass from "./UserClass";
import UserFun from "./UserFun";

class App extends Component {
    users = [
        {
            ime: "Branko",
            prezime: "Branković",
            dob: 32,
        },
        {
            ime: "Janko",
            prezime: "Janković",
            dob: 42,
        },
        {
            ime: "Stanko",
            prezime: "Stanković",
            dob: 52,
        },
    ];

    render() {
        const users = this.users;
        
        return (
            <>
                <UserFun ime={users[0].ime} godine={users[0].dob}/>
                <UserClass user={users[1]} />
                <ChildFun>
                    {users}
                </ChildFun>
            </>
        );
    }
}

export default App;
