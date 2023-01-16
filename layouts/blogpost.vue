<template>
  <div class="container-xl skinny-contain">
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
</template>