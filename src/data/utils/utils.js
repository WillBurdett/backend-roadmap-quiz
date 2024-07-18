export default function createEmptyArrayOfGivenLength(length){
    return Array.apply(null, Array(length)).map(function () {
        return "";
      })
}