import styled from 'styled-components';//если я хочу задать общие параметры стиля, где это сделать?

export const HeaderStyle = styled.div`
    width: 100vw;
    height: 150px;
    align-items: center;
    box-sizing: border-box;
    margin: 0;
    justify-content: center ;
    position: fixed;
    top: 0;  
    left:0;
`;

export const TitleStyle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    display: grid;
    align-items: stretch;
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

    color: #f2f2f2;
    text-align: center;
    
    text-decoration: none;
    font-size: 17px;
    background-color: #333;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
`;


export const ButtonStyle = styled.div`
    padding: theme.spacing(1),
`;

export const LinksStyle = styled.a`
    color: #f2f2f2;
    font-size: 17px;
    text-decoration-color: #333;
    cursor: pointer;

    border: 2px solid rgb(33, 31, 31); /* Рамка */
    display: inline-block;
    text-decoration: none; /* Убираем подчёркивание */
    display: inline-block; /* Строчно-блочный элемент */
    color: #fff; /* Белый цвет текста */
    padding: 1rem ; /* Поля вокруг текста */
    text-decoration: none; /* Убираем подчёркивание */
    border-radius: 3px; /* Скругляем уголки */
`;

export const TLinksStyle = styled.a`
    text-decoration-color: rgb(135, 129, 140);
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
`;


export const PicPointer = styled.div`
    cursor: pointer;
`;

export const LinksOnHoverStyle = styled`//a:hover
    background-color: #ddd;
    color: black;
`;

export const ActiveLinksStyle = styled.a`//a:hover
    background-color: #4CAF50;
    color: white;
`;