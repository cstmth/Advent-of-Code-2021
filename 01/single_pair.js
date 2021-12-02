import fs from "https://deno.land/std/node/fs.ts"

let increased = 0
let lastValue = 0

fs.readFile("input.txt", (err, data) => {
  data
    .toString()
    .split("\n")
    .forEach((line) => {
      if (line > lastValue) {
        console.log(line.toString() + ">" + lastValue)
        increased++
      }
      lastValue = line
    })
  console.log(increased)
})
