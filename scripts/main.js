const input = document.getElementById('input')
const answer = document.getElementById('answer')

const number = document.getElementById('number')
const string = document.getElementById('string')
const logic = document.getElementById('logic')

let status;

function changeStatus(info) {
    if(info === 'string') {
        status = info
        number.checked = false
    }else{
        status = info
        string.checked = false
    }

    switch (info) {
        case 'string':
            status = info
            number.checked = false
            logic.checked = false
            break;
        case 'number':
            status = info
            string.checked = false
            logic.checked = false
            break;
        case 'logic':
            status = info
            string.checked = false
            number.checked = false
    }
    console.log(status)
}

function getTrueOrFalse() {
    if(!status) {
        changeStatus('string')
        string.checked = true
    }
    let text = input.value
    input.value = ''
    if(status === 'string') {
        if(text) {
            answer.innerHTML = '<h1 id="answer">This text is <span id="trueANS">True</span></h1>'
            document.getElementById('trueANS').style.color = '#00da03'
        }else{
            answer.innerHTML = '<h1 id="answer">This text is <span id="falseANS">False</span></h1>'
            document.getElementById('falseANS').style.color = '#ff0000'
        }
    }else if(status === 'number'){
        text = Number(text)
        if(text) {
            answer.innerHTML = '<h1 id="answer">This text is <span id="trueANS">True</span></h1>'
            document.getElementById('trueANS').style.color = '#00da03'
        }else{
            answer.innerHTML = '<h1 id="answer">This text is <span id="falseANS">False</span></h1>'
            document.getElementById('falseANS').style.color = '#ff0000'
        }
    }else{
        let logic_text;
        try {
            eval('logic_text = ' + text)
        } catch (e) {
            answer.innerHTML = '<h1 id="answer">This text is <span id="falseANS">False</span></h1>'
            document.getElementById('falseANS').style.color = '#ff0000'
        }
        console.log(logic_text)
        if(logic_text) {
            answer.innerHTML = '<h1 id="answer">This text is <span id="trueANS">True</span></h1>'
            document.getElementById('trueANS').style.color = '#00da03'
        }else{
            answer.innerHTML = '<h1 id="answer">This text is <span id="falseANS">False</span></h1>'
            document.getElementById('falseANS').style.color = '#ff0000'
        }
    }
}