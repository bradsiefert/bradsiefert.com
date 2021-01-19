<template>
  <StuffIUse>          
    <article class="lead">
      <div class="row g-2">
        <div class="col-xl">
          <a class="btn btn-primary btn-lg w-100 mb-3 disabled" href="/stuff-i-use/everyday-carry">
            Everyday Carry &nbsp;👖
          </a>
        </div>
        <div class="col-xl">
          <a class="btn btn-outline-dark btn-lg w-100 mb-3" href="/stuff-i-use/on-my-desk">
            On My Desk &nbsp;💻
          </a>
        </div>
        <div class="col-xl">
          <a class="btn btn-outline-dark btn-lg w-100 mb-3" href="/stuff-i-use/photography-gear">
            Photography Gear &nbsp;📸
          </a>
        </div>
      </div>
      
      <hr class="mt-3 mb-5">
      
      <h2 class="h1">Everyday Carry</h2>
      <p>
        These are the items that are closest to me most of the time. I do my best to thoughtfully choose what I daily carry so there's nothing superfluous. It helps me feel like I've got control of the things I use and not the other way around.
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
    filter: { subcategory: { in: "Everyday Carry" } }
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
      title: 'Stuff I Use / Everyday Carry'
    };
  }
};
</script>