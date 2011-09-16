var config=[
    ["large polaroid img1"],
    ["polaroid img2"],
    ["small polaroid img3"],
    ["medium polaroid img4"],
    ["polaroid img5"],
    ["polaroid img6"],
    ["polaroid img7"],
    ["small polaroid img8"],
    ["medium polaroid img9"],
    ["polaroid img10"],
    ["small polaroid img11"],
    ["small polaroid img12"],
    ["small polaroid img13"],
    ["small polaroid img14"],
    ["polaroid img15"]
]
var cake =[
    { cid:0, src:"images/cake_1.jpg" , title:"This breathtaking volcanic lake is at Wai-O-Tapu Thermal Wonderland" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)" },
    { cid:1, src:"images/cake_2.jpg" , title:"This lovely waterfall was at Rotorua in Rainbow Springs", cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)" },
    { cid:2, src:"images/cake_3.jpg" , title:"Ferntastic" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:3, src:"images/cake_4.jpg" , title:"At Kaikoura we went whale watching!" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:4, src:"images/cake_5.jpg" , title:"Found this little cutie on a walk in New Zealand!" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:5, src:"images/cake_6.jpg" , title:"An amazing bubbling volcanic spring, a bit muddy" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:6, src:"images/cake_7.jpg" , title:"Simon in a giant Kiwi, pretending to be a Kiwi (the bird)" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:7, src:"images/cake_8.jpg" , title:"Albatross in Dunedin" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:8, src:"images/cake_9.jpg" , title:"White water rafting in Queenstown" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:9, src:"images/cake_10.jpg" , title:"White Island" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:10, src:"images/cake_11.jpg" , title:"Sulphurous" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:11, src:"images/cake_12.jpg" , title:"Sea lions!" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:12, src:"images/cake_13.jpg" , title:"Horse riding" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:13, src:"images/cake_14.jpg" , title:"Stewart Island" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"},
    { cid:14, src:"images/cake_15.jpg" , title:"Us in a blue cave on the Franz Josef glacier" , cook:"【浓情布朗尼】(分量：视模具大小而定) 配料：黑巧克力70克，黄油85克，鸡蛋50克，细砂糖70克，高筋面粉35克，核桃碎35克，盐0.5克，香草精数滴 烘焙：烤箱中层，上下火，190度，25-30分钟(温度与时间供参考，请根据模具大小及烤箱实际情况调整)"}
]
