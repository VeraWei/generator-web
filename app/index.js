var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)
        this.log('welcome to the web generator!');
        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    start() {
        this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter a name for the new component (i.e.: myNewComponent): '
        }, {
            type: 'input',
            name: 'copyF',
            message: 'Enter which version do you want (i.e.: basic (default)|react): '
        }]).then((answers) => {
            this.destinationRoot(answers.name);
            this.log(answers.copyF)
            switch (answers.copyF) {
                case 'react':
                    this.fs.copyTpl(
                        this.templatePath('react/public/*'),
                        this.destinationPath('public')
                    );

                    this.fs.copyTpl(
                        this.templatePath('react/src/*'),
                        this.destinationPath('src')
                    );

                    this.fs.copyTpl(
                        this.templatePath('react/package.json'),
                        this.destinationPath('package.json')
                    );

                    this.fs.copyTpl(
                        this.templatePath('react/README.md'),
                        this.destinationPath('README.md')
                    );

                    this.fs.copyTpl(
                        this.templatePath('react/.gitignore'),
                        this.destinationPath('.gitignore')
                    );
                    break;
                case 'basic':
                    this.fs.copyTpl(
                        this.templatePath('basic/index.html'),
                        this.destinationPath('index.html')
                    );

                    this.fs.copyTpl(
                        this.templatePath('basic/style/style.css'),
                        this.destinationPath('style/style.css')
                    );

                    this.fs.copyTpl(
                        this.templatePath('basic/js/index.js'),
                        this.destinationPath('js/index.js')
                    )
                    break;
                default:
                    this.fs.copyTpl(
                        this.templatePath('basic/index.html'),
                        this.destinationPath('index.html')
                    );

                    this.fs.copyTpl(
                        this.templatePath('basic/style/style.css'),
                        this.destinationPath('style/style.css')
                    );

                    this.fs.copyTpl(
                        this.templatePath('basic/js/index.js'),
                        this.destinationPath('js/index.js')
                    )
                    break;
            }
        })
    }
}