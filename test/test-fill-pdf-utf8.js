const index = require('../index');

index.generatePdf({fields:{name:'สมจิตร',age:24}},'./test/test.pdf','Kanit',{fontSize: 8.0},'./test/result.pdf',function (error, stdout, stderr) {
    if(error){
        throw error;
    }
    console.log(stdout);
});