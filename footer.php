</div>
  </div>


<script src="../../js/reveal/lib/js/head.min.js"></script>
<script src="../../js/reveal/js/reveal.min.js"></script>
<script type="text/javascript">
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
      transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: '../../js/reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: '../../js/reveal/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../../js/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../../js/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: '../../js/reveal/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      { src: '../../js/reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
  });
</script>
<script type="text/javascript" src="../../js/lessonHeader.js"></script>
</body>
</html>