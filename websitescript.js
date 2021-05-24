
const artist1Button = document.querySelector('#artist1Button');
const artist2Button = document.querySelector('#artist2Button');
const a1ShowVote = document.querySelector('#a1ShowVote')
const a2ShowVote = document.querySelector('#a2ShowVote')
const a3ShowVote = document.querySelector('#a3ShowVote')
const a4ShowVote = document.querySelector('#a4ShowVote')
const a5ShowVote = document.querySelector('#a5ShowVote')

let a1Votes = 0;
let a2Votes = 0;
let a3Votes = 0;
let a4Votes = 0;
let a5Votes = 0;

let count = 0;
let votedA1 = false;
let votedA2 = false;
let votedA3 = false;
let votedA4 = false;
let votedA5 = false;

// if (count > 1) {
// if (!votedA1 && !votedA2 && !votedA3 & !votedA4 && !votedA5) {
artist1Button.addEventListener('click', function () {
    a1Votes += 1;
    a1ShowVote.textContent = a1Votes;
    votedA1 = true;
    // console.log(votedA1);
    count += 1;
});
// console.log(votedA1);
// return votedA1;
// }
// return votedA1; 
//     else {
//         alert("you alread voted");
//     }
//     // }
// }

if (!votedA1 && !votedA2 && !votedA3 & !votedA4 && !votedA5) {
    artist2Button.addEventListener('click', function () {
        a2Votes += 1;
        a2ShowVote.textContent = a2Votes;
        votedA2 = true;
    });
}
// else {
// alert("you alread voted");
// }

artist3Button.addEventListener('click', function () {
    a3Votes += 1;
    a3ShowVote.textContent = a3Votes;
    votedA3 = true;
});
artist4Button.addEventListener('click', function () {
    a4Votes += 1;
    a4ShowVote.textContent = a4Votes;
    votedA4 = true;
});
artist5Button.addEventListener('click', function () {
    a5Votes += 1;
    a5ShowVote.textContent = a5Votes;
    votedA5 = true;
});

