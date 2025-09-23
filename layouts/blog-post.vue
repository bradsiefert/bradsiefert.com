<template>
  <div class="container skinny-contain">
    <div class="row">
      <div class="col-lg-12 blog-post">
        <div class="breadcrumb">
          <div class="breadcrumb-item">
            <NuxtLink title="Link back to Blog posts" to="/blog">
              ⬅️ Back to Blog
            </NuxtLink>
          </div>
        </div>

        <article>
          <slot />
        </article>

        <div class="divider mt-5"></div>
      </div>
    </div>
  </div>

  <!--The only difference between these single layout files is the breadcrumbs because I couldn't figure out how to create a single file and then dynamically link back to the content type I wanted to. I also couldn't figure out how to display content from the markdown file inside of this layout page outside of the slot.-->
</template>