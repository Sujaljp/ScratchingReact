import sum from "../utils/sum"

test("Sum function should calculate the sum of 2 numbers", ()=>{
    const result = sum(4,3)

    //Assertion
    expect(result).toBe(7)
})