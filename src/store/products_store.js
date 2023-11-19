import { makeAutoObservable } from "mobx"


import product_image_1 from '../images/product_1.png'


class Product{

    products=[
        {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:499,image:product_image_1},
        {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:199,image:product_image_1},
        {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:299,image:product_image_1},
        {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:399,image:product_image_1},
    ]
    constructor(){
        makeAutoObservable(this)
    }

    test(){
        console.log('test')
    }

}

export default new Product()