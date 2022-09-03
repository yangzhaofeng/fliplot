# fliplotjs
HTML based waveform viewer for HDL simulators.

FliplotJS, a pure-js fork of Fliplot, is an alternative to GTKWave, but this is implemented in HTML and Javascript, which make Fliplot and FliplotJS *scriptable*, *pluginable*, *portable*.

See demo at: https://fliplotjs.netlify.app/

![Demo of using https://fliplotjs.netlify.app/](demo.gif)

# Contribution

Here are the basic steps to start development.

### Start development server

 0. Clone and enter to this repo.
 1. Install javascript dependencies: `npm i`
 2. Bundle js sources: `npx webpack --mode=development --watch` 
 3. Now it can be served as a static webpage. For example, `python3 -m http.server 8000`

