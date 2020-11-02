// function generateHashTagCapitalstringWithHashTag(str) {
//     // 1.是否为空  length == 0, null, "",!
//     // 2.是否超过140字 .length
//     // 3.以#开头 #+
//     // 4.每个单词都大写
//     // if(str.length<140 && str.length!=0)
//     return  str.length>140 || str ==''?false:'#' + str
//         .split(' ')
//         //es6数组的新方法，遍历数组的每一项，并用一个函数处理，之后返回新的数组
//         .map(function(word){
//             // console.log(word);
//             // js string内置的方法 hello->Hello
//           return word.charAt(0).toUpperCase() + word.slice(1)
            
//             // return word.toUpperCase()
//         })
//         .join(' ')
function generateCapitalstringWithHashTag(str){
    return  str.length > 140 || str ==''?false:'#' + str.split('').map(capitalize)
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() +str.slice(1);
}
    
    
}
generateHashTagCapitalstringWithHashTag('hello world')