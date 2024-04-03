<template>
  <div class="container wide-contain">
    <div class="row">

      <div class="col-lg-12 gx-5">
        <h1>Bio</h1>
        <p class="small">I promise this won’t be in the third person. 😉</p>
      </div>

      <div class="col-lg-8 gx-5">
        <article class="lead">
          <p>
            Hi, I'm Brad. I'm a UI/UX designer experienced in designing web apps, mobile apps, and a bit of front-end web development. I live in the
            <a
              target="_blank"
              title="Link to East Garfield Park's Wikipedia"
              href="https://en.wikipedia.org/wiki/East_Garfield_Park,_Chicago"
              rel="noopener"
            >East Garfield Park</a> neighborhood of Chicago with my daughter Lydia.
          </p>

          <p>
            I value elegance, clarity, and efficiency in design. I always strive to consider the user's needs and to elegantly serve them. I love working with people who are serious about creating beautiful and meaningful work.
          </p>

          <p>
            Since 2018, I've been on the board of a homelessness non-profit,
            <a
              target="_blank"
              title="Link to Open Arms Ministry"
              href="https://openarmsministry.org"
              rel="noopener"
            >Open Arms</a>. My work focuses on improving internal systems, being our secretary, and IT. It's been an honor to serve my community with my technology skills.
          </p>

          <p class="mb-5">
            Each year I take around 25,000 photos. I want to learn two languages in the coming years: JavaScript and Spanish. I drink <em>a little bit</em> too much Diet Coke—but I’m working on it.
          </p>

          <h2 class="h3">I'm Currently Into...</h2>
          <p class="mb-5">
            <small>
              <a
                target="_blank"
                rel="noopener"
                title="Link to Design Systems Repo"
                href="https://designsystemsrepo.com"
              >Design Systems
              </a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to the Jamstack"
                href="https://jamstack.org/"
              >Jamstack</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to Apple's Shortcuts app"
                href="https://apps.apple.com/us/app/shortcuts/id1462947752"
              >Siri Shortcuts</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to iPadOS"
                href="https://www.apple.com/ipados/"
              >iPadOS</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to Airtable"
                href="https://airtable.com"
              >AirTable</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to The Ringer"
                href="https://www.theringer.com"
              >The Ringer</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to the Relay FM network"
                href="https://www.relay.fm"
              >Relay FM</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to the Do By Friday podcast"
                href="http://dobyfriday.com"
              >Do By Friday</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to my Letterboxd profile"
                href="https://letterboxd.com/bradsiefert/"
              >Letterboxd</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to Polaroid Originals instant film"
                href="https://us.polaroidoriginals.com"
              >Instant film</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to Chicago Bears football team"
                href="https://www.instagram.com/chicagobears/"
              >Chicago Bears</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener"
                title="Link to Chelsea FC soccer team"
                href="https://www.instagram.com/chelseafc/"
              >Chelsea FC</a>&nbsp;&nbsp;&nbsp;&nbsp;
            </small>
          </p>

          <a target="_blank" class="btn btn-outline-dark btn-lg mb-5" href="files/Brad-Siefert-Resume.pdf">
            Download Resume &nbsp;📂
          </a>
        </article>
      </div>

      <div class="col-lg-4">
        <img class="img-fluid" src="@/assets/images/photo-bradsiefert.jpg" alt="Photo of Brad Siefert" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  documentDriven: false
})
useHead({
  title: 'Bio'
})
</script>