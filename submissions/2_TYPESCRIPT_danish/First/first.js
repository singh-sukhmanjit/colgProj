var supergirl = {
    realname: "Kara Danvers",
    supername: "Supergirl"
};
document.write(supergirl.realname + " is " + supergirl.supername);
//}
(function dosomething() {
    for (var i = 0; i <= 10; i++) {
        document.write(i);
    }
})();
// function greetHuman(name) {
//     name = name || 'human';
//     return 'Hello ' + name + ', we come in peace';
// }
// greetHuman();
// greetHuman('Srijan');
//REVERSING A NUMBER*/
function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(10000));
//Pallindrome
// Write a JavaScript function that checks whether a passed string is palindrome or not?
function check_Palindrome(str_entry) {
    // Change the string into lower case and remove  all non-alphanumeric characters
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    // Check whether the string is empty or not
    if (cstr === "") {
        alert("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    }
    else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cstr.length === 1) {
            alert("Entry is a palindrome.");
            return true;
        }
        else {
            // If the length of the string is odd ignore middle character
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            alert("Entry is not a palindrome.");
            return false;
        }
    }
    alert("The entry is a palindrome.");
    return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
check_Palindrome('');
