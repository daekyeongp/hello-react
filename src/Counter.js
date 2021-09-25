import React, { Component } from "react";


class Counter extends Component {
    state = {
        number: 0
    };
    render() {
        const { number } = this.state; // state를 조회할 땐 this.state 사용
        return (
            <div>
                <h1>{number}</h1>
                <button
                // onclick을 통해 버튼이 클릭되면 호출할 함수
                onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    // 위 코드와 아래 코드는 완전히 같은 기능을 한다.
                    // 아래 코드는 함수에서 바로 객체를 반환하는 기능
                    this.setState(prevState => ({
                        number: prevState.number +1
                    }));
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;