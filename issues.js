<script id="issue-template" type="text/x-handlebars-template">
  {{#each this}}
  <article>
    <header><h3>Issue #{{number}} ({{state}})</h3></header>
    <p>{{body}}</p>
    {{#if comments_count}}
    <p>{{comments_count}} Comments</p>
    {{else}}
    <p>No Comments Yet</p>
    {{/if}}
    <footer><a href="{{url}}">created {{created_at}}</a></footer>
  </article>
  {{/each}}
</script>
