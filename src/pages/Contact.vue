<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <h1>Say Hello</h1>
          <p class="mb-5">Please reach out and I'll do my best to get back to you asap.</p>

          <form
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
                value="" 
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
                value="" 
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
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="" 
              />
              </textarea>
            </div>

            <div class="mb-4">
              <button type="submit" class="btn btn-outline-dark">Send Message&nbsp; 📤</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Contact'
    };
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
};
</script>
