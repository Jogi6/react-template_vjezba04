import { Component } from "react";

class UserClass extends Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                <h3>
                    Moje ime je {user.ime} i imam {user.dob} godina.
                </h3>
            </div>
        );
    }
}

export default UserClass;