let map = new Map();
console.log(`Type of map: ${typeof(map)}`);
// key : roll number & value: student name....
map.set(11, "Ram");
map.set(22, "Sham");
map.set(33, "Siya");
map.set(44, "Jenny");
map.set(33, "Ash");
console.log(`Size of map : ${map.size}`);
console.log(map);
console.table(map);
///Retrive the valu using key
const valuOfKey22 = map.get(22);
console.log(`Valu of key 22 : ${valuOfKey22}`);

//delet entry
map.delete(22);
console.table(map);
///perticulier key is in map or not
const isAvailable = map.has(44);
console.log(`Is 44 key availble : ${isAvailable}`);
const isAvailable1 = map.has(54);
console.log(`Is 54 key availble : ${isAvailable1}`);

const keys = map.keys();
console.log(keys);
const values = map.values();
console.log(values);

/////map travelling.....
console.log(`Map travelling`);
const keysOfMap = map.keys();
for (const key of keysOfMap) {
    const value = map.get(key);
    console.log(`${key} ${value}`);
}

