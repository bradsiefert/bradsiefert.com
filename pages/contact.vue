<template>
  <div>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <h1>Say Hello</h1>
          <p class="mb-5">Please reach out and I'll do my best to get back to you asap.</p>

          <form
            name="bradsiefert.com Contact Form"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="bradsiefert.com Contact Form" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div class="mb-4">
              <h3><label for="name">Name</label></h3>
              <input
                type="text"
                name="name"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Your Name"
              />
            </div>

            <div class="mb-4">
              <h3><label for="email">Email</label></h3>
              <input
                type="email"
                name="email"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="name@email.com"
              />
            </div>

            <div class="mb-4">
              <h3><label for="message">Message</label></h3>
              <textarea
                name="message"
                type="text"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder=""
              />
            </div>

            <div class="mb-4">
              <button type="submit" class="btn btn-outline-dark btn-lg">Send Message&nbsp; 📤</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>