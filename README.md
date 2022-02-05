# PDF Fill Thai
## Fill a PDF Form with Thai language supported.

## Support Font List
- Kanit
- Prompt
- Sarabun
- IBM Plex Sans Thai Looped

## Features
- Fill data in your PDF Template
- Generate XFDF file
- Support font size customization
- Supported many Thai fonts

## Requirement
- Node.js V.10+
- Java Development Kit

## Usage
Install the dependencies and devDependencies and start the server.

```sh
var fill_pdf = require('fill-pdf-thai');
 
fill_pdf.generatePdf({fields:{name:'สมจิตร',age:19}},'test.pdf','Kanit',{fontSize: 8.0},'result.pdf',function (error, stdout, stderr) {
    if(error){
        throw error;
    }
    console.log(stdout);
})
 
```
## License

MIT

**Free Software, Hell Yeah!**
