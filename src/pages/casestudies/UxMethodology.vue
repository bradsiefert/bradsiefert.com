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
              Case Study: UX Methodology
            </div>
          </div>

          <article>
            <h5 class="mb-16">Design Portfolio Case Study:</h5>
            <h1>UX Methodology</h1>
            <p>
              I often get asked about my approach to user experience design (UX). As a designer, it's easy to show a bunch 
              of pretty pictures of interfaces, but most of us know those aren't what makes someone a good designer. 
              A good designer is someone who elegantly solves user issues. It's difficult 
              to show the process and thinking that lead to making design decisions. This case study is my attempt 
              to explain how I do design thinking and what deliverables I tend to create along the way.
            </p>

            <h2 class="mt-24">Requirements</h2>

            <p>
              Ideas for a design are often the first thing that come to us with a project. These are usually 
              held within one or maybe a few person's brains. This seems obvious, but some of the most 
              difficult design work that I've ever had to do is sitting in a meeting with a client trying to 
              decipher what they are <em>really</em> want from a design. It seems obvious to them, 
              but it's a much more complicated process.
            </p>

            <p>
              I think this is one of my strongest skills. I'm always striving to being curious and to codify 
              what needs to be created and why they want it created. Being extremely clear on the client's 
              desired outcomes <strong>always</strong> leads to a better project for me. This is hard work, but I find it 
              collaborative, fun, and helpful to every subsequence step of the design process.
            </p>
            
            <h2 class="mt-24">Deliverables</h2>

            <g-image 
              class="img-fluid rounded-lg" 
              src="@/assets/images/case-study-ux-methodology-mindmap.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
              alt="Mind map for a dummy UX project"
            />

            <g-image 
              class="img-fluid rounded-lg" 
              src="@/assets/images/case-study-ux-methodology-userflow.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
              alt="User Flow Diagram example"
            />

            <g-image 
              class="img-fluid rounded-lg" 
              src="@/assets/images/case-study-ux-methodology-wireframe.jpg"
              style="border: 1px solid #eeeeee;"
              quality="100"
              alt="Wireframes for a rental web app project"
            />

            <h3 class="text-center px-64 lh-base font-size-700 my-32">I love plain text lists, I love mind maps, I love user flows, and I like wireframes.</h3>

            <p>
              I found that many times, a free flowing plain text list of requirements is the best place to start 
              when creating a project. Organizing that information can go a really long way to understanding 
              next actions. If things are a bit unwieldy or a more wicked problem, mind maps are a great tool. 
              Mind maps are a way to grab a lot of disparate ideas and make associations during or after the 
              collection process. They help to bring together ideas visually so people can process their 
              thinking in specific areas. Also, they're super fun to look at! It's a real advantage over a plain 
              text list.
            </p>
            
            <p>
              A non-negotiable for me when doing a design is creating a user flow diagram. These diagrams are 
              vital to making a holistic and well thought out project. User flows ensure that you have captured 
              every part that a user could possible step through. If you don't have something like this, you're 
              so much more likely to miss a page, a process, or a desired outcome. It's also so much easier to 
              procrastinate because you don't fully know what you're creating. On some level, you're still 
              unsure about how everything works together as a whole.
            </p>
            
            <p>
              Lastly, wireframes are a great tool for some projects, but they're optional for me. This is partly 
              due to the kinds of projects and the scale of projects that I tend to work on. I've found that 
              once I've done the necessary thinking of requirements gathering, processing through mind maps, and 
              creating user flows, I'm very ready to get designing something beautiful. That's my favorite 
              part of the process, so wireframes many times get skipped. I find that I can do the necessary 
              design thinking about layout while I'm making the interface. They're tied to each other many 
              times for me.
            </p>
            
            <p>
              This is just one designer's UX methodology. If this is helpful for you in anyway, I'd be thrilled 
              if <g-link to="/contact">you let me know</g-link>.
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
      title: 'UX Methodology'
    };
  }
};
</script>