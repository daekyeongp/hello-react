import React, {Component} from "react";
import propTypes from 'prop-types';

class MyComponent extends Component {
    render () {
        const { name, children } = this.props; // 비구조화 할당
        return (
            <div>
                제 이름은 {name} 입니다.
                children 값은 {children}
                입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: '박대경'
}

MyComponent.propTypes = {
    name: propTypes.string.isRequired
};

export default MyComponent;