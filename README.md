dpd-random
===============
Very simple Deployd Resource for the creation of random strings.

Include in your package.json like
<pre>
  "dependencies": {
    "dpd-random": "git+ssh://git@github.com:ozzroach/dpd-random.git"
  }
</pre>
then do
<pre>
npm install
</pre>
Usage in an Deployd-Event-Handler:
<pre>
dpd.random.get(function (randomstr) {
    console.log(randomstr);
}
</pre>