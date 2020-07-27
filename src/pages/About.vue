<template>
  <Layout>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="breadcrumb">
            <div class="breadcrumb-item"><a title="Link back to home" href="/">Home</a></div>
            <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
          </div>
        </div>
      </div>

      <div class="row about">
        <div class="col-lg-7 col-xl-8">
          <article>
            <h2 class="h1">I promise this won’t be in the third person.</h2>
            <p>
              Hi, I&#8217;m Brad, and I&#8217;m a UI/UX designer experienced in designing web apps, mobile apps, 
              and front-end web development. I live in the 
              <a target="_blank" title="Link to East Garfield Park's Wikipedia" href="https://en.wikipedia.org/wiki/East_Garfield_Park,_Chicago">
              East Garfield Park</a> neighborhood of Chicago with my wife Nicole and my daughter Lydia.
            </p>

            <p>
              I value elegance, clarity, and efficiency in design. I always strive to consider 
              the user&#8217;s needs and how to best serve them. I love working with people who inspire me to learn and 
              who are serious about creating beautiful and meaningful work.
            </p>

            <p>
              Since 2018, I&#8217;ve been on the board of a homelessness non-profit, 
              <a target="_blank" title="Link to Open Arms Ministry" href="https://openarmsministry.org">Open Arms</a>, 
              focused on improving our internal systems and IT. It&#8217;s been a great opportunity to learn how to 
              blend code and nocode solutions to create more effective operations.
            </p>

            <p>
              Each year I take around 50,000 photos. I want to learn two languages in the next couple of years: Spanish 
              and JavaScript. I drink <em>a bit</em> too much Diet Coke—but I’m working on it.
            </p>

            <p>
              <small>
                Currently I&#8217;m obsessed with:<br/>
                <a target="_blank" title="Link to Design Systems Repo" href="https://designsystemsrepo.com">
                  Design Systems
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to Apple's Shortcuts app" href="https://apps.apple.com/us/app/shortcuts/id1462947752">
                  Siri Shortcuts
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to iPadOS" href="https://www.apple.com/ipados/">
                  iPadOS
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to Airtable" href="https://airtable.com">
                  AirTable
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to Makerpad" href="https://www.makerpad.co">
                  Nocode tools
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to The Ringer" href="https://www.theringer.com">
                  The Ringer
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to the Relay FM network" href="https://www.relay.fm">
                  Relay FM
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to the Do By Friday podcast" href="http://dobyfriday.com">
                  Do By Friday
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to Polaroid Originals instant film" href="https://us.polaroidoriginals.com">
                  Instant film
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to Chelsea FC soccer team" href="https://www.instagram.com/chelseafc/">
                  Chelsea FC
                </a>&nbsp;&nbsp; 
                <a target="_blank" title="Link to The Ringer" href="https://podcasts.apple.com/us/podcast/the-ringer-nba-show/id1109271715">
                  NBA podcasts
                </a>&nbsp;&nbsp;
              </small>
            </p>

            <a target="_blank" class="btn btn-primary mb-32" href="files/Brad-Siefert-Resume.pdf">
              Download Resume
            </a>
          </article>
        </div>

        <div class="col-lg-5 col-xl-4">
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
