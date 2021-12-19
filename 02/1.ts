import fs from "https://deno.land/std/node/fs.ts"

let instructions

fs.readFile("input.txt", (_err, data) => {
  instructions = data.toString().split("\n")
})
