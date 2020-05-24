
// const proxy = require('http-proxy-middleware');
const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(createProxyMiddleware('/api',{
        target:'http://localhost:4000',
        pathRewrite(path){
            return path.replace('/api',"/").replace('.action','.json')
        }
    }))
}

// const {createProxyMiddleware } = require('http-proxy-middleware');
 
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware (
//           '/api',
//           {
//             target: 'https://www.bilibili.com',
//             changeOrigin: true
//           }
//       )
//   );
// };