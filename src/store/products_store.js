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
        {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:5,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:6,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:7,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:8,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:9,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:10,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
        {id:11,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_laptop_1,characteristic:{
            processer:'intel',
            processer_model:'i',
            ram:'GB',
            ssd:'',
            hdd:'',
            display:'',
            display_hz:'',
            video_card:''
        }}, 
    ] 

    // msi_dekstops = [
    //     {id:1,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:2,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:3,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:4,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:5,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:6,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:7,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:8,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:9,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:10,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    //     {id:11,name:'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',price:449,old_price:500,image:msi_dekstop_1}, 
    // ]

    image_1 = 'https://cdn.citilink.ru/_5uYwUwybRVvCDl4opQlRv0DcNnja60cqCiBtDsc-i4/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/0746fb6a-347d-47fa-b548-787ccae3b0f5.jpg'
    msi_dekstops = [
        {id: 21, 
            name: 'MSI Infinite 11SI-1611XRU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: this.image_1 ,
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-11400F', 
                motherboard: 'z590', 
                ram: 16, 
                ssd: 512, 
                video_card: 'GTX 1660 Super', 
                block_power: 500, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 22, 
            name: 'MSI PRO DP130 12-477XRU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/4Aov_Q8to1s-txLa-Y8pHUnqhycfBCGWRwd7Hu7-4F4/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/0dc9f7a2-737e-4956-be73-e6d4603e606f.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-12400', 
                motherboard: 'H610', 
                ram: 8, 
                ssd: 256, 
                video_card: 'integrated', 
                block_power: 350, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 23, 
            name: 'MSI trident 3 13TC-069RU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/JeLdcRdDP3rR5sozY5_L81DLtZCcyKslLkXuz0F3VkI/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/3b83f77e-6ce5-4607-8af1-85f08362795a.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I7-13700F', 
                motherboard: 'H610', 
                ram: 16, 
                ssd: 1024, 
                video_card: 'RTX 3060', 
                block_power: 330, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 24, 
            name: 'MSI Pro DP130 12RK-474RU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/vJr0mtKn9OVw6dP-CCxZJ_VeB5WoQds4aob0nSqkCZo/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/product-images/cba02278-a07a-469c-bc56-4fdcf6c8bc28.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-12400F', 
                motherboard: 'z590', 
                ram: 8, 
                ssd: 512, 
                video_card: 'GT 1030', 
                block_power: 350, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 25, 
            name: 'MSI infinite S3 13TC-678RU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/fYMMImy03VdUxhclCfZYTU-dwLiQG5yoxHB5vIQVcUY/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/f49d19a8-1441-45c6-9aef-185c748aedd4.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-13400F', 
                motherboard: 'H610', 
                ram: 16, 
                ssd: 1024, 
                video_card: 'RTX 3060', 
                block_power: 500, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 26, 
            name: 'MSI Trident 3 A 11SI-077XRU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/CprZKXOE_LBqB3KoV7IU0wCLIgPY9AwwDVlmKOKORFU/resizing_type:fit/gravity:sm/width:400/height:400/plain/items/1618181_v01_b.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-1400F', 
                motherboard: 'z590', 
                ram: 16, 
                ssd: 512, 
                video_card: 'GTX 1660 Super', 
                block_power: 230, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 27, 
            name: 'MSI Pro DP20ZA 5M-217RU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/oTOZ372sambeFZG6SP_M9zBM1WgRS7shSGtUf6qastE/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/05ea2045-566d-4b96-8d2f-6736f2d74ff9.jpg' , 
            characteristic: { 
                processer:'Ryzen', 
                processer_model:'5 5600g', 
                motherboard: 'B300', 
                ram: 8, 
                ssd: 512, 
                video_card: 'integrated', 
                block_power: 230, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 28, 
            name: 'MSI Infinite 11TH-1610XRU', 
            category: 'dekstop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/sVXTXDgok5LsjIF6NXqYtjLx0YvJBN9daCkOGr0E2r0/resizing_type:fit/gravity:sm/width:400/height:400/plain/items/1794761_v01_b.jpg' , 
            characteristic: { 
                processer:'intel', 
                processer_model:'I5-11400F', 
                motherboard: 'H510', 
                ram: 16, 
                ssd: 1024, 
                video_card: 'RTX 3050', 
                block_power: 500, 
                type_ram: 'ddr4' 
            } 
        },
        {id: 29, 
            name: 'MSI Codex 5 11SI-851RU', 
            category: 'desktop', 
            price: 0, 
            old_price: 0, 
            image: 'https://cdn.citilink.ru/LtMVsGx62W91-DG0XTLLimZSvZl7hjNoNsKeR5H_O28/resizing_type:fit/gravity:sm/width:400/height:400/plain/product-images/9d4e6dba-ff1b-4046-b29c-0a18f1b42d5f.jpg' , 
            characteristic: { 
                processer:'Intel', 
                processer_model:'I5-11400F', 
                motherboard: 'B300', 
                ram: 16, 
                ssd: 512, 
                video_card: 'GTX 1660 Super', 
                block_power: 500, 
                type_ram: 'ddr4' 
            } 
        },
    ]


    constructor(){ 
        makeAutoObservable(this) 
    } 
 
    test(){ 
        console.log('test') 
    } 
 
} 
 
export default new Product()