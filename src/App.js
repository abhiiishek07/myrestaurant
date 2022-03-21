import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import TypeDP from './TypeDP';
import MenuData from './MenuData.json'
import Card from './Card';
import './style.css';



function App() {
    const [menu, setMenu] = useState(MenuData);
    

    const filterData =(type) => {
        let data=[];
        data = MenuData.filter(checkCategory);
        function checkCategory(MenuData) {
            if (type=="All-items")
            return MenuData;
            else
            return type === MenuData.category;
        }
        setMenu(data);
    }

    return (
        <div className='container'>
            <div className='navBar'>
                <div className='navBar_content'>
                    <div className='navBar_title'> <h1><Typewriter options={{ strings: ['People who love to eat are always the best people'], autoStart: true, loop: true, }} /></h1></div>
                    <div className='foodTypes'>
                        <div onClick={()=> filterData("All-items")}><TypeDP image='./images/all.jpg' title='All Items'/></div>
                        <div onClick={()=> filterData("Breakfast")}><TypeDP image='./images/breakfast.jpg' title='Breakfast'/></div>
                        <div onClick={()=> filterData("Lunch")}><TypeDP image='./images/lunch.jpg' title='Lunch' /></div>
                        <div onClick={()=> filterData("Hi-Tea")}><TypeDP image='./images/samosa.webp' title='Hi-Tea' /></div>
                        <div onClick={()=> filterData("Dinner")}><TypeDP image='./images/dinner.jpeg' title='Dinner' /></div>
                        <div onClick={()=> filterData("Dessert")}><TypeDP image='./images/gulabJamun.jpg' title='Dessert' /></div>
                </div>
            </div>
            </div>
            <div className='wrapper'>
                {
                    menu.map((MenuData,index)=>{
                        return <Card key={index} img={MenuData.image} name ={MenuData.name} price={MenuData.price} />
                    })
                }
            </div>
        </div>
    );
}

export default App;