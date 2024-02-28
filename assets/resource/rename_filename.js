const fs = require('fs')

const main = () => {
  const files = fs.readdirSync('./')
    .filter(name => name !== 'rename_filename.js')
    .map(name => name.replace('.json', ''))
  console.log(files)
}

main()