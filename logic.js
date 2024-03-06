const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];

for (let i = 0; i < data.length; i += 6) {
    console.log("just I");
    for (let j = i; j < i + 6; j += 2) {
        console.log(data[j]);
    }
}
