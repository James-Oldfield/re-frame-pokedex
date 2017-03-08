# pokedex

A simple [re-frame](https://github.com/Day8/re-frame) Pokedex app using [http-fx](https://github.com/Day8/re-frame-http-fx) for declarative http requests.

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```
