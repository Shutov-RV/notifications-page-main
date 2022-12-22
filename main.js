const messagecards = document.querySelectorAll('.messagecard');
const checkpoint = document.querySelectorAll('.checkpoint');
const allread = document.querySelector('.allread');
const counter = document.querySelector('.counter');

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    counterRender()
});

allread.addEventListener('click', function () {
    messagecards.forEach(item => {
        checkpoint.forEach(checkpoint => {
            item.classList.remove('messagecard__active');
            checkpoint.classList.add('read');
        })
        count = 0;
        counter.textContent = count;
    })
})

messagecards.forEach(messagecard => {
    messagecard.addEventListener('click', function () {

        let message__text = `
        <div class="message__text">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
        I'm already having lots of fun and improving my game.
        </div>
        `;

        if (messagecard.classList.contains('messagecard__active')) {
            messagecard.classList.remove('messagecard__active');
            messagecard.children[1].children[2].classList.add('read')
            messagecard.insertAdjacentHTML('beforeend',message__text
            );
            count -= 1;
            counter.textContent = count;
        }
        else {
            const message = messagecard.querySelector('.message__text')

            if (message) {
                message.remove('.message__text');
            } else {
                messagecard.insertAdjacentHTML('beforeend',messega__text);
            }
        }
    })
})


function counterRender() {
    messagecards.forEach(elem => {
        if (elem.classList.contains('messagecard__active')) {
            count += 1;
        };
})
    counter.textContent = count;
}
