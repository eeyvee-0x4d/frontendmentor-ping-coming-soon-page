window.onload = (e) => {
    document.querySelector(".email-form").reset()
}

const validateEmail = () => {
    let errorMessage = document.createElement("span")
    let errorStyle = "color: hsl(354, 100%, 66%); font-size: 0.750em; font-style: italic; text-align: center;"

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let input = document.querySelector(".email-input")

    if(input.value.match(emailRegex) === null) {
        if(document.querySelector("#email-error") === null) {
            errorMessage.id = "email-error"
            errorMessage.style = errorStyle
            errorMessage.innerHTML = "Please provide a valid email address"
            input.parentNode.insertBefore(errorMessage, input.nextSibling)

            input.style = "border-color: hsl(354, 100%, 66%);"
        }
    }
    else {
        document.querySelector("#email-error").remove()
        input.style = "border-color: hsl(223, 100%, 88%)"
    }
}