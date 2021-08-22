import img from "./images/mobiles/mob3.jpg";
import img2 from "./images/headphones/headphone1.jpg";

let stocks = [ {
                    id:1,name:"Samsung S21 ultra",
                    category : 'mobile', 
                    url : "https://images.samsung.com/is/image/samsung/p6pim/in/sm-g998bzkginu/gallery/in-galaxy-s21-ultra-5g-g988-sm-g998bzkginu-thumb-410207559?$GNB_CARD_FULL_M_PNG_PNG$",
                    description:'ROM - 256 GB || Color - White', 
                    price : 75990,
                    qty : 5 
                },

                {
                    id:2,name:"Redmi - 9A",
                    category : 'mobile',
                    url : "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/07/10/source-img/20200710112821_5f07e05567c90.jpg_500x500.jpg",
                    description:'ROM - 256 GB || Color - light blue', 
                    price : 9900,
                    qty : 5
                },
                {
                    id:3,
                    name:"iPhone X",
                    category : 'mobile', 
                    url : img,description:'ROM - 256 GB || Color - Black', 
                    price : 50900,
                    qty : 5 
                },

                {
                    id:4,name:"Samsung galaxy note 10 plus",
                    category : 'mobile',
                    url : "https://www.ispyprice.com/static/nwprd_model/samsung-galaxy-note-10-plus-256gb-9134.jpg",
                    description:'ROM - 256 GB || Color - Black',
                    price : 70000,
                    qty : 5
                },
                {
                    id:5,
                    name:"iPhone X",
                    category : 'mobile', 
                    url : img,
                    description:'ROM - 256 GB || Color - Black', 
                    price : 56900,
                    qty : 5 
                },

                {
                    id:6,
                    name:"Samsung galaxy fold",
                    category : 'mobile',
                    url : "https://m.media-amazon.com/images/I/71LhAERRPaL._AC_SS450_.jpg",
                    description:'ROM - 512 GB || Color - Silver',
                    price : 108980,
                    qty : 5
                },
                {
                    id:7,
                    name:"iPhone 11 Pro max",
                    category : 'mobile', 
                    url : "https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro.jpg",
                    description:'ROM - 512 GB || Color - Brown', 
                    price : 93500,
                    qty : 5 
                },

                {
                    id:8,
                    name:"Samsung",
                    category : 'mobile',
                    url : img,
                    description:'ROM - 256 GB || Color - Black',
                    price : 70000,
                    qty : 5
                },
                {
                    id:9,name:"iPhone 11",
                    category : 'mobile', 
                    url : img,
                    description:'ROM - 256 GB || Color - Black', 
                    price : 123,
                    qty : 5 
                },

                {
                    id:10,name:"Redmi Note 8",
                    category : 'mobile',
                    description:'ROM - 64 GB || Color - Blue',
                    url : "https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg", 
                    price : 70000,
                    qty : 5
                },
                {
                    id:11,name:"iPhone 11",
                    category : 'mobile', 
                    url : img,
                    description:'ROM - 256 GB || Color - Black', 
                    price : 123,
                    qty : 5 
                },

                {
                    id:12,name:"Sony",
                    category : 'headphone',
                    url : img2,
                    description:'Color - White',
                    price : 1500,
                    qty : 5
                },
                {
                    id:13,name:"JBL",
                    category : 'headphone', 
                    url : "https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw26ac7e3b/JBL_TUNE500_Product-Image_Front_Blue-1605x1605px.png?sw=537&sfrm=png",
                    description: 'Color - Blue', 
                    price : 2499,
                    qty : 5 
                },

                {
                    id:14,name:"JBL",
                    category : 'headphone',
                    url : "https://m.media-amazon.com/images/I/71ynIMjwgwL._SL1500_.jpg",
                    description:'Color - Black',
                    price : 2500,
                    qty : 5
                },
                {
                    id:15,name:"JBL",
                    category : 'headphone', 
                    url : "https://1.bp.blogspot.com/-_iyKi1rqlxY/XdpBff8vRVI/AAAAAAAAFfU/dm2q6Vdx31MODPUqzF_SLJpILZeJ5BBXwCNcBGAsYHQ/s640/JBL1.jpg",
                    description:'Color - Red', 
                    price : 2000,
                    qty : 5 
                },

                {
                    id:16,name:"Boat",
                    category : 'headphone',
                    description:'Color - Florecent green', 
                    url : "https://m.media-amazon.com/images/I/61WqF8Y6HTL._SL1500_.jpg", 
                    price : 2500,
                    qty : 5
                },
                {
                    id:17,name:"Sony",
                    category : 'headphone', 
                    url : "https://m.media-amazon.com/images/I/61t0HecIZbL._AC_SS450_.jpg",
                    description:'Color - Black', 
                    price : 1999,
                    qty : 5 
                },

                {
                    id:18,name:"Sony",
                    category : 'headphone',
                    description:'Color - Blue', 
                    url : "https://m.media-amazon.com/images/I/41i+KMBAFjL.jpg", 
                    price : 1500,
                    qty : 5
                },
                {
                    id:19,name:"Sony",
                    category : 'headphone', 
                    url : "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-sony-xb450-1160-1160-red-2_2000x.jpg?v=1597215816",
                    description:'Color - Red', 
                    price : 1499,
                    qty : 5 
                },

                {
                    id:20,name:"JBL",
                    category : 'headphone',
                    description:'Color - White', 
                    url : img2, 
                    price : 1700,
                    qty : 5
                },
                {
                    id:21,name:"JBL",
                    category : 'headphone', 
                    url : img2,
                    description:'Color - White',  
                    price : 1500,
                    qty : 5 
                },

                {
                    id:22,
                    name:"Boat",
                    category : 'headphone',
                    description:'Color - Black', 
                    url : "https://m.media-amazon.com/images/I/61stQYWQO4L._SX569_.jpg", 
                    price : 1500,
                    qty : 5
                },
            ];
                
export {stocks};