import React from "react";
import "./page1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
function Page1(){
    const wom = ["Sarees","Kurtas","Frocks","Jeans"]
    const FootWear = ["Flats","Heals","Sandals","Shoes"]
    const Accessories = ["Lenses","Belts","Chains","Hats"]
    const Beauty = ["Lipsticks","Fragrances","Nail care","Tools"]
    const [state ,setState] = useState("women");
    const handleChange=(event)=>{
        setState(event.target.value);
    }
    function getItem(){
        if(state==="women") return wom;
        if(state==="foot") return FootWear;
        if(state==="frag") return Accessories;
        if(state==="products") return Beauty;
        return [];
    }
    const SareesCard = [
        {
            id:1,
            name:"S1",
            Image:"./sar1.avif"
        },
        {
            id:2,
            name:"S2",
            Image:"./sar2.avif"
        },
        {
            id:3,
            name:"S3",
            Image:"./sar3.avif"
            
        },
        {
            id:4,
            name:"S4",
            Image:"./sar4.avif"
        },
        {
            id:5,
            Image:"./sar5.avif"
        },
        {
            id:6,
            Image:"./sar6.avif"
        },
        {
            id:7,
            Image:"./sar7.avif"  
        },
        {
            id:8,
            Image:"./sar8.avif"
        },
        {
            id:9,
            Image:"./sar9.avif"
        },
        {
            id:10,
            Image:"./sar10.avif"
        },
        {
            id:11,
            Image:"./sar11.avif"
            
        },
        {
            id:12,
            Image:"./sar12.avif"
        },
    ]
    const Kidcards = [
        {
            id:1,
            name:"NARUTO",
            Image:"./k1.jpeg",
        },
        {
            id:2,
            name:"SASUKE",
            Image:"./k2.jpeg"
        },
        {
            id:3,
            name:"SHIKAMARU",
             Image:"./k3.jpeg"
        },
        {
            id:4,
            name:"NEIJI",
             Image:"./k4.jpeg"
        },
        {
            id:5,
            name:"NEIJI",
            Image:"./k5.jpeg"
        },
        {
            id:6,
            name:"NEIJI",
            Image:"./k6.jpeg"
        },{
            id:7,
            name:"NEIJI",
            Image:"./k7.jpeg"
        },{
            id:8,
            name:"NEIJI",
            Image:"./k8.jpeg"
        },{
            id:9,
            name:"NEIJI",
            Image:"./k9.jpeg"
        
        },{
            id:10,
            name:"NEIJI",
            Image:"./k10.jpeg"
        },{
            id:11,
            name:"NEIJI",
            Image:"./k11.jpeg"
        },{
            id:12,
            name:"NEIJI",
           Image:"./k12.jpg"
        }
    ]
    const KurtasCard = [
        {
            id:1,
            name:"S1",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240708/LKYM/668baf116f60443f31a069e1/-1117Wx1400H-700019737-yellow-MODEL3.jpg",
        },
        {
            id:2,
            name:"S2",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240718/alKy/669856431d763220fadeb500/-473Wx593H-700205873-maroon-MODEL.jpg"
        },
        {
            id:3,
            name:"S3",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240718/wpA2/6698c7ca6f60443f316f55e1/-473Wx593H-464342145-blue-MODEL.jpg"
            
        },
        {
            id:4,
            name:"S4",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240612/7PsP/66698b5c16fd2c6e6abd61ee/-473Wx593H-465859265-lime-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230105/EX2j/63b68b9df997ddfdbd1547c1/-473Wx593H-465557428-purple-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240416/B6So/661ec3ea05ac7d77bb11b2ee/-473Wx593H-467229217-violet-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240612/1aVj/6669bc7205ac7d77bb0f76c6/-473Wx593H-466925461-maroon-MODEL.jpg"  
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240217/xfVr/65d088ff16fd2c6e6a026981/-473Wx593H-467073724-teal-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240504/J8TA/6635b89f05ac7d77bb3dccc7/-473Wx593H-467298625-purple-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240728/RqQF/66a5b32a1d763220fa43d335/-473Wx593H-465425434-pink-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240217/ynEl/65d088f805ac7d77bb607d73/-473Wx593H-467073667-green-MODEL.jpg"
            
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230825/Pkfi/64e7cc02afa4cf41f580e4aa/-473Wx593H-466493738-pink-MODEL.jpg"
        },
    ]
    const JeansCard = [
        {
            id:1,
            name:"NARUTO",
            Image:"https://assets.ajio.com/medias/sys_master/root/20230912/I8jZ/64ff95a4afa4cf41f5da95cc/-473Wx593H-466558601-black-MODEL.jpg",
        },
        {
            id:2,
            name:"SASUKE",
            Image:"https://assets.ajio.com/medias/sys_master/root/20231027/KwiM/653bcec2afa4cf41f56499bc/-473Wx593H-466752263-blue-MODEL.jpg"
        },
        {
            id:3,
            name:"SHIKAMARU",
             Image:"https://assets.ajio.com/medias/sys_master/root/20240910/eFAp/66df75671d763220fad4c1f0/-1117Wx1400H-700397380-blue-MODEL.jpg"
        },
        {
            id:4,
            name:"NEIJI",
             Image:"https://assets.ajio.com/medias/sys_master/root/20240826/xrmS/66cc86b96f60443f312b246f/-473Wx593H-700324977-blue-MODEL.jpg"
        },
        {
            id:5,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20231009/nPV7/6523e8faafa4cf41f53300a3/-473Wx593H-466684656-blue-MODEL.jpg"
        },
        {
            id:6,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240405/saZ6/660fffcd16fd2c6e6aa03356/-473Wx593H-467231512-grey-MODEL.jpg"
        },{
            id:7,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240806/lW7z/66b241156f60443f31f0ae42/-473Wx593H-441148958-darkblue-MODEL.jpg"
        },{
            id:8,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20231018/jHZl/652f7ad1ddf77915194538eb/-473Wx593H-466387415-beige-MODEL.jpg"
        },{
            id:9,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20230904/aU5E/64f5e189ddf7791519951e27/-473Wx593H-466531687-black-MODEL.jpg"
        
        },{
            id:10,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240823/eIpb/66c8938a1d763220fa9440f9/-473Wx593H-442110593-blue-MODEL.jpg"
        },{
            id:11,
            name:"NEIJI",
            Image:"https://assets.ajio.com/medias/sys_master/root/20240902/Vx4i/66d5ac1a1d763220fab7b690/-1117Wx1400H-442431213-medindigo-MODEL.jpg"
        },{
            id:12,
            name:"NEIJI",
           Image:"https://assets.ajio.com/medias/sys_master/root/20240904/nD8I/66d818ed1d763220fabf3959/-473Wx593H-700307647-grey-MODEL.jpg"
        }
    ]
    const LensesCard=[
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231019/DA0e/6530da3bddf779151948624d/-473Wx593H-466466366-black-MODEL.jpg"
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230921/Hn5A/650c2acbafa4cf41f5f8828c/-473Wx593H-463308092-pink-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231011/Q7KP/6526a4f4afa4cf41f53b97eb/-1117Wx1400H-466697273-grey-MODEL.jpg"
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231128/S3WJ/6565f98dafa4cf41f5a64cbb/-473Wx593H-466456307-black-MODEL.jpg"
        },
        {
            id:5,
            Image:"./me.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220202/IAuP/61faa03eaeb26921af87058a/-473Wx593H-469118104-multi-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230609/T4A5/648319fc42f9e729d73422b6/-473Wx593H-469515123-brown-MODEL.jpg"
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230921/47lB/650c2e08afa4cf41f5f8976e/-473Wx593H-461886237-multi-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230921/ttIk/650c2c9eafa4cf41f5f88d96/-473Wx593H-466284558-silver-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231109/PcRv/654ced0fddf77915197b13e8/-473Wx593H-462022380-peach-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240229/zid3/65e0446f05ac7d77bb88a899/-473Wx593H-466282188-brown-MODEL.jpg"
        },
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230921/mYO0/650c2d15ddf7791519eeb1c7/-473Wx593H-465397810-grey-MODEL.jpg"
        }
    ]
    const BeltsCard=[
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220415/VQVp/62588d1af997dd03e2607217/-473Wx593H-410310364-07320-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230927/be5n/651454ecddf77915190a6047/-473Wx593H-410394333-00120-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240304/UsNQ/65e5e03005ac7d77bb951796/-473Wx593H-410475681-00020-MODEL.jpg"
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240110/xW5r/659da49554c30e6276a0e3e0/-473Wx593H-466968005-black-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240914/Su65/66e4bb301d763220fae7300a/-473Wx593H-700421416-black-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231031/msxq/65411706afa4cf41f56b4ecf/-473Wx593H-450159348-black-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240722/OoUC/669e29a01d763220fa0d4d10/-473Wx593H-467278296-black-MODEL.jpg"
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230817/ivpO/64dd2cdceebac147fccfc817/-473Wx593H-466463301-black-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230801/yx8m/64c8f81eeebac147fc9b005c/-473Wx593H-450158050-beige-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240202/mwS2/65bd1bd38cdf1e0df5e37bb5/-473Wx593H-467038111-grey-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230511/yhEH/645bf82f42f9e729d7753f53/-473Wx593H-466142823-khaki-MODEL.jpg"
        },
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230816/dxPb/64dcd152eebac147fccd5cd2/-473Wx593H-466463133-white-MODEL.jpg"
        }
    ]
    const ChainsCard=[
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230624/UjUa/64970506a9b42d15c9f0104f/-473Wx593H-465545385-gold-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230628/5mGE/649c0218a9b42d15c910bbb5/-473Wx593H-465951796-white-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240430/Rkdf/6630daf805ac7d77bb33f855/-473Wx593H-6005364530-multi-MODEL.jpg"
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230817/OaXA/64dd2d01a9b42d15c9b39c79/-473Wx593H-466467526-gold-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240108/dZId/659bfb9854c30e62769ad26b/-473Wx593H-466962307-silver-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230727/UBMe/64c2723ba9b42d15c9745efb/-473Wx593H-466391288-rosegold-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230906/VFFX/64f89242afa4cf41f5c29760/-473Wx593H-6006727460-multi-MODEL.jpg"
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230628/Qiov/649bc603a9b42d15c9099d60/-473Wx593H-465895201-white-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230821/uUIm/64e36a6bafa4cf41f5631856/-473Wx593H-466478400-gold-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230624/5Zq8/6496940aeebac147fcf7e8d1/-473Wx593H-465454415-black-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230720/xoue/64b972c7eebac147fc7fcac9/-473Wx593H-466376260-gold-MODEL.jpg"
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240430/bYXp/6630ea7f16fd2c6e6addbc3d/-473Wx593H-6005364660-multi-MODEL.jpg"
        }
    ]
    const HatsCard=[
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230523/CJ4g/646cc16142f9e729d7a57bdb/-473Wx593H-466180570-white-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240531/at66/6659d2de16fd2c6e6a41e7c3/-473Wx593H-442528060-black-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240516/kPyS/66460c7b16fd2c6e6a0de224/-473Wx593H-410475115-10277-MODEL.jpg"
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20221227/jmKx/63ab2693aeb269659c10a90b/-473Wx593H-410354412-98t-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230522/fzup/646b7ae9d55b7d0c63cd24d6/-473Wx593H-466177488-brown-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220621/coXG/62b1db9bf997dd03e29318ec/-473Wx593H-441221906-purple-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240902/hWOl/66d5d3ea6f60443f314af1c6/-473Wx593H-700350054-beige-MODEL.jpg"
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240424/nSlZ/662940a916fd2c6e6acec441/-473Wx593H-410479104-1ya-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230606/wzRC/647f5db042f9e729d72996a9/-473Wx593H-466243268-blue-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230525/EL4O/646f877cd55b7d0c63fc583c/-473Wx593H-442138839-multi-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230606/si20/647f3843d55b7d0c63525adb/-473Wx593H-466243152-pink-MODEL.jpg"
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240718/Vocw/66984a861d763220fadd5bdd/-473Wx593H-464721330-white-MODEL.jpg"
        }
    ]
    const LipstickCard=[
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230223/o8bu/63f72baef997dde6f4befb14/-473Wx593H-4929277300-pink-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240709/Gf6h/668d20136f60443f31baff81/-473Wx593H-4913356490-coffeelite-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240709/DX60/668d1f5f6f60443f31baeb35/-473Wx593H-4919544020-redwine-MODEL.jpg"
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240709/DX60/668d1f5f6f60443f31baeb35/-473Wx593H-4919544020-redwine-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240408/EvmN/66139acb16fd2c6e6aa44e78/-473Wx593H-4942933010-131spicedtea-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230131/w4LJ/63d93673aeb269c651073b7e/-473Wx593H-4928754800-5in1nude-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20211228/IUjo/61ca47cbf997ddf8f164c07c/-473Wx593H-4924927740-no6-MODEL.jpg"
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240408/dCHW/661391df05ac7d77bbfc9765/-473Wx593H-4942953060-17pearlymauve-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230314/RAVk/641032fff997dde6f4f7999e/-473Wx593H-4936361790-multi-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220323/i2Rq/623b12d9f997dd03e22851f5/-473Wx593H-4923681880-14caffeinebandit-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240423/hJfQ/66279dbc05ac7d77bb20602e/-1117Wx1400H-4919005780-multi-MODEL.jpg"
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220112/GSfZ/61de6b33aeb2695cdd10d1f8/-473Wx593H-4921666380-peekaboo003-MODEL.jpg"
        }
    ]
    const FragrancesCard = [
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20201125/YcNH/5fbd5d75f997dd8c83a6b90e/-473Wx593H-4908240150-multi-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220923/9Esk/632dd4d0f997dd1f8d19a95e/-473Wx593H-4901046750-multi-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240515/mlzv/6644927305ac7d77bb5ca113/-473Wx593H-4924946130-multi-MODEL.jpg"
            
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230123/paWD/63cea9f6aeb269c651f3f176/-1117Wx1400H-4913276270-multicolor-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230509/vbWJ/645a5d4042f9e729d7721b05/-1117Wx1400H-4914917740-multi-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230622/Y7tw/64947912d55b7d0c63a2451e/-473Wx593H-4932176530-multi-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231004/n8C3/651d5448ddf77915191bdebc/-473Wx593H-4932890670-multi-MODEL.jpg"  
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240515/Epu3/6644930a16fd2c6e6a07785d/-473Wx593H-4939126500-multi-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240905/iqOY/66d98f491d763220fac665d2/-473Wx593H-4925061600-multi-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20201125/25Ot/5fbd54c1f997dd8c83a6677f/-473Wx593H-4913276130-multi-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230216/1CCm/63ee4ba3aeb26924e375292c/-1117Wx1400H-4913274720-multicolor-MODEL.jpg"
            
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230612/MePE/6487052442f9e729d7371080/-473Wx593H-4910015020-multi-MODEL.jpg"
        },
    ]
    const NailCard = [
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230201/9FV6/63da7eeff997dd708e32c926/-1117Wx1400H-4921751190-scarletblaze-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20221220/x8sH/63a1982cf997ddfdbde39604/-473Wx593H-4926562470-multicolor-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230825/MAeU/64e8d96cafa4cf41f58b66d2/-473Wx593H-4936812700-pinkmarble-MODEL.jpg"
            
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230509/mmoi/645a679842f9e729d772594c/-1117Wx1400H-4926521130-blue-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20221102/JKOl/63621410aeb269659c6ad8ac/-473Wx593H-4926535240-multi-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231204/R8C4/656d92e3ddf7791519af0bd4/-1117Wx1400H-4942720750-pearlplay-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240221/sA4B/65d6286e05ac7d77bb6d32fa/-473Wx593H-4943965190-shadebase-MODEL.jpg"  
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220128/geje/61f2ea02f997dd662340e241/-473Wx593H-4915255760-ooohnaturel-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20221221/RosA/63a3315ef997ddfdbdeb4950/-473Wx593H-4924927050-multi-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240516/xOy3/6646179616fd2c6e6a0e2e1d/-473Wx593H-4933874060-multi-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230728/pM3o/64c3617ea9b42d15c97695b3/-473Wx593H-4936413040-multicolor-MODEL.jpg"
            
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231120/zyvf/655b4886ddf77915198d60c3/-473Wx593H-4933810400-n212collgue-MODEL.jpg"
        },
    ]
    const ToolsCard = [
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240708/JcWO/668bad996f60443f31a024ff/-473Wx593H-4936528030-multi-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240708/M68n/668bae916f60443f31a052f2/-473Wx593H-4938272260-black-MODEL.jpg"
            
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240530/NKJN/665872d405ac7d77bb903c45/-473Wx593H-4937203130-multi-MODEL.jpg"
            
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240228/7Vj9/65df5d4105ac7d77bb8605dc/-473Wx593H-4938272300-02skin-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230420/EOl6/64412784711cf97ba7394aa6/-473Wx593H-4936404820-multi-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230728/SIe6/64c3624fa9b42d15c976988e/-473Wx593H-4936412630-bluepink-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220330/C3aw/62445af0aeb26921af00de80/-473Wx593H-4913380270-multi-MODEL.jpg"  
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230615/Qs52/648b210742f9e729d7451c46/-473Wx593H-4936387260-multi-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240808/zba3/66b4721e6f60443f31f5f927/-473Wx593H-4944185270-multi-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240708/JDSC/668bb0e36f60443f31a0b2d4/-1117Wx1400H-4936529530-silver-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240708/irj3/668bb1aa1d763220fa1a2d4f/-473Wx593H-4936527920-pink-MODEL.jpg"
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240530/ymeo/6658725f16fd2c6e6a3e69b3/-473Wx593H-4936951500-multi-MODEL.jpg"
        },
    ]
    const FlatsCard = [
        {
            id:1,
            Image:"https://assets.ajio.com/medias/sys_master/root/20230929/3gKE/6516fd56ddf77915190f57f3/-473Wx593H-466650841-brown-MODEL.jpg"
        },
        {
            id:2,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240322/Bn4f/65fd778a16fd2c6e6a77e30f/-473Wx593H-461165333-cream-MODEL.jpg"
        },
        {
            id:3,
            Image:"https://assets.ajio.com/medias/sys_master/root/20220413/QLtl/6256e9c9aeb26921af1de4bf/-473Wx593H-469158864-blush-MODEL.jpg"
            
        },
        {
            id:4,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240730/s2zj/66a8ddcf6f60443f31d89427/-473Wx593H-469606516-navy-MODEL.jpg"
        },
        {
            id:5,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240423/BIXi/6627e6a105ac7d77bb2248c2/-473Wx593H-467248772-peach-MODEL.jpg"
        },
        {
            id:6,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240618/iZ9p/6670b7b71d763220fac778f1/-473Wx593H-700101466-mauve-MODEL.jpg"
        },
        {
            id:7,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231220/3BoA/658314f1ddf7791519dd8c0c/-473Wx593H-466902145-gold-MODEL.jpg"  
        },
        {
            id:8,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240730/Havm/66a8e2771d763220fa4cf6f9/-473Wx593H-469606530-gold-MODEL.jpg"
        },
        {
            id:9,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231221/u6Il/65834263afa4cf41f5dee4d4/-473Wx593H-466902152-beige-MODEL.jpg"
        },
        {
            id:10,
            Image:"https://assets.ajio.com/medias/sys_master/root/20231206/i8i2/65708df6afa4cf41f5b7d736/-473Wx593H-469569233-mustard-MODEL.jpg"
        },
        {
            id:11,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240730/tqGE/66a8e97a6f60443f31d8d6f3/-473Wx593H-450163742-silver-MODEL.jpg"
            
        },
        {
            id:12,
            Image:"https://assets.ajio.com/medias/sys_master/root/20240530/e6n6/6657868605ac7d77bb8debdb/-473Wx593H-466288673-black-MODEL.jpg"
        },
    ]
    const [currentCard,setCurrentCard]=useState([]);
    function showItems(item){
        if(item==="Sarees"){
            setCurrentCard(SareesCard);
        }
        if(item==="Frocks"){
            setCurrentCard(Kidcards);
        }
        if(item==="Kurtas"){
            setCurrentCard(KurtasCard);
        }
        if(item==="Jeans"){
            setCurrentCard(JeansCard);
        }
        if(item==="Lenses"){
            setCurrentCard(LensesCard);
        }
        if(item==="Belts"){
            setCurrentCard(BeltsCard);
        }
        if(item==="Chains"){
            setCurrentCard(ChainsCard);
        }
        if(item==="Hats")
            setCurrentCard(HatsCard);
        if(item==="Lipsticks"){
            setCurrentCard(LipstickCard);
        }
        if(item==="Fragrances"){
            setCurrentCard(FragrancesCard);
        }
        if(item==="Nail care"){
            setCurrentCard(NailCard);
        }
        if(item==="Tools"){
            setCurrentCard(ToolsCard);
        }
        if(item==="Flats"){
            setCurrentCard(FlatsCard);
        }
        if(item==="Heals"){
            setCurrentCard(Healscard);
        }
        if(item==="Shoes"){
            setCurrentCard(ShoesCard);
        }
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    }
    return(
        <>
        <div className="Header">
            <div className="Logo"><h1>Yaari Fashions</h1></div>
            <div className="SearchBar"></div>
            <div className="Login"><h1>SignIn/SignUp</h1></div>
            <div className="Cart"><FaShoppingCart /></div>
        </div>
        <div className="SlideBar">
            <Slider {...settings}>
                <div>
                    <img src="slide4.avif" height="310px" width="100%"></img>
                </div>
                <div>
                    <img src="slide3.avif" height="310px" width="100%"></img>
                </div>
                <div>
                    <img src="slidee2.avif" height="310px" width="100%"></img>
                </div>
                <div>
                    <img src="slidee1.avif" height="310px" width="100%"></img>
                </div>
            </Slider>
        </div>
        <div className="offer">
            <img src="offer.avif" height="70px" width="105%"></img>
        </div>
        <div className="Body">
            <div className="SelectBar">
            <label for="a"><h2>Yaari</h2></label>
                <select nama="a" id="a" onChange={handleChange} value={state}>
                    <option value="women"><h1>Women</h1></option>
                    <option value="frag"><h1>Accessories</h1></option>
                    <option value= "products"><h1>Beauty</h1></option>
                    <option value="foot"><h1>FootWear</h1></option>
                </select><br></br>
                <div className="Options">
                    {
                        getItem().map((item,index)=>
                            <div className="InOption" key={index}>
                                <button onClick={()=>{showItems(item)}} className="B1"><h2>{item}</h2></button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="Content">
            {
                currentCard.map((card) =>
                <div className="obj" key={card.id}>
                    <div className="Img" style={{backgroundImage: `url(${card.Image})`}}>
                        <div className="LikeButton"><FaRegHeart /></div>
                    </div>
                    <div className="Desc"></div>
                </div>   
            )
            }
            </div>
        </div>
        </>
    )
}
export default Page1;