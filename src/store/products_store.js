import { makeAutoObservable } from "mobx" 
 
 
import product_image_1 from '../images/products/product_1.png' 
 
import msi_laptop_1 from '../images/products/msi_laptop_1.png' 

import msi_dekstop_1 from '../images/products/msi_dekstop_1.png'
class Product{ 
 
    products=[ 
        {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:499,image:product_image_1}, 
        {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:199,image:product_image_1}, 
        {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:299,image:product_image_1}, 
        {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:399,image:product_image_1}, 
    ] 
    msi_laptops = [ 
        {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:5,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:6,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:7,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:8,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:9,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:10,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
        {id:11,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_laptop_1}, 
    ] 
    msi_dekstops = [
        {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:5,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:6,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:7,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:8,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:9,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:10,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
        {id:11,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,image:msi_dekstop_1}, 
    ]

    constructor(){ 
        makeAutoObservable(this) 
    } 
 
    test(){ 
        console.log('test') 
    } 
 
} 
 
export default new Product()