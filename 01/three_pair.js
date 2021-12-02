const fs = require("fs")

let data = []
let increased = 0

fs.readFile("input.txt", (ignored, fileData) => {
  data = fileData
    .toString()
    .split("\n")
    .map((cur) => {
      return parseInt(cur.replace(/\\r/g), "") // gets rid of '\r'
    })
  resume()
})

function resume() {
  console.log(data)

  for (let i = 0; true; i++) {
    if (!data[i + 3]) break

    let currentTotal = data[i] + data[i + 1] + data[i + 2] // 0, 1, 2
    let nextTotal = data[i + 1] + data[i + 2] + data[i + 3] // 1, 2, 3

    if (currentTotal < nextTotal) {
      console.log("Increase")
      console.log("Old: " + currentTotal)
      console.log("New: " + nextTotal)
      increased++
    }
  }

  console.log(increased)
}
