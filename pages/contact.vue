<template>
  <div>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <h1>Say Hello</h1>
          <p class="mb-5">Please reach out and I'll do my best to get back to you asap.</p>

          <div class="alert alert-warning" role="alert">
            This form is under construction. Please contact me on <a href="https://www.linkedin.com/in/bradsiefert/">LinkedIn</a> if you'd like to reach out.
          </div>

          <form
            data-netlify="true"
            name="pizzaOrder"
            method="post"
            action="/success"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="pizzaOrder" />
            <label>
              What order did the pizza give to the pineapple?
              <input name="order" type="text" onChange={handleChange} />
            </label>
            <input type="submit" />
          </form>

          <!--<form
            name="brad.si Contact Form"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >

            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div class="mb-4">
              <h3>
                <label for="name">Name</label>
              </h3>

              <input
                type="text"
                name="name"
                v-model="formData.name"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Your Name"
              />
            </div>

            <div class="mb-4">
              <h3>
                <label for="email">Email</label>
              </h3>
              <input
                type="email"
                name="email"
                v-model="formData.email"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="name@email.com"
              />
            </div>

            <div class="mb-4">
              <h3>
                <label for="message">Message</label>
              </h3>
              <textarea
                name="message"
                v-model="formData.message"
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
          </form>-->

        </div>
      </div>
    </div>
  </div>
</template>