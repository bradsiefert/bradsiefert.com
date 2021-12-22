<template>
  <StuffIUse>
    <article class="lead">
      <div class="row g-2">
        <div class="col-xl">
          <a class="btn btn-outline-dark btn-lg w-100 mb-3" href="/stuff-i-use/everyday-carry">
            Everyday Carry &nbsp;👖
          </a>
        </div>
        <div class="col-xl">
          <a class="btn btn-outline-dark btn-lg w-100 mb-3" href="/stuff-i-use/on-my-desk">
            On My Desk &nbsp;💻
          </a>
        </div>
        <div class="col-xl">
          <a class="btn btn-primary btn-lg w-100 mb-3 disabled" href="/stuff-i-use/photography-gear">
            Photography Gear &nbsp;📸
          </a>
        </div>
      </div>
      
      <hr class="mt-3 mb-5">
      
      <h2 class="h1">Photography Gear</h2>
      <p>
        I've been a photographer since 2007. For years I've read and researched constantly about photography cameras, lenses, and accessories trying to figure out what is the right gear  for me. It's only this past couple of years where I've honed in on the tools I like best.
      </p>

      <p>
        One thing that always frustrates me when photographers talk about gear is when they'll say something like "the gear doesn't matter." This is wrong, privileged, and silly. I've never once heard someone say this who doesn't already have multiple thousands of dollars invested in gear. Better gear doesn't necessarily make you more creative, but there are all sorts of shots you simply cannot make without certain gear. Get the right gear for you. Whatever works best for your budget what you want to shoot. The rest is just noise.
      </p>
      
      <div class="row" v-for="edge in $page.gear.edges" :key="edge.node.id">
        <div class="col">
          <div class="box gear">
            <div class="row g-4 d-flex">
              <div class="col-md-auto text-center">
                <g-link :to="edge.node.link" :title="`Link to ${edge.node.name}`">
                  <img :src="edge.node.thumbnailUrl" width="128" height="128" class="stuff-img mb-md-3" :alt="`${edge.node.name}`">
                </g-link>
              </div>
              <div class="col align-self-center">
                <h3 class="font-size-800 fst-normal mb-2">{{ edge.node.name }}</h3>
                <ul class="list-inline text-uppercase font-monospace font-size-100 mb-2">
                  <li class="list-inline-item me-5"><strong>Category:</strong> {{ edge.node.subcategory }}</li>
                  <li class="list-inline-item"><strong>Rating:</strong> {{ edge.node.rating }}/5 Stars</li>
                </ul>
                <g-link :to="edge.node.link" class="btn btn-outline-dark btn-xs mt-1 mb-3">&nbsp;More Info &nbsp;➡️</g-link>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="font-size-300">
                  {{ edge.node.notes }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </StuffIUse>
</template>

<page-query>
query MyGear {
  gear: allGear (
    filter: { subcategory: { in: "Photography" }
      retired: { exists: false } 
    }
    sortBy: "sortingOrderId" order: ASC
  ) {
    edges {
      node {
        id
        name
        link
        subcategory
        notes
        rating
        thumbnailUrl
        sortingOrderId
        categoryFromBrands
        retired
      }
    }
  }
}
</page-query>

<script>
import StuffIUse from '~/layouts/StuffIUse.vue'

export default {
  components: {
    StuffIUse
  },
  metaInfo() {
    return {
      title: 'Stuff I Use / Photography Gear'
    };
  }
};
</script>
