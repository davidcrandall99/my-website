<template>
  <div>

    <SimpleHero title="Blog" bg-image="/images/bloghero.jpeg" />
   
    <section>
      <AllPosts />
    </section>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>

export default {
  head() {
    return{
      title: 'Blog | David Crandall',
      script:[
        { 
          type: 'application/ld+json', 
          json: {
            "@context"  : "http://schema.org",
            "@type"     : "Blog",
            "headline"  : "David Crandall's Blog",
            "author"    : "David Crandall",
            "mainEntityOfPage": `https://davidcrandall.com/blog/`
          } 
        },
        { 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Person",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      },{ 
        type: 'application/ld+json', 
        json: {
          "@context"  : "http://schema.org",
          "@type"     : "Brand",
          "name"      : "David Crandall",
          "mainEntityOfPage": `https://davidcrandall.com`
        } 
      }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
