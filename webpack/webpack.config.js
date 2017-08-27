/**
 * 配置文件
 */
// module.exports = {             //多文件入口
//     entry:{
//         bundle:'./main.js',
//         bundle1:'./main1.js',
//     },
//     output:{
//         filename:'[name].js'
//     }
// }

    module.exports = {
        entry:'./main.js',
        output:{
            filename:'bundle.js'
        },
       
        devServer:{
            contentBase:'./',
            historyApiFallback:true,
            inline:true,
            port:'9999'
        }
    }