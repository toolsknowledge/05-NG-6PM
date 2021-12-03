describe("sample test cases",()=>{
    let var_one = "";
    let var_two = "";

    beforeEach(()=>{
        var_one = "hello";
        var_two = "hello123";
    })
    
    it("first unit test case",()=>{
        expect("hello").toBe(var_one);
    })

    it("one more unit test case",()=>{
        expect("hello").not.toBe(var_two);
    });

    afterEach(()=>{
        var_one = "";
        var_two = "";
    });

});