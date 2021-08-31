import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure about this?
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Jhon" time="Today at 10:00 AM" avatar={faker.image.avatar()} text="Nice blog!"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Pablo" time="Today at 02:00 PM" avatar={faker.image.avatar()} text="I love your work"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Lino" time="Today at 07:00 PM" avatar={faker.image.avatar()} text="You're the best!"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));