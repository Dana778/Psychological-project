import styled from 'styled-components';//если я хочу задать общие параметры стиля, где это сделать?

export const HeaderStyle = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    display: grid;
    align-items: center;
    margin: 0;
    justify-content: center ;
`;

export const TitleStyle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    display: grid;
    align-items: center;
    margin: 0;
    background-color: rgb(135, 129, 140);
    justify-content: center ;
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const MainNavStyle = styled.div`
    width: 100%;
    box-sizing: border-box;   
    height: 50px;
    background-color: #333;
    overflow: hidden;
`;


export const ButtonStyle = styled.button`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    background-color: #333;
    overflow: hidden;
`;

export const LinksStyle = styled.a`
    color: #f2f2f2;
    font-size: 17px;
    text-decoration-color: #333;
`;

export const LinksOnHoverStyle = styled`//a:hover
    background-color: #ddd;
    color: black;
`;

export const ActiveLinksStyle = styled.a`//a:hover
    background-color: #4CAF50;
    color: white;
`;