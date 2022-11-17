let verify = require("./verify-password")

test("Verify Password", function() {
    let password = "Password123";
    let expected = "Password Accepted";

    let output = verify(password);

    expect(output).toEqual(expected);
})