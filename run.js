const { exec } = require('child_process')
exec('hexo server -p 4000',(error, stdout, stderr) => {     
    //指定你的端口
  if(error){
    console.log(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})

