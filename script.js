const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button')

downloadBtn.addEventListener('click', e => {
    e.preventDefault()
    downloadBtn.innerHTML = 'Please wait your File is downloading...'
    fetchFile(fileInput.value)
})
const fetchFile = (url) => {
    fetch(url).then(res => res.blob()).then(data => {
        let tempUrl = URL.createObjectURL(data)
        let aTag = document.createElement('a')
        aTag.href = tempUrl
        // let typeFile = data.type
        // let actual = typeFile.replace(/^.*[\\\/]/, '')
        aTag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerHTML = ' File downloaded'
        setTimeout( () => {
            downloadBtn.innerHTML = 'Download File'
        }, 3000)
        // console.log(data)
        // console.log(typeFile)
        // console.log(actual)
        // console.log(tempUrl)
     }).catch(err => {
        downloadBtn.classList.add('error')
        downloadBtn.innerHTML = err.message
        setTimeout( () => {
            downloadBtn.classList.remove('error')
            downloadBtn.innerHTML = 'Try Again'
        }, 3000)
       
     })
}
// function fetchFile(url) {
//     fetch(url).then(res => res.blob()).then(data => {
//         console.log(data);
//      })
// }