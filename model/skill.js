var fake = [
    {skill: "Javascript"},
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "Python"}
]

function getAll(){
    return fake
}

function create(item) {
    return fake.push({skill: item})
}

function deleteOne(item){
    const idx = fake.findIndex((f) => f.skill===item);
    fake.splice(idx, 1);
}

module.exports = {
    getAll,
    create,
    deleteOne
}