<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <div class="breadcrumb">
            <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
            <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
          </div>
          
          <h1 class="mb-16">Say Hello</h1>
          <form 
            name="brad.si Contact Form"
            method="post"
            action="/efert/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div class="mb-24">
              <h5>
                <label for="your-name">Name</label>
              </h5>
              <input 
                type="text" 
                name="your-name" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="Your Name" 
              />
            </div>

            <div class="mb-24">
              <h5>
                <label for="your-email">Email</label>
              </h5>
              <input 
                type="email" 
                name="your-email" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="name@email.com" 
              />
            </div>

            <div class="mb-24">
              <h5>
                <label for="your-message">Message</label>
              </h5>
              <textarea 
                type="text" 
                name="your-message" 
                value="" 
                class="form-control" 
                aria-required="true" 
                aria-invalid="false" 
                placeholder="" 
              />
              </textarea>
            </div>

            <div class="mb-24">
              <button type="submit" class="btn btn-primary">Send Message ☑️</button>
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
  }
};
</script>
