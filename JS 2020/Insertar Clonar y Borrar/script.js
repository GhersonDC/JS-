const names = ['Barack','Bush','Clinton']

const presidents = document.getElementById('presidents')
const li = document.getElementById('li')


names.forEach((name)=>{
    // presidents.before(name)
    // presidents.prepend(name)
    // presidents.append(name)
    // presidents.after(name)
    li.cloneNode()
})
li.cloneNode()