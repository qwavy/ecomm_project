import { useState } from "react"
import products_store from "../../../store/products_store"

const MonitorsSort = () => {
    const msi_monitors = [
        {id:2,
        name:'MSI Optix G2412',
        price:0,
        old_price:0,
        image:'https://c.dns-shop.kz/thumb/st1/fit/0/0/28f70f107fea4e7fa2d85fc4940f2280/4ab89ff6f56559fadb6945590251624f08ffb968b77e88151d438ba8fc6462e0.jpg.webp' ,
        characteristic:{  
            response_time:'1ms',
            display:23.8,
            display_hz:170,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'8 bit',
            brightness:250
    
         },
        },
        {id:1,
        name:'MSI Optix G24C4',
        price:0,
        old_price:0,
        image:'https://c.dns-shop.kz/thumb/st4/fit/0/0/8ce1eb9b9294bd5a7abc583c788e675e/3e3f2534117df79e31297e37c9c99b46f8cf5c787aceff6f09223a1bf776de01.jpg.webp' ,
        characteristic:{  
            response_time:'1ms',
            display:24,
            display_hz:144,
            matrix:'VA',
            resolution:'1920x1080',
            color_depth:'8 bit',
            brightness:250
         },
        },
        {id:3,
        name:'MSI Pro MP242V',
        price:0,
        old_price:0,
        image:'https://c.dns-shop.ru/thumb/st1/fit/500/500/875db7972c9387922e90a38fe43ac0b3/c60a2ed8a8d2acb6b1957ca395f4a66578c3aa89f070b4bb9b76862709a1d966.png.webp' ,
        characteristic:{  
            response_time:'5ms',
            display:23.8,
            display_hz:75,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'6 bit+FRC',
            brightness:250
         },
        },
        {id:4,
        name:'MSI Pro MP241X' ,
        price:0,
        old_price:0,
        image:'https://c.dns-shop.ru/thumb/st4/fit/500/500/3794a3765cefd85e76eb47f23c1964d0/78c2737bd0f85d00bc4d9b007ffa4cea5f5c08e3ebf23c3a5fe8db68faf64a17.jpg.webp',
        characteristic:{  
            response_time:'4ms',
            display:23.8,
            display_hz:75,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'8 bit',
            brightness:220
             },
            },
        {id:5,
        name:'MSI PRO MP273A',
        price:0,
        old_price:0,
        image:'https://storage-asset.msi.com/global/picture/product/product_16946568566f9c800be924943d057187d687073e79.png' ,
        characteristic:{  
            response_time:'4ms',
            display:27,
            display_hz:100,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'6 bit + FRC',
            brightness:300
         },
        },
        {id:6,
        name:'MSI PRO MP243X',
        price:0,
        old_price:0,
        image:'https://storage-asset.msi.com/global/picture/product/product_16950225027023f9e0e5f86cdb7e4d8de73e468b1b.png' , 
        characteristic:{  
            response_time:'4ms',
            display:23.8,
            display_hz:100,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'8 bit',
            brightness:250
         },
        },
        {id:7,
        name:'MSI Optix G27CQ4E2',
        price:0,
        old_price:0,
        image:'https://c.dns-shop.ru/thumb/st4/fit/0/0/f8066380ae26d621a7b9c4724642b968/4269a0aee38cb43fbcbab268dc3369950dbb2a9b7e05d55919932f6f9a650480.jpg.webp' ,
        characteristic:{  
            response_time:'4ms',
            display:27,
            display_hz:170,
            matrix:'VA',
            resolution:'2560x1440',
            color_depth:'8 bit',
            brightness:250
         },
        },
        {id:8,
        name:'MSI PRO MP243',
        price:0,
        old_price:0,
        image:'https://storage-asset.msi.com/global/picture/product/product_16902717792b529f0d2c26807d73bcd46bf9c45ee2.png' ,
        characteristic:{  
            response_time:'5ms',
            display:23.8,
            display_hz:75,
            matrix:'IPS',
            resolution:'1920x1080',
            color_depth:'8 bit',
            brightness:250
         },
        },
        {id:9,
        name:'MSI Optix G274QPX',
        price:0,
        old_price:0,
        image:'https://storage-asset.msi.com/global/picture/product/product_168179964345fcf73eda69b642a3c5426f30e53ae1.png' ,
        characteristic:{  
            response_time:'1ms',
            display:27,
            display_hz:240,
            matrix:'IPS',
            resolution:'2560x1440',
            color_depth:'8 bit + FRC',
            brightness:400
         },
        },
        {id:10,
        name:'MSI Optix MPG321UR-QD',
        price:0,
        old_price:0,
        image:'https://c.dns-shop.ru/thumb/st4/fit/0/0/304af2c819343725cbb8a5688bb796f1/3e4cd86cfad807ab037353026953c63a12f25a8b87145327a0c8e6b6fa6ae41f.jpg.webp' ,
        characteristic:{  
            response_time:'4ms',
            display:32,
            display_hz:144,
            matrix:'QLED',
            resolution:'3840x2160',
            color_depth:'10 bit',
            brightness:600
         },
        }
    ]

    const [msiProducts,setMsiProducts] = useState(products_store.msi_motherboard)

    const handleByPrice = () => {
        const compare = (a,b) => {
            if (a.price > b.price) return 1;
            if (b.price > a.price) return -1;
        }
        const sorted = msiProducts.sort(compare)
        setMsiProducts(sorted)
        console.log(sorted)
        // setMsiProducts([])
    }

    return(
        <div>
            <button onClick={() => handleByPrice()}>sdfgsdlfkgjsdlfkgjlk</button>
            {msiProducts.map((product) => (
                <div>
                    {product.name}
                </div>
            ))}
        </div>
    )
}

export default MonitorsSort