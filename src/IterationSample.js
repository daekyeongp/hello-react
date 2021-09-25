import React, { useState } from "react";


const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '박대경' },
        { id: 2, text: '학생' },
        { id: 3, text: '대학생' },
        { id: 4, text: '성인' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 고유 값 생성

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 +1
        setNames(nextNames); // names 값 업데이트
        setInputText(''); // inputText 값 비우기.
    };

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )
};


export default IterationSample;