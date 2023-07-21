console.log('hello')
const fs=require('fs');
fs.writeFileSync('hello.txt',' siva . \n sai'),
fs .appendFileSync('./hello.txt','\n\n\nadding extras')
// read
fs.readFileSync('./hello.txt',(err,res)=>{
    if(err) return err;
    else{
        const a = res.toString()
        console.log(a)
    }
})
// deleting
// fs.unlinkSync('./hello.txt')
// console.log('deleted')
