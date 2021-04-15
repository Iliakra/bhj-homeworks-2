let poll_title = document.getElementById('poll__title');
let poll_answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let text = JSON.parse(this.responseText);
        let titleText = text.data.title;
        let answers = text.data.answers;

        poll_title.innerHTML = titleText;

        for (let i=0; i<answers.length; i++) {
            let button = document.createElement('button');
            let id = text.id;
            button.classList.add('poll-aswer');
            button.innerHTML = answers[i];

            button.addEventListener('click', function() {
                const newRequest = new XMLHttpRequest();
                newRequest.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                newRequest.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                newRequest.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        let statData = JSON.parse(this.responseText);
                        let statDivContent = '';
                        let votesTotal = 0;
                        for (let i=0; i<statData.stat.length; i++) {
                            let votes = statData.stat[i].votes;
                            votesTotal += votes;
                        }
                        for (let i=0; i<statData.stat.length; i++) {
                            let value = Math.floor((statData.stat[i].votes/votesTotal)*100);
                            statDivContent += `<p>${statData.stat[i].answer}:${value}%</p>`;
                        };
                        poll_answers.innerHTML = statDivContent;
                    } 
                }
                newRequest.send(`vote=${id}&answer=${i}`);
                alert ('Спасибо, ваш голос засчитан!');
            })
            poll_answers.appendChild(button);
        }
    }
}
xhr.send();