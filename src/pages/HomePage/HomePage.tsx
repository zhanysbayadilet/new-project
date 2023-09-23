import React, {useEffect} from 'react';
import {Content, paintBackground} from "./HomePageStyle";
import {Button, Typography} from "@mui/joy";


const HomePage = () => {

    useEffect(() => {
        paintBackground('black');
    }, [])

    return (
        <Content>
            <Typography color="primary" level="h2">Home page 1</Typography>
            <Button variant="solid">Hello world</Button>
        </Content>
    );
};

export default HomePage;