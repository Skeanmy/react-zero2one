import React from 'react';

interface IRobot {
    id: number,
    name: string
}

const Robot: React.FC<IRobot> = (props) => {
    return <li>{props.name}</li>
};

export default Robot;