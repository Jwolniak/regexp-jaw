function testExp() {
    statement = document.getElementById("statement");
    regexp = document.getElementById("regexp");
    tf = regexp.test(statement);
    if (tf == true){
        print("The statement and regular expression are true.")
    }else{
        print("The regular expression does not match the statement.")
    }
}