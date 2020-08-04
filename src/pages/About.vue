<template>
  <Layout>

    <div class="container slim-contain">
      <div class="row">
        
        <div class="col-lg-12 gx-32">
          <h1>Bio</h1>
          <p class="small">I promise this won’t be in the third person. 😉</p>
        </div>

        <div class="col-lg-8 gx-32">
          <article class="lead">
            <p>
              Hi, I'm Brad, and I'm a UI/UX designer experienced in designing web apps, mobile apps, 
              and front-end web development. I live in the 
              <a 
                target="_blank" 
                title="Link to East Garfield Park's Wikipedia" 
                href="https://en.wikipedia.org/wiki/East_Garfield_Park,_Chicago"
                rel="noopener"
              >
              East Garfield Park</a> neighborhood of Chicago with my wife Nicole and my daughter Lydia.
            </p>

            <p>
              I value elegance, clarity, and efficiency in design. I always strive to consider 
              the user's needs and how to best serve them. I love working with people who inspire me to learn and 
              who are serious about creating beautiful and meaningful work.
            </p>

            <p>
              Since 2018, I've been on the board of a homelessness non-profit, 
              <a 
                target="_blank" 
                title="Link to Open Arms Ministry" 
                href="https://openarmsministry.org"
                rel="noopener"
              >Open Arms</a>, 
              focused on improving our internal systems and IT. It's been a great opportunity to learn how to 
              blend code and nocode solutions to create more effective operations.
            </p>

            <p class="mb-48">
              Each year I take around 50,000 photos. I want to learn two languages in the next couple of years: Spanish 
              and JavaScript. I drink <em>a bit</em> too much Diet Coke—but I’m working on it.
            </p>
            
            <h3 class="h4">Currently I'm obsessed with:</h3>
            <p class="mb-32">
              <small>
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Design Systems Repo" 
                  href="https://designsystemsrepo.com"
                >
                  Design Systems
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Apple's Shortcuts app" 
                  href="https://apps.apple.com/us/app/shortcuts/id1462947752"
                >
                  Siri Shortcuts
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to iPadOS" 
                  href="https://www.apple.com/ipados/"
                >
                  iPadOS
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Airtable" 
                  href="https://airtable.com"
                >
                  AirTable
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Makerpad" 
                  href="https://www.makerpad.co"
                >
                  Nocode tools
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to The Ringer" 
                  href="https://www.theringer.com"
                >
                  The Ringer
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to the Relay FM network" 
                  href="https://www.relay.fm"
                >
                  Relay FM
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to the Do By Friday podcast" 
                  href="http://dobyfriday.com"
                >
                  Do By Friday
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Polaroid Originals instant film" 
                  href="https://us.polaroidoriginals.com"
                >
                  Instant film
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to Chelsea FC soccer team"
                  href="https://www.instagram.com/chelseafc/"
                >
                  Chelsea FC
                </a>&nbsp;&nbsp; 
                <a 
                  target="_blank" 
                  rel="noopener" 
                  title="Link to The Ringer"
                  href="https://podcasts.apple.com/us/podcast/the-ringer-nba-show/id1109271715"
                >
                  NBA podcasts
                </a>&nbsp;&nbsp;
              </small>
            </p>

            <a target="_blank" class="btn btn-outline-dark mb-32" href="files/Brad-Siefert-Resume.pdf">
              Download Resume
            </a>
          </article>
        </div>

        <div class="col-lg-4">
          <g-image class="img-fluid" src="~/assets/images/photo-bradsiefert.jpg" alt="Photo of Brad Siefert" />
        </div>

      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'About'
    };
  }
};
</script>
