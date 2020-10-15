<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-lg-12 portfolio-post">

          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <g-link title="Link back to home" to="/">Home</g-link>
            </div>
            <div class="breadcrumb-item">
              <g-link title="Link back to Blog posts" to="/portfolio">
                Portfolio
              </g-link>
            </div>
            <div class="breadcrumb-item">
              Case Study: Highbeam Design System
            </div>
          </div>

          <article>
            <h5 class="mb-16">Design Portfolio Case Study:</h5>
            <h1>Highbeam Design System</h1>
            <p>
              Design systems have become a powerful way that designers create consistent and well managed web 
              and mobile apps. I've been toying around with making my own design system for a while and I 
              wanted to show a bit of a preview to what I've been working on. This design system is for the 
              internal products that my agency, Earlybird, creates for our clients. 
            </p>

            <p>
              The design system is based on Bootstrap 5, but with lots of personal tweaks and additions. 
              Nearly every UI element has been changed one by one to better fit the way I think looks best. 
              I find myself making many of these changes whenever I create a new site so hopefully this will 
              be a better starting place for my firm and others.
            </p>

            <g-link class="btn btn-primary btn-lg mb-32" to="https://highbeamdesignsystem.netlify.app">
              Live Site &nbsp;➡️
            </g-link>

            <g-image 
              src="@/assets/images/portfolio-highbeam-design-system-preview-1.jpg"
              class="img-fluid rounded-lg" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />
            
            <g-image 
              src="@/assets/images/portfolio-highbeam-design-system-preview-2.jpg"
              class="img-fluid rounded-lg" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />
            
            <p class="mt-16">
              One of the major changes is with typography. I'm using the typeface Inter for the body and 
              headings and Fira Code for code, forms, tables, and buttons. I think they compliment each other 
              very well. Using a monospaced font for these elements feels fresh and appropriate for such data 
              heavy applications.
            </p>
            
            <p class="mb-32">
              Spacing and color are some of the areas I focused on the most. I updated the colors to be much 
              more vibrant and bright, I still tried to keep proper contrast for UI elements. I also added two 
              theme colors, "highlight", which is based off the yellow color and "tip" which is   the teal 
              color. Highlight in particular has been used quite a bit throughout the system. I've never been 
              happy with the few spacing options Bootstrap offers so I've tweaked them to make a bit more 
              sense to me. There are now 12 different spacers and it helps to more easily dial in proper 
              spacing for elements. 
            </p>

            <g-image 
              src="@/assets/images/highbeam-colors.jpg"
              class="img-fluid rounded-lg" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />

            <g-image 
              src="@/assets/images/highbeam-buttons.jpg"
              class="img-fluid rounded-lg" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />
            
            <g-image 
              src="@/assets/images/highbeam-cards.jpg"
              class="img-fluid rounded-lg" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />

            <g-image 
              src="@/assets/images/highbeam-toasts.jpg"
              class="img-fluid rounded-lg mb-32" 
              style="border: 1px solid #eeeeee;"
              quality="90"
            />
            
            <p>
              There are updates to the grid system, forms, and all sorts of little changes I find myself 
              making whenever I use Bootstrap for a project. The system has code snippets to quickly copy and 
              reference to quickly build screens for our web apps. We've found it's incredibly helpful for 
              keeping our products consistent and more easily updatable.
            </p>

          </article>

          <div class="divider mt-32"></div>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Highbeam Design System'
    };
  }
};
</script>