
const fs = require('node:fs');

const component = process.argv[2];

const exec = require('child_process').exec;


fs.readFile('./src/components/template.html', 'utf8', (err, source) => {
    if (err) return console.log(err);
    const content = source.replace(/COMPONENT_NAME/g, component);
    if (fs.existsSync(`./src/components/${component}.html`)) {
        return console.error(`${component}.html already exists use another name`)
    }
    fs.writeFile(`./src/components/${component}.html`, content, (err) => {
        if (err) return console.error(`there is a problem is creating ${component}.html `);
        else {
            fs.writeFile(`./src/assets/sass/components/${component}.scss`, "", (err) => {
                if (err) return console.error(`there is a problem is creating ${component}.scss`);
                else {
                    console.log(`${component} created successfully`);
                }
                exec(`code -r .//src/components/${component}.html`, (err) => {
                    if (err) return console.error(err)
                })
                exec(`code -r ./src/assets/sass/components/${component}.scss`, (err) => {
                    if (err) return console.error(err)
                })
            })
        }
    })
})