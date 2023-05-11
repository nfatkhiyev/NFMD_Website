<style>
    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .form-line-container {
        width: 75%;
        margin: 1em;
        display: flex;
        flex-direction: column;
    }
    .form-checkbox-container {
        width: 75%;
        margin: 1em;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .form-checkbox {
        height: 20px;
        aspect-ratio: 1/1;
    }
    .form-label {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 0.7em;
    }
    .form-checkbox-container .form-label {
        margin: 0.5em;
    }
    .form-field-text {
        width: 100%;
        padding: 1em;
        box-shadow: 0 0 3px 3px lightgrey;
        border-radius: 40px;
        border: none;
        font-family: 'Lato';
    }
    .form-field-textarea {
        width: 100%;
        min-height: 5em;
        padding: 1em;
        box-shadow: 0 0 3px 3px lightgrey;
        border-radius: 20px;
        border: none;
        font-family: 'Lato';
        resize: none;
    }
    #contactSubmitButton {
        width: 9em;
        padding: 0.5em;
        border-radius: 20px;
        box-shadow: 0 0 3px 3px lightgrey;
        font-family: 'Lato';
        background-color: #FF7F50;
        color: white;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        border: 1px solid #FF7F50;
    }
    #contactSubmitButton:hover {
        background-color: #F8F8F8;
        color: black;
        border: 1px solid black;
    }
    @media screen and (max-width: 1140px) {
        #contactSubmitButton {
            margin-left: auto;
            margin-right: auto;
        }
        .form-line-container {
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
<form method="POST" action="?/submitContact">
    <div class="form-line-container">
        <label class="form-label" for="contactFormName">Name*:</label>
        <input class="form-field-text" name="contactFormName" type="text" placeholder="Your Name" required>
    </div>
    <div class="form-line-container">
        <label class="form-label" for="contactFormEmail">E-mail*:</label>
        <input class="form-field-text" name="contactFormEmail" type="text" placeholder="Email address" required>
    </div>
    <div class="form-line-container">
        <label class="form-label" for="contactFormMessage">Message:</label>
        <textarea class="form-field-textarea" placeholder="Enter your message here" name="contactFormMessage"></textarea>
    </div>
    <div class="form-checkbox-container">
        <input class="form-checkbox" type="checkbox" name="newsletter" checked>
        <label class="form-label" for="newsletter">Subscribe to the newsletter?</label>
    </div>
    <div class="form-line-container">
        <input id="contactSubmitButton" type="submit" value="Send Message">
    </div>
</form>
