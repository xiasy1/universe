const ellipseTexts = [
    "Cats save the world! Cats push all the unhappy things away!",
    "Fuck the world! I will forever love my cat!",
    "Catddle embraces everything and everything loves cats!",
    "Purring.. (the cat is sleeping)",
    "Loads of happiness from cats!",
    "I love my cat more than anything!",
    "My girlfriend is my cat!",
    "My cat is not a pet, he’s family.",
    "I don't care about anything, as long as my cat loves me",
    "I'm 99.9% sure that my soulmate is a cat.",
    "Cats save the world! Cats push all the unhappy things away!",
    "Fuck the world! I will forever love my cat!",
    "Catddle embraces everything and everything loves cats!",
    "Purring.. (the cat is sleeping)",
    "Loads of happiness from cats!",
    "I love my cat more than anything!",
    "My girlfriend is my cat!",
    "My cat is not a pet, he’s family.",
    "I don't care about anything, as long as my cat loves me",
    "I'm 99.9% sure that my soulmate is a cat.",
];
function shuffle(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let index = parseInt(Math.random() * (len - i));
        let temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
}
export default shuffle(ellipseTexts)