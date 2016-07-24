var config = {
    // taọ trang chạy chính  cho app
   entry: './src/index.js', // run on main app 
	
    //tạo đường dẩn cho app hiện tại
   output: {
      path:__dirname,
      filename: 'app/js/main.js',// con trỏ đến vị trí đường dẩn hien tai
   },
	
   devServer: {
      inline: true,
      port: 8000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;