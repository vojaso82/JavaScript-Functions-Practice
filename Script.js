/*Create a function which will compare two words and print out which one is longer */

function wordsCompare(word1, word2){
    if(word1.length > word2.length){
      console.log(`${word1} is longer then ${word2}`)
    } else if (word1.length < word2.length){
      console.log(`${word1} is shorter then ${word2}`)
    } else {
      console.log(`Both words has the same length`)
    }
  }
  wordsCompare('Aida', 'Vojislav');
  
  /*Create a function which will find if the word exists in an Array */
  
  let favoriteFood = ['Apple', 'Banana', 'Avocado', 'Pear'];
  let fruit = 'Pear';
  
  function wordExist(word, array){
    if(array.includes(word)){
      console.log('This word exists')
    } else {
      console.log('It does not exist')
    }
  }
  
  
  //wordExist('Vojislav', ['Aida', 'Vojislav', 'Slobodan']);
  
  wordExist(fruit, favoriteFood)
  