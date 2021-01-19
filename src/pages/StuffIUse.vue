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
          <a class="btn btn-outline-dark btn-lg w-100 mb-3" href="/stuff-i-use/photography-gear">
            Photography Gear &nbsp;📸
          </a>
        </div>
      </div>
      
      <hr class="mt-3 mb-6">
      <p>
        People often ask about the things that I use and why I use them. I deeply consider the things I bring into my life. I find myself really diving deep into finding the right item for me, considering all of the tradeoffs and thinking about the myriad of ways the thing would impact my life. I do this whether I'm researching buying a new pen or a new car. The process is mostly the same. I'm posting these here as a record of my favorite products and my thoughts about them.
      </p>  
      
      <p>
        I linked to the company's product page whenever possible. None of the links are affiliate links. If you plan to purchase something from the list, I'd encourage you to buy it from a local vendor or smaller online retailer instead of a conglomerate monopoly like Amazon or Walmart.
      </p>
      
      <p>
        I'll do my best to add to and update this list over time. I'm planning on adding sections about my favorite apps, baby and toddler gear, and my web development stack. Thanks for checking this out. I hope you find something interesting. 
      </p>
    </article>
  </StuffIUse>
</template>

<script>
import StuffIUse from '~/layouts/StuffIUse.vue'

export default {
  components: {
    StuffIUse
  },
  metaInfo() {
    return {
      title: 'Stuff I Use'
    };
  }
};
</script>
